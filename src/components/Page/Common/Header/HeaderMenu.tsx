import { Space, AnchorScroll } from "@/components/UI";
import { forwardRef, ForwardRefRenderFunction } from "react";
import useMenu from "./useMenu";
import utils from "@/utils";

const { Anchor } = AnchorScroll;

const HeaderMenu: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("header-menu");

  const menus = useMenu();

  const renderMenu = () => {
    return menus.map((menu) => (
      <Anchor key={menu.id} id={menu.id}>
        {menu.title}
      </Anchor>
    ));
  };

  return (
    <Space ref={ref} rootClassName={className}>
      {renderMenu()}
    </Space>
  );
};

export default forwardRef(HeaderMenu);
