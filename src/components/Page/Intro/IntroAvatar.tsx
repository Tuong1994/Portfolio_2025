import { forwardRef, ForwardRefRenderFunction } from "react";
import utils from "@/utils";

const IntroAvatar: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("intro-avatar");

  return <div ref={ref} className={className}></div>;
};

export default forwardRef(IntroAvatar);
