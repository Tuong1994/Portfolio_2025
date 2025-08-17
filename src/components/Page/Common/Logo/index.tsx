import { forwardRef, ForwardRefRenderFunction } from "react";
import { EMode } from "@/components/UI/Layout/Context";
import useLayout from "@/components/UI/Layout/useLayout";
import logoLight from "/logo/logo-light.png";
import logoDark from "/logo/logo-dark.png";
import utils from "@/utils";

const Logo: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  const logo = layoutTheme === EMode.DARK ? logoDark : logoLight;

  const themeClassName = `logo-${layoutTheme}`

  const className = utils.formatClassName("logo", themeClassName);
  return (
    <div ref={ref} className={className}>
      <img className="logo-image" src={logo} alt={logo} />
    </div>
  );
};

export default forwardRef(Logo);
