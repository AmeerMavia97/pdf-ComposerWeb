"use client"
import BlogsCardSection from "@/Components/Blog/BlogsCardSection/BlogsCardSection"
import FeatureBlogSection from "@/Components/Blog/FeatureBlogSection/FeatureBlogSection"
import HeroSection from "@/Components/Blog/HeroSection/HeroSection"
import { useLanguage } from "../../../lib/languageContext"

const BlogPage = () => {
  const { currentLang, dict, loading } = useLanguage()

  if (loading || !dict) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex-1">
        <section className="overflow-hidden relative text-white bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
          <div className="relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <HeroSection lang={currentLang} dict={dict} />
          </div>
          <div>
            <FeatureBlogSection lang={currentLang} dict={dict} />
          </div>
          <div>
            <BlogsCardSection lang={currentLang} dict={dict} />
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPage
