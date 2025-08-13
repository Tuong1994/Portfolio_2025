import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef, useState } from "react";
import { Button, Space } from "@/components/UI";
import { FaGears } from "react-icons/fa6";
import { useClickOutside, useRender } from "@/hooks";
import HeaderLocale from "./HeaderLocale";
import HeaderMode from "./HeaderMode";
import HeaderTheme from "./HeaderTheme";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const HeaderSetting: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const settingRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => settingRef.current as HTMLDivElement);

  useClickOutside(settingRef, setDropdown);

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const render = useRender(dropdown);

  const dropdownActiveClassName = dropdown ? "setting-dropdown-active" : "";

  const className = utils.formatClassName("header-setting");

  const dropdownClassName = utils.formatClassName("setting-dropdown", dropdownActiveClassName);

  const handleTriggerDropdown = () => setDropdown(!dropdown);

  return (
    <div ref={settingRef} className={className}>
      <Space justify="end">
        <Button color={layoutColor} onClick={handleTriggerDropdown}>
          <FaGears />
        </Button>
      </Space>
      {render && (
        <div className={dropdownClassName}>
          <HeaderLocale />
          <HeaderMode />
          <HeaderTheme />
        </div>
      )}
    </div>
  );
};

export default forwardRef(HeaderSetting);
