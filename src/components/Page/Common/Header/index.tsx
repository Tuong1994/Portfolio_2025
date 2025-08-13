import { forwardRef, ForwardRefRenderFunction } from "react";
import { Layout, Flex } from "@/components/UI";
import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderSetting from "./HeaderSetting";
import useSticky from "./useSticky";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";
import HeaderMobile from "./HeaderMobile";

const { Head } = Layout;

const { FlexRow, FlexCol } = Flex;

interface HeaderProps {
  rootClassName?: string;
}

const Header: ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = ({ rootClassName = "" }, ref) => {
  const { layoutValue } = useLayout();

  const sticky = useSticky();

  const stickyClassName = sticky ? "portfolio-header-sticky" : "";

  const themeClassName = `portfolio-header-${layoutValue.layoutTheme}`;

  const colorClassName = `portfolio-header-${layoutValue.layoutColor}`;

  const className = utils.formatClassName(
    "portfolio-header",
    themeClassName,
    colorClassName,
    stickyClassName,
    rootClassName
  );

  return (
    <Head ref={ref} rootClassName={className}>
      <FlexRow style={{ width: "100%" }} aligns="middle" justify="between">
        <FlexCol xs={4} md={4} lg={4} span={4}>
          <Logo />
        </FlexCol>
        <FlexCol xs={0} md={0} lg={16} span={16}>
          <HeaderMenu />
        </FlexCol>
        <FlexCol xs={0} md={0} lg={4} span={4}>
          <HeaderSetting />
        </FlexCol>
        <FlexCol xs={4} md={4} lg={0} span={0}>
          <HeaderMobile />
        </FlexCol>
      </FlexRow>
    </Head>
  );
};

export default forwardRef(Header);
