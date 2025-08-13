import { forwardRef, ForwardRefRenderFunction } from "react";
import utils from "@/utils";

const IntroContent: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("intro-content");

  return <div ref={ref} className={className}></div>;
};

export default forwardRef(IntroContent);
