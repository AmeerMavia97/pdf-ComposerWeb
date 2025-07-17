import { Figtree } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";
import { LanguageProvider } from "../../lib/languageContext";
import { Navbar } from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Gabung PDF - Combine PDF Files Online",
  description:
    "Combine PDFs easily with GabungPDF.id! Free, fast, secure online tool to merge PDF files in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="light">
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer/>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
