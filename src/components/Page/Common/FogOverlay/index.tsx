import { FC } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const FogOverlay: FC<{}> = () => {
  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  const themeClassName = `fog-overlay-${layoutTheme}`

  const className = utils.formatClassName("fog-overlay", themeClassName);

  return <div className={className}></div>;
};

export default FogOverlay;
