import { MutableRefObject, useEffect, useRef, useState } from "react";
import { MousePosition } from "./type";

const useCursor = (cursorRef: MutableRefObject<HTMLDivElement | null>) => {
  const [cursorSize, setCursorSize] = useState<number>(30);

  const mousePos = useRef<MousePosition>({ x: 0, y: 0 });

  const requestRef = useRef<number>(0);

  // Cập nhật vị trí chuột
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate cursor mỗi frame
  useEffect(() => {
    const animate = () => {
      const { x, y } = mousePos.current;
      if (cursorRef.current) {
        const offset = cursorSize / 2;
        cursorRef.current.style.transform = `translate3d(${x - offset}px, ${y - offset}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [cursorSize]);

  // Hover effect
  useEffect(() => {
    const hoverTargets = document.querySelectorAll("button, a, input, select, textarea, .hover-target");
    const handleMouseEnter = () => {
      cursorRef.current?.classList.add("cursor-hover");
      setCursorSize(60);
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove("cursor-hover");
      setCursorSize(30);
    };

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  });

  return { cursorSize };
};

export default useCursor;
