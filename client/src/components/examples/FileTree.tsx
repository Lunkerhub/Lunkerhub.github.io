import { useState } from 'react';
import FileTree, { FileNode } from '../FileTree';

const mockFiles: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.html", type: "file", content: "<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>" },
      { name: "style.css", type: "file", content: "body {\n  margin: 0;\n  font-family: Arial;\n}" },
      { name: "script.js", type: "file", content: "console.log('Hello!');" }
    ]
  },
  {
    name: "python",
    type: "folder",
    children: [
      { name: "main.py", type: "file", content: "print('Hello, World!')" }
    ]
  },
  { name: "README.md", type: "file", content: "# My Project" }
];

export default function FileTreeExample() {
  const [selected, setSelected] = useState<string>("");
  
  return (
    <div className="h-screen bg-sidebar p-4">
      <FileTree 
        files={mockFiles} 
        onFileSelect={(path, content) => {
          setSelected(path);
          console.log('Selected:', path, content);
        }}
        selectedPath={selected}
      />
    </div>
  );
}
