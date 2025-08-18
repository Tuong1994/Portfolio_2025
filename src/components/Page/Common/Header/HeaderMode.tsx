import { forwardRef, ForwardRefRenderFunction } from "react";
import { useLang } from "@/hooks";
import { Flex, Typography } from "@/components/UI";
import { Select } from "@/components/Control";
import { ControlColor, SelectOptions, SelectValue } from "@/components/Control/type";
import { EMode } from "@/components/UI/Layout/Context";
import useLayout from "@/components/UI/Layout/useLayout";
import useLoadingOverlayStore from "../LoadingOverlay/LoadingOverlayStore";
import utils from "@/utils";

const { FlexRow, FlexCol } = Flex;

const { Paragraph } = Typography;

const HeaderMode: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { layoutValue, layoutApi } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const loading = useLoadingOverlayStore();

  const modeOptions: SelectOptions = [
    { label: lang.header.mode.light, value: EMode.LIGHT },
    { label: lang.header.mode.dark, value: EMode.DARK },
  ];

  const className = utils.formatClassName("header-mode");

  const handleSelect = async (mode: SelectValue) => {
    await loading.trigger();
    layoutApi.onSwitchTheme(mode as EMode);
  };

  return (
    <FlexRow ref={ref} rootClassName={className} aligns="middle" justify="between">
      <FlexCol>
        <Paragraph strong>{lang.header.mode.title}</Paragraph>
      </FlexCol>
      <FlexCol xs={14} lg={16} span={16}>
        <Select
          color={layoutColor as ControlColor}
          hasClear={false}
          hasSearch={false}
          defaultValue={layoutTheme}
          options={modeOptions}
          style={{ fontSize: "13px" }}
          onChangeSelect={handleSelect}
        />
      </FlexCol>
    </FlexRow>
  );
};

export default forwardRef(HeaderMode);
