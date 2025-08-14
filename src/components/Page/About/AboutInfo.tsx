import { forwardRef, ForwardRefRenderFunction } from "react";
import { Divider, Typography, Button } from "@/components/UI";
import { useLang } from "@/hooks";
import { ELang } from "@/common/enum";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Paragraph } = Typography;

const AboutInfo: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang, locale } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const className = utils.formatClassName("about-info");

  return (
    <div ref={ref} className={className}>
      <div className="info-card">
        <Paragraph size={16}>{lang.common.form.label.email}</Paragraph>
        <Paragraph size={18} strong>
          nbtuong1994@gmail.com
        </Paragraph>
        <Divider />
        <Paragraph size={16}>{lang.common.form.label.phone}</Paragraph>
        <Paragraph size={18} strong>
          (+84) 079 322 9970
        </Paragraph>
        <Divider />
        <Paragraph size={16}>{lang.common.form.label.birthday}</Paragraph>
        <Paragraph size={18} strong>
          {locale === ELang.EN ? "1994 November 28th" : "28 tháng 11 năm 1994"}
        </Paragraph>
        <Divider />
        <Paragraph size={16}>{lang.common.form.label.location}</Paragraph>
        <Paragraph size={18} strong>
          {locale === ELang.EN ? "Ho Chi Minh" : "Hồ Chí Minh"}
        </Paragraph>
      </div>
      <Button color={layoutColor} sizes="lg">
        <a href="/cv.pdf" download="CV - Nhâm Bổn Tường">
          Download
        </a>
      </Button>
    </div>
  );
};

export default forwardRef(AboutInfo);
