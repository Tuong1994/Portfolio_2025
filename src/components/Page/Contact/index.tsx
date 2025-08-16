import { forwardRef, ForwardRefRenderFunction, useRef } from "react";
import { AnchorScroll, Flex } from "@/components/UI";
import { anchorId } from "@/common/constant/anchorId";
import { useLang, useViewpoint } from "@/hooks";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";
import useReveal from "@/hooks/features/useReveal";

const { AnchorSection } = AnchorScroll;

const { FlexRow, FlexCol } = Flex;

const Contact: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const reveal = useReveal(contactRef, { interval: true });

  const { lang } = useLang();

  const { isSmTablet } = useViewpoint();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const revealClassName = reveal ? "contact-reveal" : "";

  const colorClassName = `contact-${layoutColor}`;

  const className = utils.formatClassName("contact", revealClassName, colorClassName);

  return (
    <AnchorSection ref={contactRef} id={anchorId.CONTACT}>
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
