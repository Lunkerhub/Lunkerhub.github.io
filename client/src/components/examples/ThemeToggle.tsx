import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <div className="p-8 flex items-center gap-4">
      <ThemeToggle />
      <p className="text-sm">Переключить тему</p>
    </div>
  );
}
