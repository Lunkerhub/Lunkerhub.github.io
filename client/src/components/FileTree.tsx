import { useState } from "react";
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  content?: string;
}

interface FileTreeProps {
  files: FileNode[];
  onFileSelect: (path: string, content: string) => void;
  selectedPath?: string;
}

export default function FileTree({ files, onFileSelect, selectedPath }: FileTreeProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["/"]));

  const toggleExpand = (path: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpanded(newExpanded);
  };

  const renderNode = (node: FileNode, path: string, level: number = 0) => {
    const fullPath = path + "/" + node.name;
    const isExpanded = expanded.has(fullPath);
    const isSelected = selectedPath === fullPath;

    if (node.type === "folder") {
      return (
        <div key={fullPath}>
          <Button
            variant="ghost"
            size="sm"
            className={`w-full justify-start gap-1 h-8 hover-elevate ${isSelected ? 'bg-sidebar-accent' : ''}`}
            style={{ paddingLeft: `${level * 12 + 8}px` }}
            onClick={() => toggleExpand(fullPath)}
            data-testid={`folder-${node.name}`}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 flex-shrink-0" />
            ) : (
              <Folder className="w-4 h-4 flex-shrink-0" />
            )}
            <span className="text-sm truncate">{node.name}</span>
          </Button>
          {isExpanded && node.children && (
            <div>
              {node.children.map((child) => renderNode(child, fullPath, level + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Button
        key={fullPath}
        variant="ghost"
        size="sm"
        className={`w-full justify-start gap-1 h-8 hover-elevate ${isSelected ? 'bg-sidebar-accent' : ''}`}
        style={{ paddingLeft: `${level * 12 + 24}px` }}
        onClick={() => onFileSelect(fullPath, node.content || "")}
        data-testid={`file-${node.name}`}
      >
        <File className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm truncate">{node.name}</span>
      </Button>
    );
  };

  return (
    <div className="py-2">
      {files.map((node) => renderNode(node, "", 0))}
    </div>
  );
}
