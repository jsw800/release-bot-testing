export function SkillPaths({ completed, total }: { completed: number; total: number }) {
  return <div>{completed} / {total} completed</div>;
}
