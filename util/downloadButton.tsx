"use client"; // This marks the file as a Client Component

import { useState, useEffect } from "react";
import { ArrowDown, HardDrive } from "lucide-react";

const DownloadButton = () => {
  const [bounceHeight, setBounceHeight] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounceHeight((prevHeight) => (prevHeight === 20 ? 30 : 20));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="/EREN_ONAL.pdf"
      download="EREN ONAL.pdf"
      className="flex flex-col items-center justify-center gap-2 fixed bottom-10 right-10 bg-gray-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
      style={{
        height: `${25 + bounceHeight}px`,
        transition: "height .5s",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#4b5563",
        zIndex: 1000,
      }}
    >
      <ArrowDown
        size={18}
        className="rounded-lg pt-2"
        style={{
          marginTop: "-1rem",
        }}
      />
      <HardDrive
        size={18}
        className="bg-gray-600"
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "0.5rem",
          zIndex: 1,
          backgroundColor: "#4b5563",
        }}
      />
    </a>
  );
};

export default DownloadButton;
