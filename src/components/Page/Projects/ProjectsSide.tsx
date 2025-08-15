import { forwardRef, ForwardRefRenderFunction } from "react";
import { useLang } from "@/hooks";
import utils from "@/utils";
import CardInfo from "../Common/CardInfo";

const ProjectsSide: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const className = utils.formatClassName("projects-side");

  return <CardInfo ref={ref} rootClassName={className}></CardInfo>;
};

export default forwardRef(ProjectsSide);
