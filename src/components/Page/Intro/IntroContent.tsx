import { forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import { Divider, Space, TypingText, Typography, AnchorScroll, Button } from "@/components/UI";
import { TypingTextColor } from "@/components/UI/TypingText/type";
import { anchorId } from "@/common/constant/anchorId";
import { useLang } from "@/hooks";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Paragraph } = Typography;

const { Anchor } = AnchorScroll;

const IntroContent: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const texts = useMemo<string[]>(
    () => ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    []
  );

  const className = utils.formatClassName("intro-content");

  return (
    <div ref={ref} className={className}>
      <Space>
        <Paragraph rootClassName="content-greeting">{lang.intro.greeting}</Paragraph>
        <Paragraph strong rootClassName="content-name">
          Jack
        </Paragraph>
      </Space>
      <Paragraph lineHeight={35} variant="secondary" aligns="justify" rootClassName="content-text">
        {lang.intro.content}
      </Paragraph>
      <TypingText
        textList={texts}
        textColor={layoutColor as TypingTextColor}
        rootClassName="content-typing"
      />
      <Divider />
      <Button color={layoutColor}>
        <Anchor linkColor={layoutColor} id={anchorId.ABOUT}>
          {lang.header.menu.about}
        </Anchor>
      </Button>
    </div>
  );
};

export default forwardRef(IntroContent);
