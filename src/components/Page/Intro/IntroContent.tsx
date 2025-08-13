import { forwardRef, ForwardRefRenderFunction } from "react";
import { Space, Typography } from "@/components/UI";
import { useLang } from "@/hooks";
import utils from "@/utils";

const { Paragraph } = Typography;

const IntroContent: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const className = utils.formatClassName("intro-content");

  return (
    <div ref={ref} className={className}>
      <Space>
        <Paragraph size={30}>{lang.intro.greeting}</Paragraph>
        <Paragraph size={30}>Jack</Paragraph>
      </Space>
      <Paragraph size={25} lineHeight={40}>{lang.intro.content}</Paragraph>
    </div>
  );
};

export default forwardRef(IntroContent);
