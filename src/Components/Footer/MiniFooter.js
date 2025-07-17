import React from "react";

const MiniFooter = () => {
  return (
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
      <div class="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
        <h2 class="mb-4 text-3xl font-bold text-white">
          Ready to Try Our PDF Tools?
        </h2>
        <p class="mb-8 text-xl text-blue-100">
          Put what you've learned into practice with our free Gabung PDF tool.
        </p>
        <a
          class="inline-flex items-center px-8 py-4 font-bold text-blue-600 bg-white rounded-xl shadow-xl transition-colors transform hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
          href="https://www.gabungpdf.id/combine-pdf"
        >
          <svg
            class="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Combine PDFs Now
        </a>
      </div>
    </section>
  );
};

export default MiniFooter;
