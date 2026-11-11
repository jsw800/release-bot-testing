import { useIsFeatureFlagEnabled } from "../flags";
export function ReferenceSheet() {
  if (!useIsFeatureFlagEnabled('reference_sheets')) return null;
  return <aside>Reference sheet</aside>;
}
