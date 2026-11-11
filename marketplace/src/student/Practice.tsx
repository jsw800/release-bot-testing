export function Practice({ title }: { title?: string }) {
  return <h1 className="practice-title">{title ?? "Practice"}</h1>;
}
