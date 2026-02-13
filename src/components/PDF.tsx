import { useRef, useState, useEffect } from "react";

interface PDFProps {
  title: string;
  url: string;
}

export default function PDF({ title, url }: PDFProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto w-full md:w-3/4 max-w-screen-md">
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
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary-dark bg-white rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
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
          Télécharger
        </a>
      </div>

      {/* PDF viewer */}
      <div className="relative pb-[140%] border-x border-b border-gray-200 rounded-b-2xl overflow-hidden bg-gray-50">
        <iframe
          key={width}
          ref={iframeRef}
          title={title}
          src={`${url}#toolbar=1&navpanels=0`}
          width={width}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
}
