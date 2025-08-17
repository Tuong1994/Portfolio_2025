import { useEffect } from "react";

const useAnchor = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".anchor-section");
    const menuItems = Array.from(document.querySelectorAll<HTMLElement>(".anchor"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // clear cũ
            menuItems.forEach((m) => m.classList.remove("anchor-active"));

            // set mới
            const id = entry.target.id;
            const el = document.querySelector<HTMLElement>(`.anchor[href="#${id}"]`);
            el?.classList.add("anchor-active");
          }
        });
      },
      {
        root: null,
        threshold: 0.3, // section hiện 30% thì coi như active
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);
};

export default useAnchor;