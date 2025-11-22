import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import CodeEditor from "@/components/CodeEditor";
import AIAssistant from "@/components/AIAssistant";
import ProjectsList from "@/components/ProjectsList";
import CreateProjectDialog from "@/components/CreateProjectDialog";
import ThemeToggle from "@/components/ThemeToggle";
import { FileNode } from "@/components/FileTree";
import { Button } from "@/components/ui/button";
import { PanelRightClose, PanelRightOpen, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import JSZip from "jszip";
import { saveAs } from "file-saver";

interface Project {
  id: string;
  name: string;
  type: string;
  updatedAt: string;
  files: FileNode[];
}

export default function Home() {
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState<"projects" | "editor">("projects");
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [selectedFile, setSelectedFile] = useState<{ path: string; content: string } | null>(null);
  const [showAI, setShowAI] = useState(true);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "My Website",
      type: "HTML/CSS/JS",
      updatedAt: "2 часа назад",
      files: [
        {
          name: "src",
          type: "folder",
          children: [
            { name: "index.html", type: "file", content: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Website</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>" },
            { name: "style.css", type: "file", content: "body {\n  margin: 0;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n}" },
            { name: "script.js", type: "file", content: "console.log('Hello from my website!');" }
          ]
        },
        { name: "README.md", type: "file", content: "# My Website\n\nA simple website project." }
      ]
    },
    {
      id: "2",
      name: "Python Script",
      type: "Python",
      updatedAt: "1 день назад",
      files: [
        { name: "main.py", type: "file", content: "def main():\n    print('Hello, Python!')\n\nif __name__ == '__main__':\n    main()" },
        { name: "requirements.txt", type: "file", content: "" }
      ]
    }
  ]);

  const handleOpenProject = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setCurrentProject(project);
      setCurrentView("editor");
      setSelectedFile(null);
    }
  };

  const handleCreateProject = (name: string, type: string) => {
    const newProject: Project = {
      id: Date.now().toString(),
      name,
      type,
      updatedAt: "Только что",
      files: [
        { name: "main.txt", type: "file", content: `# ${name}\n\nНовый ${type} проект` }
      ]
    };
    setProjects([...projects, newProject]);
    setShowCreateDialog(false);
    toast({
      title: "Проект создан",
      description: `Проект "${name}" успешно создан`,
    });
  };

  const handleDownloadProject = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (!project) return;

    const zip = new JSZip();
    
    const addFilesToZip = (files: FileNode[], folder: JSZip | null = null) => {
      files.forEach((file) => {
        if (file.type === "folder" && file.children) {
          const newFolder = folder ? folder.folder(file.name)! : zip.folder(file.name)!;
          addFilesToZip(file.children, newFolder);
        } else if (file.type === "file") {
          const target = folder || zip;
          target.file(file.name, file.content || "");
        }
      });
    };

    addFilesToZip(project.files);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${project.name}.zip`);
      toast({
        title: "Загрузка начата",
        description: `Проект "${project.name}" скачивается...`,
      });
    });
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    toast({
      title: "Проект удален",
      description: "Проект успешно удален",
    });
  };

  const handleFileSelect = (path: string, content: string) => {
    setSelectedFile({ path, content });
  };

  const handleCodeChange = (newContent: string) => {
    if (selectedFile) {
      setSelectedFile({ ...selectedFile, content: newContent });
    }
  };

  const handleSaveFile = () => {
    toast({
      title: "Сохранено",
      description: "Файл успешно сохранен",
    });
  };

  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  if (currentView === "projects") {
    return (
      <div className="min-h-screen bg-background">
        <header className="flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-lg font-semibold">Code Studio</h1>
          <ThemeToggle />
        </header>
        <ProjectsList
          projects={projects}
          onCreateProject={() => setShowCreateDialog(true)}
          onOpenProject={handleOpenProject}
          onDownloadProject={handleDownloadProject}
          onDeleteProject={handleDeleteProject}
        />
        <CreateProjectDialog
          open={showCreateDialog}
          onClose={() => setShowCreateDialog(false)}
          onCreate={handleCreateProject}
        />
      </div>
    );
  }

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar
          user={{ username: "user_abc123" }}
          currentProject={currentProject ? { name: currentProject.name, files: currentProject.files } : undefined}
          onFileSelect={handleFileSelect}
          onNewFile={() => {
            toast({ title: "Новый файл", description: "Функция в разработке" });
          }}
          onDownload={() => currentProject && handleDownloadProject(currentProject.id)}
          onLogout={() => {
            setCurrentView("projects");
            setCurrentProject(null);
            setSelectedFile(null);
          }}
          selectedPath={selectedFile?.path}
        />

        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between gap-2 p-2 border-b border-border">
            <div className="flex items-center gap-2">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setCurrentView("projects");
                    setCurrentProject(null);
                  }}
                  data-testid="button-back-to-projects"
                >
                  Проекты
                </Button>
                <span className="text-muted-foreground">/</span>
                <span className="text-sm font-medium">{currentProject?.name}</span>
                {selectedFile && (
                  <>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-sm text-muted-foreground">{selectedFile.path.split('/').pop()}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {selectedFile && (
                <Button
                  size="sm"
                  onClick={handleSaveFile}
                  data-testid="button-save"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Сохранить
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAI(!showAI)}
                data-testid="button-toggle-ai"
              >
                {showAI ? <PanelRightClose className="w-5 h-5" /> : <PanelRightOpen className="w-5 h-5" />}
              </Button>
              <ThemeToggle />
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-hidden">
              {selectedFile ? (
                <CodeEditor
                  value={selectedFile.content}
                  onChange={handleCodeChange}
                  language={
                    selectedFile.path.endsWith('.html') ? 'html' :
                    selectedFile.path.endsWith('.css') ? 'css' :
                    selectedFile.path.endsWith('.js') ? 'javascript' :
                    selectedFile.path.endsWith('.py') ? 'python' :
                    selectedFile.path.endsWith('.md') ? 'markdown' :
                    'plaintext'
                  }
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Выберите файл для редактирования
                </div>
              )}
            </main>

            {showAI && (
              <aside className="w-80 border-l border-border">
                <AIAssistant />
              </aside>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
