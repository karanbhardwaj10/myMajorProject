import { useEffect } from "react";

const useKeyDown = (callback) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
};

export default useKeyDown;
