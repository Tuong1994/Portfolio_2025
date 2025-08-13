import { forwardRef, ForwardRefRenderFunction } from "react";
import { Select } from "@/components/Control";
import { Flex, Typography } from "@/components/UI";
import { useLang } from "@/hooks";
import { ControlColor, SelectOptions, SelectValue } from "@/components/Control/type";
import { ELang } from "@/common/enum";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { FlexRow, FlexCol } = Flex;

const { Paragraph } = Typography;

const HeaderLocale: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang, locale, switchLang } = useLang();

  const { layoutValue } = useLayout();

  const localeOptions: SelectOptions = [
    { label: lang.header.locale.en, value: ELang.EN },
    { label: lang.header.locale.vn, value: ELang.VN },
  ];

  const className = utils.formatClassName("header-locale");

  const handleSelect = (locale: SelectValue) => switchLang(locale as ELang);

  return (
    <FlexRow ref={ref} rootClassName={className} aligns="middle" justify="between">
      <FlexCol>
        <Paragraph strong>{lang.header.locale.title}</Paragraph>
      </FlexCol>
      <FlexCol xs={14} lg={16} span={16}>
        <Select
          color={layoutValue.layoutColor as ControlColor}
          hasClear={false}
          hasSearch={false}
          defaultValue={locale}
          options={localeOptions}
          style={{ fontSize: "13px" }}
          onChangeSelect={handleSelect}
        />
      </FlexCol>
    </FlexRow>
  );
};

export default forwardRef(HeaderLocale);
