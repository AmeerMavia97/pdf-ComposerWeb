"use client";
import MiniFooter from "@/Components/MiniFooter/MiniFooter";
import HeroSection from "@/Components/Policy/HeroSection";
import Policy from "@/Components/Policy/Policy";
import Link from "next/link";
import React from "react";

const policy = [
  {
    title: "Auto-Delete",
    desc: "Files automatically deleted within 1 hour",
  },
  {
    title: "Encrypted Transfer",
    desc: "All uploads use secure HTTPS encryption",
  },
  {
    title: "No File Reading",
    desc: "We never access or read your file contents",
  },
  {
    title: "No Sharing",
    desc: "Your files are never shared with third parties",
  },
];

const page = () => {


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = window.innerHeight * 0.15; // 10% of viewport height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <HeroSection props={"Policy"}></HeroSection>

      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h3 className="flex items-center mb-6 font-bold !text-gray-900">
                    <svg
                      className="mr-2 w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      ></path>
                    </svg>
                    Table of Contents
                  </h3>
                  <div className="space-y-2">
                    <button  onClick={() => scrollToSection("Overview")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center bg-blue-100 !text-blue-800 font-medium">
                      <span className="mr-2">👁️</span>Overview
                    </button>
                    <button  onClick={() => scrollToSection("information-collection")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">📊</span>Information We Collect
                    </button>
                    <button  onClick={() => scrollToSection("how-we-use")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🔧</span>How We Use Your
                      Information
                    </button>
                    <button  onClick={() => scrollToSection("data-retention")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🗄️</span>Data Retention and
                      Deletion
                    </button>
                    <button  onClick={() => scrollToSection("data-sharing")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🤝</span>Data Sharing
                    </button>
                    <button  onClick={() => scrollToSection("data-security")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🔒</span>Data Security
                    </button>
                    <button  onClick={() => scrollToSection("international-transfers")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🌍</span>International Data
                      Transfers
                    </button>
                    <button  onClick={() => scrollToSection("your-rights")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">⚖️</span>Your Rights
                    </button>
                    <button  onClick={() => scrollToSection("third-party-links")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🔗</span>Third-Party Links
                    </button>
                    <button  onClick={() => scrollToSection("children")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">👶</span>Children's Privacy
                    </button>
                    <button  onClick={() => scrollToSection("changes")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🔄</span>Changes to This Policy
                    </button>
                    <button  onClick={() => scrollToSection("contact")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">📧</span>Contact Us
                    </button>
                  </div>
                </div>
                <div className="p-6 mt-6 bg-blue-50 rounded-2xl shadow-lg">
                  <h4 className="mb-3 font-bold text-blue-900">
                    🔒 Privacy Summary
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>Files
                      deleted within 1 hour
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>We don't
                      store your documents
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>Minimal data
                      collection
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>End-to-end
                      encryption
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="overflow-hidden bg-white rounded-2xl shadow-lg">
                <div className="p-8 space-y-12 lg:p-12">
                  <div id="Overview">
                    <h2 className=" flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">👁️</span>Overview
                    </h2>
                    <div className="max-w-none !text-gray-700 prose prose-lg">
                      <p className="mb-6 text-lg leading-relaxed !text-gray-700">
                        At www.gabungpdf.id ("the Site"), operated by Gabung PDF
                        ("we," "us," or "our"), we are committed to protecting
                        your privacy. This Privacy Policy explains how we
                        collect, use, and protect your information when you use
                        our PDF combining service. By using the Site, you agree
                        to this Privacy Policy.
                      </p>
                      <div className="p-6 bg-blue-50 rounded-r-lg border-l-4 border-blue-500">
                        <p className="mb-2 font-semibold !text-blue-900">
                          Our Key Principle:
                        </p>
                        <p className="!text-blue-800">
                          We process your files solely to provide our service
                          and automatically delete them within one hour. We do
                          not access, review, or store the content of your files
                          beyond this necessary processing period.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="information-collection">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">📊</span>Information We Collect
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          User-Uploaded Files
                        </h3>
                        <p className="mb-4 !text-gray-700">
                          When you use our service, you upload PDF files to
                          combine them. These files may contain personal
                          information, but we do not access, review, or store
                          the content of your files beyond the period necessary
                          for temporary processing.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Automatically Collected Data
                        </h3>
                        <p className="mb-4 !text-gray-700">
                          We may collect non-personal information, such as:
                        </p>
                        <ul className="ml-4 space-y-2 list-disc list-inside !text-gray-700">
                          <li>
                            Device information (e.g., browser type, operating
                            system, IP address)
                          </li>
                          <li>
                            Usage data (e.g., pages visited, time spent on the
                            Site, and interactions with the service)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Cookies and Tracking
                        </h3>
                        <p className="!text-gray-700">
                          We may use cookies or similar technologies to improve
                          your experience and analyze Site usage. You can manage
                          cookie preferences through your browser settings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="how-we-use">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🔧</span>How We Use Your
                      Information
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Service Delivery
                        </h3>
                        <p className="!text-gray-700">
                          We process your uploaded PDF files solely to combine
                          them into a single PDF and provide the download link.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Site Improvement
                        </h3>
                        <p className="!text-gray-700">
                          We use non-personal data (e.g., usage statistics) to
                          analyze and improve the Site's functionality and
                          performance.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Legal Compliance
                        </h3>
                        <p className="!text-gray-700">
                          We may use or disclose information if required by law
                          or to protect our rights, safety, or property.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="data-retention">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🗄️</span>Data Retention and
                      Deletion
                    </h2>
                    <div className="space-y-6">
                      <div className="p-6 bg-green-50 rounded-xl">
                        <h3 className="mb-3 text-xl font-semibold !text-green-900">
                          Uploaded Files
                        </h3>
                        <p className="!text-green-800">
                          All uploaded PDF files and the resulting combined PDF
                          are automatically deleted from our servers within one
                          (1) hour of processing. We do not retain copies of
                          your files.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Other Data
                        </h3>
                        <p className="!text-gray-700">
                          Non-personal data (e.g., usage statistics) may be
                          retained for as long as necessary to improve the Site
                          or comply with legal obligations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="data-sharing">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🤝</span>Data Sharing
                    </h2>
                    <div className="space-y-6">
                      <div className="p-6 bg-red-50 rounded-xl">
                        <h3 className="mb-3 text-xl font-semibold !text-red-900">
                          No Third-Party Sharing
                        </h3>
                        <p className="!text-red-800">
                          We do not sell, share, or transfer your uploaded files
                          or personal information to third parties, except as
                          required by law or to protect our rights.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Service Providers
                        </h3>
                        <p className="!text-gray-700">
                          We may use third-party service providers (e.g.,
                          hosting or analytics providers) to operate the Site.
                          Confidentiality obligations bind these providers and
                          may only process data on our behalf.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="data-security">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🔒</span>Data Security
                    </h2>
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <p className="!text-blue-800">
                        We implement reasonable technical and organizational
                        measures to protect your data from unauthorized access,
                        loss, or misuse. However, no online service is
                        completely secure, and we cannot guarantee absolute
                        security.
                      </p>
                    </div>
                  </div>
                  <div id="international-transfers">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🌍</span>International Data
                      Transfers
                    </h2>
                    <div className="p-6 bg-yellow-50 rounded-r-lg border-l-4 border-yellow-500">
                      <p className="!text-yellow-800">
                        If you are outside Indonesia, your data may be
                        transferred to and processed in Indonesia or other
                        countries where our servers or service providers are
                        located. We ensure appropriate safeguards are in place
                        for such transfers.
                      </p>
                    </div>
                  </div>
                  <div id="your-rights">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">⚖️</span>Your Rights
                    </h2>
                    <div className="space-y-6">
                      <p className="!text-gray-700">
                        Depending on your location, you may have rights under
                        applicable data protection laws, such as:
                      </p>
                      <ul className="ml-4 space-y-2 list-disc list-inside !text-gray-700">
                        <li>
                          Accessing or requesting the deletion of your data
                        </li>
                        <li>
                          Objecting to or restricting certain data processing
                        </li>
                      </ul>
                      <div className="p-6 bg-blue-50 rounded-xl">
                        <p className="!text-blue-800">
                          To exercise these rights, contact us at
                          admin@gabungpdf.id. Note that because we delete files
                          within one hour, we may not retain any personal data
                          to provide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="third-party-links">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🔗</span>Third-Party Links
                    </h2>
                    <p className="!text-gray-700">
                      The Site may contain links to third-party websites. We are
                      not responsible for the privacy practices or content of
                      those sites.
                    </p>
                  </div>
                  <div id="children">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">👶</span>Children's Privacy
                    </h2>
                    <div className="p-6 bg-orange-50 rounded-r-lg border-l-4 border-orange-500">
                      <p className="!text-orange-800">
                        The Site is not intended for users under 18 years old.
                        We do not knowingly collect personal information from
                        children.
                      </p>
                    </div>
                  </div>
                  <div id="changes">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🔄</span>Changes to This Policy
                    </h2>
                    <div className="space-y-4">
                      <p className="!text-gray-700">
                        We may update this Privacy Policy from time to time.
                        Changes will be posted on this page with an updated
                        "Last Updated" date.
                      </p>
                      <div className="p-6 bg-gray-50 rounded-xl">
                        <p className="!text-gray-700">
                          Your continued use of the Site after changes
                          constitutes acceptance of the updated Privacy Policy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="contact">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">📧</span>Contact Us
                    </h2>
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <p className="!text-blue-800">
                        If you have questions about this Privacy Policy, please
                        contact us at{" "}
                        <Link href="mailto:admin@gabungpdf.id">
                          admin@gabungpdf.id
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 mt-12 bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="mb-2 font-bold !text-gray-900">
                      Have Questions?
                    </h3>
                    <p className="!text-gray-600">
                      We're here to help with any privacy concerns or questions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      className="inline-flex justify-center items-center px-4 py-2 !text-gray-700 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
                      href="/terms-of-service"
                    >
                      📄 Terms of Service
                    </Link>
                    <Link
                      href="mailto:admin@gabungpdf.id"
                      className="inline-flex justify-center items-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg transition-all duration-200 transform hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1"
                    >
                      <svg
                        className="mr-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      Contact Our Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Policy
        Points={policy}
        title={"Our Privacy Commitment"}
        desc={
          "We take your privacy seriously. Here's what makes our service trustworthy"
        }
      />
      <MiniFooter />
    </>
  );
};

export default page;
