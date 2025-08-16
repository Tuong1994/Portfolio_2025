import { FC } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

interface FogOverlayProps {
  rootClassName?: string;
  hasColor?: boolean;
  position?: "top" | "bottom";
}

const FogOverlay: FC<FogOverlayProps> = ({ rootClassName = "", hasColor, position = "bottom" }) => {
  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const posClassName = `fog-overlay-${position}`;

  const themeClassName = !hasColor ? `fog-overlay-${layoutTheme}` : '';

  const colorClassName = hasColor ? `fog-overlay-${layoutColor}` : "";

  const className = utils.formatClassName(
    "fog-overlay",
    posClassName,
    themeClassName,
    colorClassName,
    rootClassName
  );

  return <div className={className}></div>;
};

export default FogOverlay;
