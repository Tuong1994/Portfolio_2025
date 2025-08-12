import { forwardRef, ForwardRefRenderFunction } from "react";
import HeaderLocale from "./HeaderLocale";
import utils from "@/utils";
import HeaderMode from "./HeaderMode";
import { Space } from "@/components/UI";
import HeaderTheme from "./HeaderTheme";

const HeaderSetting: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("header-setting");

  return (
    <div ref={ref} className={className}>
      <Space>
        <HeaderLocale />
        <HeaderMode />
        <HeaderTheme />
      </Space>
    </div>
  );
};

export default forwardRef(HeaderSetting);
