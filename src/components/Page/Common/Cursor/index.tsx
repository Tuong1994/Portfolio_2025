import { CSSProperties, forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import useCursor from "./useCursor";
import utils from "@/utils";

const Cursor: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const { cursorSize } = useCursor(cursorRef);

  useImperativeHandle(ref, () => cursorRef.current as HTMLDivElement);

  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const colorClassName = `cursor-${layoutColor}`;

  const themeClassName = `cursor-${layoutTheme}`;

  const className = utils.formatClassName("cursor", colorClassName, themeClassName);

  const style: CSSProperties = {
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
  };

  return (
    <div ref={cursorRef} className={className} style={style}>
      <div className="cursor-dot"></div>
    </div>
  );
};

export default forwardRef(Cursor);
