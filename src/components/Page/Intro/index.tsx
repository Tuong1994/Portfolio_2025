import { forwardRef, ForwardRefRenderFunction } from "react";
import { Flex } from "@/components/UI";
import IntroAvatar from "./IntroAvatar";
import IntroContent from "./IntroContent";
import utils from "@/utils";

const { FlexRow, FlexCol } = Flex;

const Intro: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("intro");

  return (
    <section ref={ref} className={className}>
      <FlexRow justify="between">
        <FlexCol span={8}>
          <IntroAvatar />
        </FlexCol>
        <FlexCol span={16}>
          <IntroContent />
        </FlexCol>
      </FlexRow>
    </section>
  );
};

export default forwardRef(Intro);
