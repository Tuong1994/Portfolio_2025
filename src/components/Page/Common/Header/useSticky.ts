import { useEffect, useState } from "react";

const useSticky = (y = 80) => {
  const [sticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > y) setSticky(true);
      else setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return sticky;
};

export default useSticky;
