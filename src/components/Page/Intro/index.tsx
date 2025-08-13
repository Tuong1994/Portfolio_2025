import { forwardRef, ForwardRefRenderFunction } from "react";
import utils from "@/utils";

const Intro: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("intro");

  return <div ref={ref} className={className}>

  </div>;
};

export default forwardRef(Intro);
