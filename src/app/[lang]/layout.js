import { getDictionary } from "../../../lib/dictionaries";
import { LanguageProvider } from "../../../lib/languageContext";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";


export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.metadata?.title || "Default Title",
    description: dict.metadata?.description || "Default description",
  };
}


export default function LangLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
