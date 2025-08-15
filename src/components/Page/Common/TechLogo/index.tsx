import { CSSProperties, forwardRef, ForwardRefRenderFunction } from "react";
import Image, { ImageProps } from "@/components/UI/Image";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

interface TechLogoProps extends ImageProps {
  rootClassName?: string;
  logoSize?: number;
}

const TechLogo: ForwardRefRenderFunction<HTMLDivElement, TechLogoProps> = (
  { rootClassName = "", logoSize = 50, src, ...restProps },
  ref
) => {
  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  const themeClassName = `tech-logo-${layoutTheme}`;

  const className = utils.formatClassName("tech-logo", themeClassName, rootClassName);

  const style: CSSProperties = {
    width: logoSize + "px",
    height: logoSize + "px",
  };

  return (
    <div ref={ref} style={style} className={className}>
      <Image imgWidth="100%" imgHeight="100%" src={src} {...restProps} />
    </div>
  );
};

export default forwardRef(TechLogo);
