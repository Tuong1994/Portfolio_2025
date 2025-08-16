import { ForwardRefRenderFunction, forwardRef, useRef } from "react";
import { AnchorScroll } from "@/components/UI";
import { anchorId } from "@/common/constant/anchorId";
import { useLang } from "@/hooks";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import ExperiencesWork from "./ExperiencesWork";
import useLayout from "@/components/UI/Layout/useLayout";
import useReveal from "@/hooks/features/useReveal";
import utils from "@/utils";

const { AnchorSection } = AnchorScroll;

const Experiences: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const experiencesRef = useRef<HTMLDivElement | null>(null);

  const reveal = useReveal(experiencesRef, { interval: true });

  const { lang } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const revealClassName = reveal ? "experiences-reveal" : "";

  const colorClassName = `experiences-${layoutColor}`;

  const themeClassName = `experiences-${layoutTheme}`;

  const className = utils.formatClassName("experiences", colorClassName, revealClassName, themeClassName);

  return (
    <AnchorSection ref={experiencesRef} id={anchorId.EXPERIENCES}>
      <SectionWrapper ref={ref} rootClassName={className}>
        <SectionTitle rootClassName="experiences-title">{lang.header.menu.experiences}</SectionTitle>
        <ExperiencesWork />
      </SectionWrapper>
    </AnchorSection>
  );
};

export default forwardRef(Experiences);
