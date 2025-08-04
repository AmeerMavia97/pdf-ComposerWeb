import { getDictionary } from "../../../lib/dictionaries";
import { LanguageProvider } from "../../../lib/languageContext";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";


export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.Seo.Home?.title || "Default Title",
    description: dict.Seo.Home?.description || "Default description",
  };
}


export default function LangLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
