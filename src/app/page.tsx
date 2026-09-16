import HomePage from "@/components/HomePage";
import { original } from "@/content/original";

/** Part 1 — layout clone of the original template. */
export default function Page() {
  return <HomePage content={original} theme="original" />;
}
