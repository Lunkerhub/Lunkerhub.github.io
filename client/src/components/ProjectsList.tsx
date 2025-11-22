import { Plus, FolderOpen, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: string;
  name: string;
  type: string;
  updatedAt: string;
}

interface ProjectsListProps {
  projects: Project[];
  onCreateProject: () => void;
  onOpenProject: (id: string) => void;
  onDownloadProject: (id: string) => void;
  onDeleteProject: (id: string) => void;
}

export default function ProjectsList({
  projects,
  onCreateProject,
  onOpenProject,
  onDownloadProject,
  onDeleteProject,
}: ProjectsListProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Мои проекты</h1>
        <Button data-testid="button-create-project" onClick={onCreateProject}>
          <Plus className="w-4 h-4 mr-2" />
          Новый проект
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="hover-elevate cursor-pointer"
            onClick={() => onOpenProject(project.id)}
            data-testid={`card-project-${project.id}`}
          >
            <CardHeader className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg line-clamp-1">{project.name}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {project.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {project.updatedAt}
                </p>
                <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => onOpenProject(project.id)}
                    data-testid={`button-open-${project.id}`}
                  >
                    <FolderOpen className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => onDownloadProject(project.id)}
                    data-testid={`button-download-${project.id}`}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => onDeleteProject(project.id)}
                    data-testid={`button-delete-${project.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {projects.length === 0 && (
          <Card className="col-span-full p-12 text-center">
            <p className="text-muted-foreground mb-4">У вас пока нет проектов</p>
            <Button onClick={onCreateProject} data-testid="button-create-first">
              <Plus className="w-4 h-4 mr-2" />
              Создать первый проект
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
