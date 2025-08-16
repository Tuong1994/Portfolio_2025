import { forwardRef, ForwardRefRenderFunction } from "react";
import { AnchorScroll, Flex } from "@/components/UI";
import { anchorId } from "@/common/constant/anchorId";
import { useLang, useViewpoint } from "@/hooks";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { AnchorSection } = AnchorScroll;

const { FlexRow, FlexCol } = Flex;

const Contact: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { isSmTablet } = useViewpoint();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const colorClassName = `contact-${layoutColor}`;

  const className = utils.formatClassName("contact", colorClassName);

  return (
    <AnchorSection id={anchorId.CONTACT}>
      <SectionWrapper ref={ref} rootClassName={className}>
        <SectionTitle rootClassName="contact-title">{lang.header.menu.contact}</SectionTitle>
        <FlexRow justify="between">
          <FlexCol xs={24} md={isSmTablet ? 24 : 12} lg={12} span={12}>
            <ContactInfo />
          </FlexCol>
          <FlexCol xs={24} md={isSmTablet ? 24 : 12} lg={12} span={12}>
            <ContactForm />
          </FlexCol>
        </FlexRow>
      </SectionWrapper>
    </AnchorSection>
  );
};

export default forwardRef(Contact);
