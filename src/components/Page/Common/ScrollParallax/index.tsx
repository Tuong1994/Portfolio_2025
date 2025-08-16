import { forwardRef, ForwardRefRenderFunction, ReactNode, useImperativeHandle, useMemo, useRef } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import useScrollParallax from "./useScrollParallax";
import utils from "@/utils";

interface ScrollParallaxProps {
  bubbleCount?: number;
  children?: ReactNode;
}

const ScrollParallax: ForwardRefRenderFunction<HTMLDivElement, ScrollParallaxProps> = (
  { bubbleCount = 80, children },
  ref
) => {
  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const colorClassName = `scroll-parallax-${layoutColor}`;

  const className = utils.formatClassName("scroll-parallax", colorClassName);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  useScrollParallax(containerRef);

  const bubbles = useMemo(() => {
    return [...Array(bubbleCount)].map(() => {
      const size = 20 + Math.random() * 40; // px
      const top = Math.random() * 100; // %
      const left = Math.random() * 100; // %
      return { size, top, left };
    });
  }, [bubbleCount]);

  return (
    <div ref={containerRef} className={className}>
      <div className="parallax-background parallax-item">
        {bubbles.map((b, idx) => (
          <span
            key={idx}
            className="background-bubble"
            style={{
              width: b.size,
              height: b.size,
              top: `${b.top}%`,
              left: `${b.left}%`,
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default forwardRef(ScrollParallax);
