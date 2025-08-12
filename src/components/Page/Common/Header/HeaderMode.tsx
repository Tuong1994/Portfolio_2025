import { forwardRef, ForwardRefRenderFunction } from "react";
import { useLang } from "@/hooks";
import { Select } from "@/components/Control";
import { ControlColor, SelectOptions, SelectValue } from "@/components/Control/type";
import { EMode } from "@/components/UI/Layout/Context";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const HeaderMode: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { layoutValue, layoutApi } = useLayout();

  const modeOptions: SelectOptions = [
    { label: lang.header.mode.light, value: EMode.LIGHT },
    { label: lang.header.mode.dark, value: EMode.DARK },
  ];

  const className = utils.formatClassName("header-mode");

  const handleSelect = (mode: SelectValue) => layoutApi.onSwitchTheme(mode as EMode);

  return (
    <div ref={ref} className={className}>
      <Select
        color={layoutValue.layoutColor as ControlColor}
        hasClear={false}
        hasSearch={false}
        defaultValue={layoutValue.layoutTheme}
        options={modeOptions}
        onChangeSelect={handleSelect}
      />
    </div>
  );
};

export default forwardRef(HeaderMode);
