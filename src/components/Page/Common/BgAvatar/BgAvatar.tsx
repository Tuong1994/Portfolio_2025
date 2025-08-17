import { forwardRef, ForwardRefRenderFunction } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const BgAvatar: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  const themeClassName = `bg-avatar-${layoutTheme}`;

  const className = utils.formatClassName("bg-avatar", themeClassName);

  return (
    <div ref={ref} className={className}>
      <div className="bg-avatar-view"></div>
      <div className="bg-avatar-fog"></div>
    </div>
  );
};

export default forwardRef(BgAvatar);
