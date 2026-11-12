export function Practice({ title, loading }: { title?: string; loading?: boolean }) {
  if (loading) return <h1 className="practice-title">Loading…</h1>;
  return <h1 className="practice-title">{title ?? "Practice"}</h1>;
}
