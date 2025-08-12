import { forwardRef, ForwardRefRenderFunction } from "react";
import { Divider } from "@/components/UI";
import { LayoutColor } from "@/components/UI/Layout/Context";
import { useLang } from "@/hooks";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const HeaderTheme: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { layoutValue, layoutApi } = useLayout();

  const colors: LayoutColor[] = ["blue", "green", "red", "orange", "yellow", "pink", "purple"];

  const className = utils.formatClassName("header-theme");

  const handleSelect = (color: LayoutColor) => layoutApi.onSwitchColor(color as LayoutColor);

  const renderTheme = () => {
    return colors.map((color) => {
      const isSelected = layoutValue.layoutColor === color;
      const selectedClassName = isSelected ? `theme-item-${color}-selected` : "";
      const itemClassName = utils.formatClassName("theme-item", `theme-item-${color}`, selectedClassName);
      return (
        <div key={color} className={itemClassName} onClick={() => handleSelect(color)}>
          {color}
        </div>
      );
    });
  };

  return (
    <div ref={ref} className={className}>
      <Divider>{lang.header.theme.title}</Divider>
      {renderTheme()}
    </div>
  );
};

export default forwardRef(HeaderTheme);
