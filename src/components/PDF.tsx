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
    <div className="mx-auto w-full md:w-2/3 max-w-screen-md">
      <div className="relative pb-[148%]">
        <iframe
          key={width}
          ref={iframeRef}
          title={title}
          src={`${url}#toolbar=1&navpanels=0`}
          width={width}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute bottom-4 right-4">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-primary-dark hover:bg-primary rounded-lg flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white h-10 p-1"
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
          </a>
        </div>
      </div>
    </div>
  );
}
