const CombinePdfForm = ({ lang, dict }) => {
  return (
    <>
      <section id="merge-tool" className="px-4 py-8 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="p-6 mb-6 outerbox rounded-lg border border-gray-200 shadow-md transition-colors ">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold ">{dict.combinePdf.title}</h1>
          </div>
          <form>
            <div className="p-8 mb-6 innerbox text-center bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed transition-colors hover:!border-blue-500 dark:hover:border-blue-500 ">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">{dict.combinePdf.dragDrop}</p>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{dict.combinePdf.clickBrowse}</p>
              <input type="file" multiple accept=".pdf" className="hidden" id="file-upload" />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md transition-colors cursor-pointer dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                {dict.combinePdf.selectFiles}
              </label>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{dict.combinePdf.maxSize}</p>
            </div>
            <button
              type="submit"
              disabled
              className="px-4 py-3 w-full font-semibold text-white bg-blue-600 rounded-md transition-colors dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed submitbutton"
            >
              {dict.combinePdf.combineButton} 0 {dict.combinePdf.filesCount}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default CombinePdfForm
