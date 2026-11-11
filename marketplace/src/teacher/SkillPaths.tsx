export function SkillPaths({ completed, assigned }: { completed: number; assigned: number }) {
  return <div>{completed} / {assigned} completed</div>;
}
