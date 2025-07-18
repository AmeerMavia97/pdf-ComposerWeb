"use client";
import MiniFooter from "@/Components/MiniFooter/MiniFooter";
import HeroSection from "@/Components/Policy/HeroSection";
import Policy from "@/Components/Policy/Policy";
import Link from "next/link";
import React from "react";

const Terms = [
  {
    title: "Fair Use",
    desc: "Use our service responsibly and lawfully",
  },
  {
    title: "Your Files",
    desc: "You retain ownership of all uploaded files",
  },
  {
    title: "No Abuse",
    desc: "Prohibited uses will result in termination",
  },
  {
    title: "Limited Liability",
    desc: `Service provided "as is" without warranties`,
  },
];

const TermOfServices = () => {


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
      <HeroSection props={"Terms"}></HeroSection>

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
                    <button
                      onClick={() => scrollToSection("acceptance")}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center bg-blue-100 !text-blue-800 font-medium"
                    >
                      <span className="mr-2">✅</span>Acceptance of Terms
                    </button>
                    <button
                    onClick={() => scrollToSection("use-of-site")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🔧</span>Use of the Site
                    </button>
                    <button   onClick={() => scrollToSection("user-files")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">📁</span>User Files
                    </button>
                    <button   onClick={() => scrollToSection("intellectual-property")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">©️</span>Intellectual Property
                    </button>
                    <button   onClick={() => scrollToSection("limitation-liability")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">⚠️</span>Limitation of Liability
                    </button>
                    <button   onClick={() => scrollToSection("indemnification")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">⚖️</span>Indemnification
                    </button>
                    <button   onClick={() => scrollToSection("termination")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🚫</span>Termination
                    </button>
                    <button   onClick={() => scrollToSection("governing-law")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🏛️</span>Governing Law
                    </button>
                    <button   onClick={() => scrollToSection("changes")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">🔄</span>Changes to Terms
                    </button>
                    <button   onClick={() => scrollToSection("contact")} className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center !text-gray-600 hover:bg-gray-100 hover:!text-gray-900">
                      <span className="mr-2">📧</span>Contact Us
                    </button>
                  </div>
                </div>
                <div className="p-6 mt-6 bg-blue-50 rounded-2xl shadow-lg">
                  <h4 className="mb-3 font-bold !text-blue-900">
                    📋 Terms Summary
                  </h4>
                  <ul className="space-y-2 text-sm !text-blue-800">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">•</span>Free PDF
                      combining service
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">•</span>Must be 18+
                      years old to use
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">•</span>Files deleted
                      within 1 hour
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">•</span>Use only for
                      lawful purposes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="overflow-hidden bg-white rounded-2xl shadow-lg">
                <div className="p-8 space-y-12 lg:p-12">
                  <div id="acceptance">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">✅</span>Acceptance of Terms
                    </h2>
                    <div className="max-w-none !text-gray-700 prose prose-lg">
                      <div className="mb-6 text-lg leading-relaxed !text-gray-700">
                        Welcome to www.gabungpdf.id ("the Site"), a service
                        provided by Gabung PDF ("we," "us," or "our"). These
                        Terms of Service ("Terms") govern your use of the Site
                        and its PDF combining services. By accessing or using
                        the Site, you agree to be bound by these Terms.
                      </div>
                      <div className="p-6 bg-blue-50 rounded-r-lg border-l-4 border-blue-500">
                        <p className="mb-2 font-semibold !text-blue-900">
                          Important Agreement:
                        </p>
                        <p className="!text-blue-800">
                          If you do not agree to these Terms, please do not use
                          the Site.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="use-of-site">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🔧</span>Use of the Site
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Eligibility
                        </h3>
                        <p className="!text-gray-700">
                          You must be at least 18 years old or have the legal
                          capacity to enter into these Terms to use the Site.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Permitted Use
                        </h3>
                        <p className="!text-gray-700">
                          The Site allows you to upload PDF files, combine them
                          into a single PDF, and download the result. You may
                          only use the Site for lawful purposes and in
                          accordance with these Terms.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Prohibited Use
                        </h3>
                        <p className="mb-4 !text-gray-700">You may not:</p>
                        <ul className="ml-4 space-y-2 list-disc list-inside !text-gray-700">
                          <li>
                            Upload files containing viruses, malware, or other
                            harmful code
                          </li>
                          <li>
                            Use the Site to violate any applicable laws,
                            regulations, or third-party rights
                          </li>
                          <li>
                            Attempt to interfere with, disrupt, or
                            reverse-engineer the Site's functionality
                          </li>
                          <li>
                            Use the Site for commercial purposes without our
                            prior written consent
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="user-files">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">📁</span>User Files
                    </h2>
                    <div className="space-y-6">
                      <div className="p-6 bg-green-50 rounded-xl">
                        <h3 className="mb-3 text-xl font-semibold !text-green-900">
                          Temporary Processing
                        </h3>
                        <p className="!text-green-800">
                          Uploaded files are processed to combine PDFs and are
                          automatically deleted from our servers within one (1)
                          hour of processing. We do not store or retain your
                          files beyond this period.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Your Responsibility
                        </h3>
                        <p className="!text-gray-700">
                          You are solely responsible for the content of the
                          files you upload. You must ensure that you have the
                          right to upload and process these files and that they
                          do not infringe on any third-party rights (e.g.,
                          copyrights, trademarks).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="intellectual-property">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">©️</span>Intellectual Property
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Site Content
                        </h3>
                        <p className="!text-gray-700">
                          All content on the Site, including text, graphics,
                          logos, and software, is owned by or licensed to us and
                          is protected by intellectual property laws.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          User Content
                        </h3>
                        <p className="!text-gray-700">
                          You retain ownership of the files you upload. By
                          uploading files, you grant us a limited,
                          non-exclusive, royalty-free license to process your
                          files solely to provide the PDF combining service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="limitation-liability">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">⚠️</span>Limitation of Liability
                    </h2>
                    <div className="space-y-6">
                      <div className="p-6 bg-yellow-50 rounded-xl">
                        <h3 className="mb-3 text-xl font-semibold !text-yellow-900">
                          No Warranty
                        </h3>
                        <p className="!text-yellow-800">
                          The Site is provided "as is" without warranties of any
                          kind, express or implied, including warranties of
                          merchantability, fitness for a particular purpose, or
                          non-infringement.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Liability Cap
                        </h3>
                        <p className="!text-gray-700">
                          To the fullest extent permitted by law, we are not
                          liable for any indirect, incidental, special, or
                          consequential damages arising from your use of the
                          Site, even if advised of the possibility of such
                          damages.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                          Service Interruptions
                        </h3>
                        <p className="!text-gray-700">
                          We do not guarantee uninterrupted or error-free access
                          to the Site and are not liable for any delays,
                          downtime, or data loss.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="indemnification">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">⚖️</span>Indemnification
                    </h2>
                    <div className="p-6 bg-red-50 rounded-r-lg border-l-4 border-red-500">
                      <p className="!text-red-800">
                        You agree to indemnify and hold us harmless from any
                        claims, losses, or damages, including legal fees,
                        arising from your use of the Site, your uploaded files,
                        or your violation of these Terms.
                      </p>
                    </div>
                  </div>
                  <div id="termination">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🚫</span>Termination
                    </h2>
                    <p className="!text-gray-700">
                      We may suspend or terminate your access to the Site at our
                      sole discretion, without notice, if you violate these
                      Terms or for any other reason.
                    </p>
                  </div>
                  <div id="governing-law">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🏛️</span>Governing Law
                    </h2>
                    <p className="!text-gray-700">
                      These Terms are governed by the laws of Indonesia, without
                      regard to conflict of law principles. Any disputes arising
                      from these Terms will be resolved in the courts of
                      Indonesia.
                    </p>
                  </div>
                  <div id="changes">
                    <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                      <span className="mr-3">🔄</span>Changes to Terms
                    </h2>
                    <div className="space-y-4">
                      <p className="!text-gray-700">
                        We may update these Terms from time to time. Changes
                        will be posted on this page with an updated "Last
                        Updated" date.
                      </p>
                      <div className="p-6 bg-gray-50 rounded-xl">
                        <p className="!text-gray-700">
                          Your continued use of the Site after changes
                          constitutes acceptance of the updated Terms.
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
                        If you have questions about these Terms, please contact
                        us at{" "}
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
                    <h3 className="mb-2 font-bold !text-gray-900">Need Help?</h3>
                    <p className="!text-gray-600">
                      Contact us if you have questions about these terms or our
                      service.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      className="inline-flex justify-center items-center px-4 py-2 !text-gray-700 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
                      href="/privacy-policy"
                    >
                      🔒 Privacy Policy
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
                      Contact Legal Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Policy
        Points={Terms}
        title={"Key Agreement Points"}
        desc={
          "Understanding your rights and responsibilities when using our service."
        }
      ></Policy>
      <MiniFooter />
    </>
  );
};

export default TermOfServices;
