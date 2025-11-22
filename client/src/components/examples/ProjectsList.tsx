import ProjectsList, { Project } from '../ProjectsList';

const mockProjects: Project[] = [
  { id: '1', name: 'My Website', type: 'HTML/CSS/JS', updatedAt: '2 часа назад' },
  { id: '2', name: 'Python Script', type: 'Python', updatedAt: '1 день назад' },
  { id: '3', name: 'React App', type: 'React', updatedAt: '3 дня назад' },
];

export default function ProjectsListExample() {
  return (
    <div className="min-h-screen bg-background">
      <ProjectsList 
        projects={mockProjects}
        onCreateProject={() => console.log('Create project')}
        onOpenProject={(id) => console.log('Open project:', id)}
        onDownloadProject={(id) => console.log('Download project:', id)}
        onDeleteProject={(id) => console.log('Delete project:', id)}
      />
    </div>
  );
}
