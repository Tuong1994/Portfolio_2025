import { ForwardRefRenderFunction, forwardRef, useState } from "react";
import { CiCircleList as ListIcon } from "react-icons/ci";
import { Button, Drawer, AnchorScroll, Divider } from "@/components/UI";
import HeaderLocale from "./HeaderLocale";
import HeaderMode from "./HeaderMode";
import HeaderTheme from "./HeaderTheme";
import useLayout from "@/components/UI/Layout/useLayout";
import useMenu from "./useMenu";
import utils from "@/utils";

const { Anchor } = AnchorScroll;

const HeaderMobile: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  const { layoutValue } = useLayout();

  const menus = useMenu();

  const className = utils.formatClassName("header-mobile");

  const handleTriggerOpen = () => setOpen(!open);

  const renderMenu = () => {
    return menus.map((menu) => (
      <Anchor key={menu.id} id={menu.id}>
        {menu.title}
      </Anchor>
    ));
  };

  return (
    <div ref={ref} className={className}>
      <Button color={layoutValue.layoutColor} onClick={handleTriggerOpen}>
        <ListIcon />
      </Button>
      <Drawer hasHead={false} open={open} onClose={handleTriggerOpen}>
        <Divider>Menu</Divider>
        {renderMenu()}
        <HeaderLocale />
        <HeaderMode />
        <HeaderTheme />
      </Drawer>
    </div>
  );
};

export default forwardRef(HeaderMobile);
