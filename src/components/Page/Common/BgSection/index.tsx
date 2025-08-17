import { CSSProperties, ForwardRefRenderFunction, HTMLAttributes, ReactNode, forwardRef } from "react";
import utils from "@/utils";

interface BgSectionProps extends HTMLAttributes<HTMLDivElement> {
  bgURL?: string;
  children?: ReactNode;
}

const BgSection: ForwardRefRenderFunction<HTMLDivElement, BgSectionProps> = (
  { bgURL, children, style, ...restProps },
  ref
) => {
  const isIOS = typeof navigator !== 'undefined' && /iP(ad|hone|od)/.test(navigator.userAgent);

  const className = utils.formatClassName("bg-section");

  const rootStyle: CSSProperties = {
    backgroundImage: `url(${bgURL})`,
     backgroundAttachment: isIOS ? 'scroll' : 'fixed',
    ...style,
  };

  return (
    <div ref={ref} className={className} style={rootStyle} {...restProps}>
      <div className="bg-section-child">{children}</div>
    </div>
  );
};

export default forwardRef(BgSection);
