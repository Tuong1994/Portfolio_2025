import { forwardRef, ForwardRefRenderFunction } from "react";
import { Layout, Flex } from "@/components/UI";
import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderSetting from "./HeaderSetting";
import useSticky from "./useSticky";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

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

  const className = utils.formatClassName("portfolio-header", themeClassName, stickyClassName, rootClassName);

  return (
    <Head ref={ref} rootClassName={className}>
      <FlexRow aligns="middle">
        <FlexCol>
          <Logo />
        </FlexCol>
        <FlexCol>
          <HeaderMenu />
        </FlexCol>
        <FlexCol>
          <HeaderSetting />
        </FlexCol>
      </FlexRow>
    </Head>
  );
};

export default forwardRef(Header);
