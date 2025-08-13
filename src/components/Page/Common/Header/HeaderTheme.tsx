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
      const colorTitles: Record<string, string> = {
        blue: lang.header.theme.blue,
        green: lang.header.theme.green,
        red: lang.header.theme.red,
        orange: lang.header.theme.orange,
        yellow: lang.header.theme.yellow,
        purple: lang.header.theme.purple,
        pink: lang.header.theme.pink,
      };
      return (
        <div key={color} className={itemClassName} onClick={() => handleSelect(color)}>
          {colorTitles[color]}
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
