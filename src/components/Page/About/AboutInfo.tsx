import { forwardRef, ForwardRefRenderFunction } from "react";
import utils from "@/utils";

const AboutInfo: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("about-info");

  return <div ref={ref} className={className}></div>;
};

export default forwardRef(AboutInfo);
