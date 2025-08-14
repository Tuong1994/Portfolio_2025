import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { Typography } from "@/components/UI";
import { TitleProps } from "@/components/UI/Typography/Title";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Title } = Typography;

interface SectionTitleProps {
  children?: ReactNode;
  titleProps?: TitleProps;
}

const SectionTitle: ForwardRefRenderFunction<HTMLDivElement, SectionTitleProps> = (
  { children, titleProps },
  ref
) => {
  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const colorClassName = `section-title-${layoutColor}`;

  const className = utils.formatClassName("section-title", colorClassName);

  return (
    <div ref={ref} className={className}>
      <Title level={3} weight={700} rootClassName="title-content" {...titleProps}>
        {children}
      </Title>
    </div>
  );
};

export default forwardRef(SectionTitle);
