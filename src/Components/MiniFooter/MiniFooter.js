import Link from "next/link";
import React from "react";

const MiniFooter = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold !text-white">
            Ready to Combine Your PDFs Securely?
          </h2>
          <p className="mb-8 text-xl !text-blue-100">
            Experience our privacy-focused PDF combining service with complete
            peace of mind.
          </p>
          <Link
            className="inline-flex items-center px-8 py-4 font-bold text-blue-600 bg-white rounded-xl shadow-xl transition-colors transform hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
            href="/combine-pdf"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Combine PDFs Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default MiniFooter;
