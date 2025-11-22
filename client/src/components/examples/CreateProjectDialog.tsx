import { useState } from 'react';
import CreateProjectDialog from '../CreateProjectDialog';
import { Button } from '@/components/ui/button';

export default function CreateProjectDialogExample() {
  const [open, setOpen] = useState(true);
  
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <CreateProjectDialog 
        open={open}
        onClose={() => setOpen(false)}
        onCreate={(name, type) => {
          console.log('Created:', name, type);
          setOpen(false);
        }}
      />
    </div>
  );
}
