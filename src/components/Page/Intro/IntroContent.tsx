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

  const texts = useMemo<string[]>(
    () => ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    []
  );

  const className = utils.formatClassName("intro-content");

  return (
    <div ref={ref} className={className}>
      <Space>
        <Paragraph size={30}>{lang.intro.greeting}</Paragraph>
        <Paragraph strong size={35} rootClassName="content-name">
          Jack
        </Paragraph>
      </Space>
      <Paragraph size={25} lineHeight={40} aligns="justify" rootClassName="content-text">
        {lang.intro.content}
      </Paragraph>
      <TypingText textList={texts} textColor={layoutValue.layoutColor as TypingTextColor} />
      <Divider />
      <Button color={layoutValue.layoutColor}>
        <Anchor linkColor={layoutValue.layoutColor} id={anchorId.ABOUT}>
          {lang.header.menu.about}
        </Anchor>
      </Button>
    </div>
  );
};

export default forwardRef(IntroContent);
