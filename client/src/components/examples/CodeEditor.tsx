import { useState } from 'react';
import CodeEditor from '../CodeEditor';

export default function CodeEditorExample() {
  const [code, setCode] = useState('function hello() {\n  console.log("Hello, World!");\n}\n\nhello();');
  
  return (
    <div className="h-screen bg-background">
      <CodeEditor 
        value={code}
        onChange={setCode}
        language="javascript"
      />
    </div>
  );
}
