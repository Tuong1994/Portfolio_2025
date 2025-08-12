import { forwardRef, ForwardRefRenderFunction } from "react";
import { Select } from "@/components/Control";
import { useLang } from "@/hooks";
import { SelectOptions, SelectValue } from "@/components/Control/type";
import { ELang } from "@/common/enum";
import utils from "@/utils";

const HeaderLocale: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang, locale, switchLang } = useLang();

  const localeOptions: SelectOptions = [
    { label: lang.header.locale.en, value: ELang.EN },
    { label: lang.header.locale.vn, value: ELang.VN },
  ];

  const handleSelect = (locale: SelectValue) => switchLang(locale as ELang);

  const className = utils.formatClassName("header-locale");
  return (
    <div ref={ref} className={className}>
      <Select
        hasClear={false}
        hasSearch={false}
        defaultValue={locale}
        options={localeOptions}
        onChangeSelect={handleSelect}
      />
    </div>
  );
};

export default forwardRef(HeaderLocale);
