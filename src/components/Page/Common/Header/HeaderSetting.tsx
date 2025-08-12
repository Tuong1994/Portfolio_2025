import { forwardRef, ForwardRefRenderFunction } from "react";
import { Button } from "@/components/UI";
import { FaGears } from "react-icons/fa6";
import HeaderLocale from "./HeaderLocale";
import HeaderMode from "./HeaderMode";
import HeaderTheme from "./HeaderTheme";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const HeaderSetting: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { layoutValue } = useLayout();

  const className = utils.formatClassName("header-setting");

  return (
    <div ref={ref} className={className}>
      <Button color={layoutValue.layoutColor}>
        <FaGears />
      </Button>
      <div className="setting-dropdown">
        <HeaderLocale />
        <HeaderMode />
        <HeaderTheme />
      </div>
    </div>
  );
};

export default forwardRef(HeaderSetting);
