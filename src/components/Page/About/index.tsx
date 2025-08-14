import { forwardRef, ForwardRefRenderFunction } from "react";
import { Flex, AnchorScroll } from "@/components/UI";
import { useLang } from "@/hooks";
import { anchorId } from "@/common/constant/anchorId";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import AboutContent from "./AboutContent";

const { AnchorSection } = AnchorScroll;

const { FlexRow, FlexCol } = Flex;

const About: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  return (
    <AnchorSection id={anchorId.ABOUT}>
      <SectionWrapper ref={ref}>
        <SectionTitle>{lang.header.menu.about}</SectionTitle>
        <FlexRow>
          <FlexCol span={12}>
            <AboutContent />
          </FlexCol>
          <FlexCol span={12}></FlexCol>
        </FlexRow>
      </SectionWrapper>
    </AnchorSection>
  );
};

export default forwardRef(About);
