import AppSidebar from '../AppSidebar';
import { SidebarProvider } from "@/components/ui/sidebar";
import { FileNode } from '../FileTree';

const mockFiles: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.html", type: "file", content: "<html></html>" },
      { name: "style.css", type: "file", content: "body {}" }
    ]
  }
];

export default function AppSidebarExample() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar 
          user={{ username: "user_abc123" }}
          currentProject={{ name: "My Project", files: mockFiles }}
          onFileSelect={(path, content) => console.log('Selected:', path)}
          onNewFile={() => console.log('New file')}
          onDownload={() => console.log('Download')}
          onLogout={() => console.log('Logout')}
        />
      </div>
    </SidebarProvider>
  );
}
