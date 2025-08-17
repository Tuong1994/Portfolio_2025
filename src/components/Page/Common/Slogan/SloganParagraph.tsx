import { forwardRef, ForwardRefRenderFunction } from "react";
import { Typography } from "@/components/UI";
import { useLang } from "@/hooks";
import utils from "@/utils";

const { Paragraph } = Typography;

const SloganParagraph: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const className = utils.formatClassName("slogan-paragraph");

  return (
    <div ref={ref} className={className}>
      <Paragraph aligns="center" size={30} rootClassName="content-space" lineHeight={35}>
        {lang.common.slogan.paragraph.content_1}
      </Paragraph>
      <Paragraph aligns="center" size={40} strong lineHeight={35}>
        {lang.common.slogan.paragraph.content_2}
      </Paragraph>
    </div>
  );
};

export default forwardRef(SloganParagraph);
