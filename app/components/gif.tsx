import React from "react";

interface GifProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Gif: React.FC<GifProps> = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-md ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

export default Gif;
