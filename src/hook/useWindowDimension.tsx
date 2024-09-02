import { useState, useEffect } from "react";

const useWindowDimensions = (imageURL: string) => {
  const [url, setUrl] = useState(`./images/image-${imageURL}-mobile.jpg`);
  const path = "./images/";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setUrl(path + `image-${imageURL}-mobile.jpg`);
      } else if (window.innerWidth < 1440) {
        setUrl(path + `image-${imageURL}-tablet.jpg`);
      } else {
        setUrl(path + `image-${imageURL}-desktop.jpg`);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return url;
};

export default useWindowDimensions;
