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

  const colorClassName = `intro-${layoutValue.layoutColor}`;

  const className = utils.formatClassName("intro", colorClassName);

  return (
    <section ref={ref} className={className}>
      <FlexRow justify="between">
        <FlexCol span={8}>
          <IntroAvatar />
        </FlexCol>
        <FlexCol span={15}>
          <IntroContent />
        </FlexCol>
      </FlexRow>
      <IntroArrow />
    </section>
  );
};

export default forwardRef(Intro);
