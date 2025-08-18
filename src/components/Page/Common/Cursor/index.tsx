import {
  CSSProperties,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import useCursor from "./useCursor";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const Cursor: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useCursor(cursorRef);

  useImperativeHandle(ref, () => cursorRef.current as HTMLDivElement);

  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const colorClassName = `cursor-${layoutColor}`;

  const themeClassName = `cursor-${layoutTheme}`;

  const className = utils.formatClassName("cursor", colorClassName, themeClassName);

  return (
    <div ref={cursorRef} className={className}>
      <div className="cursor-dot"></div>
    </div>
  );
};

export default forwardRef(Cursor);
