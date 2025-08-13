import { forwardRef, ForwardRefRenderFunction } from "react";
import { Flex } from "@/components/UI";
import IntroAvatar from "./IntroAvatar";
import IntroContent from "./IntroContent";
import IntroArrow from "./IntroArrow";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { FlexRow, FlexCol } = Flex;

const Intro: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const colorClassName = `intro-${layoutColor}`;

  const themeClassName = `intro-${layoutTheme}`;

  const className = utils.formatClassName("intro", colorClassName, themeClassName);

  return (
    <section ref={ref} className={className}>
      <FlexRow justify="between">
        <FlexCol xs={24} md={9} lg={8} span={8}>
          <IntroAvatar />
        </FlexCol>
        <FlexCol xs={24} md={14} lg={15} span={15}>
          <IntroContent />
        </FlexCol>
      </FlexRow>
      <IntroArrow />
    </section>
  );
};

export default forwardRef(Intro);
