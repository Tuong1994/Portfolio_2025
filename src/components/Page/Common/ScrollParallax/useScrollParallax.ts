import { MutableRefObject, useEffect } from "react";

const useScrollParallax = (ref: MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        let ticking = false;
    
        const handleScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              const container = ref.current;
              if (!container) return;
    
              const rect = container.getBoundingClientRect();
              const windowHeight = window.innerHeight;
    
              // Chỉ xử lý khi component còn trong viewport
              if (rect.top < windowHeight && rect.bottom > 0) {
                // progress = mức độ mà section xuất hiện trong viewport (0 -> 1)
                const progress = Math.min(
                  Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)),
                  1
                );
    
                container.querySelectorAll(".parallax-item").forEach((el: any) => {
                  const speed = Number(el.dataset.speed) || 0.2;
                  const maxTranslate = rect.height * speed; // dịch tối đa trong section
                  el.style.transform = `translateY(${progress * maxTranslate}px)`;
                });
              }
    
              ticking = false;
            });
            ticking = true;
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
}

export default useScrollParallax