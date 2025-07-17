import { LanguageProvider } from "../../../lib/languageContext";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";

export default function LangLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
