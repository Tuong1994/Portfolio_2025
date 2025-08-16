import { forwardRef, ForwardRefRenderFunction, useRef } from "react";
import { Flex, AnchorScroll } from "@/components/UI";
import { useLang, useViewpoint } from "@/hooks";
import { anchorId } from "@/common/constant/anchorId";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";
import AboutSkills from "./AboutSkills";
import useLayout from "@/components/UI/Layout/useLayout";
import useReveal from "@/hooks/features/useReveal";
import utils from "@/utils";

const { AnchorSection } = AnchorScroll;

const { FlexRow, FlexCol } = Flex;

const About: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const reveal = useReveal(aboutRef, { interval: true });

  const { lang } = useLang();

  const { isSmTablet } = useViewpoint();

  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const colorClassName = `about-${layoutColor}`;

  const themeClassName = `about-${layoutTheme}`;

  const revealClassName = reveal ? "about-reveal" : "";

  const className = utils.formatClassName("about", revealClassName, colorClassName, themeClassName);

  return (
    <AnchorSection ref={aboutRef} id={anchorId.ABOUT}>
      <SectionWrapper ref={ref} rootClassName={className}>
        <SectionTitle rootClassName="about-title">{lang.header.menu.about}</SectionTitle>
        <FlexRow gutters={[20]} justify="between" rootClassName="about-content">
          <FlexCol xs={24} md={isSmTablet ? 24 : 12} lg={12} span={12}>
            <AboutContent />
          </FlexCol>
          <FlexCol xs={24} md={isSmTablet ? 24 : 12} lg={12} span={12}>
            <AboutInfo />
          </FlexCol>
        </FlexRow>
        <AboutSkills />
      </SectionWrapper>
    </AnchorSection>
  );
};

export default forwardRef(About);
