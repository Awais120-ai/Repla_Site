import { THEME_SCRIPT } from "@/components/theme/theme";

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
