import { forwardRef, ForwardRefRenderFunction } from "react";
import { Flex, AnchorScroll } from "@/components/UI";
import { useViewpoint } from "@/hooks";
import IntroAvatar from "./IntroAvatar";
import IntroContent from "./IntroContent";
import IntroArrow from "./IntroArrow";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { FlexRow, FlexCol } = Flex;

const { AnchorSection } = AnchorScroll;

const Intro: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { isPhone, isTablet, isLgTablet } = useViewpoint();

  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const responsive = isPhone || isTablet || isLgTablet;

  const colorClassName = `intro-${layoutColor}`;

  const themeClassName = `intro-${layoutTheme}`;

  const className = utils.formatClassName("intro", colorClassName, themeClassName);

  return (
    <AnchorSection>
      <section ref={ref} className={className}>
        <FlexRow justify="between">
          <FlexCol xs={24} md={9} lg={8} span={4}>
            {responsive && <IntroAvatar />}
          </FlexCol>
          <FlexCol xs={24} md={14} lg={15} span={20}>
            <IntroContent />
          </FlexCol>
        </FlexRow>
        <IntroArrow />
      </section>
    </AnchorSection>
  );
};

export default forwardRef(Intro);
