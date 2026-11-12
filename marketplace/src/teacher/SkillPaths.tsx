export function SkillPaths({ completed, assigned }: { completed: number; assigned: number }) {
  if (assigned === 0) return <div>No students assigned yet</div>;
  return <div>{completed} / {assigned} completed ({Math.round((completed / assigned) * 100)}%)</div>;
}
