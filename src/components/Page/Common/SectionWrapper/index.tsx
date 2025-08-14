import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { Section } from "@/components/UI";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

interface SectionWrapperProps {
  children?: ReactNode;
}

const SectionWrapper: ForwardRefRenderFunction<HTMLDivElement, SectionWrapperProps> = ({ children }, ref) => {
  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  const themeClassName = `section-wrapper-${layoutTheme}`;

  const className = utils.formatClassName("section-wrapper", themeClassName);

  return (
    <Section ref={ref} rootClassName={className}>
      {children}
    </Section>
  );
};

export default forwardRef(SectionWrapper);
