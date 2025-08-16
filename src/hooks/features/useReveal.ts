import { MutableRefObject, useEffect, useState } from "react";

type RevealOptions = {
  margin?: number;   // khoảng cách "buffer" trước khi hiện
  interval?: boolean; // cho phép ẩn lại khi ra ngoài viewport
};

const useReveal = (
  ref: MutableRefObject<HTMLElement | null>,
  options: RevealOptions = {}
) => {
  const { margin = 0, interval = false } = options;
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReveal(true);
          } else if (interval) {
            setReveal(false);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: `0px 0px -${margin}px 0px`, // top, right, bottom, left
        threshold: 0.3, // chỉ cần chạm vào là tính
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [ref, margin, interval]);

  return reveal;
};

export default useReveal;
