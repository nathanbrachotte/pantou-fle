
interface PDFProps {
  title: string;
  url: string;
}

function handleDownload(url: string, title: string) {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${title}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    })
    .catch(() => {
      window.open(url, "_blank");
    });
}

export default function PDF({ title, url }: PDFProps) {
  const fullUrl = url.startsWith("//") ? `https:${url}` : url;
  const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(fullUrl)}&embedded=true`;

  return (
    <div className="mx-auto w-full max-w-lg">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary-dark rounded-t-2xl">
        <div className="flex items-center gap-2 text-white min-w-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 flex-shrink-0 opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium truncate opacity-90">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={() => handleDownload(fullUrl, title)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-primary-dark bg-white rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Télécharger le PDF
        </button>
      </div>

      {/* PDF viewer via Google Docs for reliable fit-to-width */}
      <div className="relative pb-[140%] border-x border-b border-gray-200 rounded-b-2xl overflow-hidden bg-gray-50">
        <iframe
          title={title}
          src={viewerUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
    </div>
  );
}
