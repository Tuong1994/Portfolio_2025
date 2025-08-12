import { Space, AnchorScroll } from "@/components/UI";
import { forwardRef, ForwardRefRenderFunction } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import useMenu from "./useMenu";
import utils from "@/utils";

const { Anchor } = AnchorScroll;

const HeaderMenu: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { layoutValue } = useLayout();

  const menus = useMenu();

  const className = utils.formatClassName("header-menu");

  const renderMenu = () => {
    return menus.map((menu) => (
      <Anchor key={menu.id} id={menu.id} linkColor={layoutValue.layoutColor}>
        {menu.title}
      </Anchor>
    ));
  };

  return (
    <Space ref={ref} rootClassName={className} justify="center">
      {renderMenu()}
    </Space>
  );
};

export default forwardRef(HeaderMenu);
