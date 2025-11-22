import { FolderOpen, Settings, LogOut, Plus, Download } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import FileTree, { FileNode } from "./FileTree";

interface AppSidebarProps {
  user: { username: string };
  currentProject?: { name: string; files: FileNode[] };
  onFileSelect: (path: string, content: string) => void;
  onNewFile: () => void;
  onDownload: () => void;
  onLogout: () => void;
  selectedPath?: string;
}

export default function AppSidebar({
  user,
  currentProject,
  onFileSelect,
  onNewFile,
  onDownload,
  onLogout,
  selectedPath,
}: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user.username}</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {currentProject ? (
          <SidebarGroup>
            <SidebarGroupLabel>{currentProject.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-2 pb-2">
                <Button
                  data-testid="button-new-file"
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={onNewFile}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Новый файл
                </Button>
                <Button
                  data-testid="button-download-zip"
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={onDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Скачать ZIP
                </Button>
              </div>
              <FileTree
                files={currentProject.files}
                onFileSelect={onFileSelect}
                selectedPath={selectedPath}
              />
            </SidebarGroupContent>
          </SidebarGroup>
        ) : (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FolderOpen className="w-4 h-4" />
                    <span>Проекты</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings className="w-4 h-4" />
                    <span>Настройки</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <Button
          data-testid="button-logout"
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Выход
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
