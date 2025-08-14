import { ForwardRefRenderFunction, forwardRef } from "react";
import { AnchorScroll } from "@/components/UI";
import { anchorId } from "@/common/constant/anchorId";
import { useLang } from "@/hooks";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import ExperiencesWork from "./ExperiencesWork";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { AnchorSection } = AnchorScroll;

const Experiences: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const colorClassName = `experiences-${layoutColor}`;

  const themeClassName = `experiences-${layoutTheme}`;

  const className = utils.formatClassName("experiences", colorClassName, themeClassName);

  return (
    <AnchorSection id={anchorId.EXPERIENCES}>
      <SectionWrapper ref={ref} rootClassName={className}>
        <SectionTitle>{lang.header.menu.experiences}</SectionTitle>
        <ExperiencesWork />
      </SectionWrapper>
    </AnchorSection>
  );
};

export default forwardRef(Experiences);
