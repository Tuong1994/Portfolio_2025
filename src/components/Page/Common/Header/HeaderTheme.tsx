import { forwardRef, ForwardRefRenderFunction } from "react";
import { LayoutColor } from "@/components/UI/Layout/Context";
import { ControlColor, InputValue } from "@/components/Control/type";
import { CheckBox } from "@/components/Control";
import useLayout from "@/components/UI/Layout/useLayout";

const HeaderTheme: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { layoutValue, layoutApi } = useLayout();

  const colors: LayoutColor[] = ["blue", "green", "red", "orange", "yellow", "pink", "purple"];

  const handleCheck = (color: InputValue) => {
    console.log(color);
    layoutApi.onSwitchColor(color as LayoutColor);
  };

  const renderTheme = () => {
    return colors.map((color) => (
      <CheckBox
        key={color}
        color={layoutValue.layoutColor as ControlColor}
        checked={layoutValue.layoutColor === color}
        value={color}
        label={color}
        onCheckInput={handleCheck}
      />
    ));
  };

  return <div ref={ref}>{renderTheme()}</div>;
};

export default forwardRef(HeaderTheme);
