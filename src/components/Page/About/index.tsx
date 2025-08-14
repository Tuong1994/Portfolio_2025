import { forwardRef, ForwardRefRenderFunction } from "react";
import { Flex } from "@/components/UI";
import { useLang } from "@/hooks";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import AboutContent from "./AboutContent";

const { FlexRow, FlexCol } = Flex;

const About: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  return (
    <SectionWrapper ref={ref}>
      <SectionTitle>{lang.header.menu.about}</SectionTitle>
      <FlexRow>
        <FlexCol span={12}>
            <AboutContent />
        </FlexCol>
        <FlexCol span={12}></FlexCol>
      </FlexRow>
    </SectionWrapper>
  );
};

export default forwardRef(About);
