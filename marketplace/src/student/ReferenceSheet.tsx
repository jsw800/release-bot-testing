export function ReferenceSheet({ query }: { query?: string }) {
  return <section className="reference-sheet">{query ? `Results for ${query}` : "Reference sheet"}</section>;
}
