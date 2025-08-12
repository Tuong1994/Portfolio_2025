import { createContext } from "react";
import { ComponentColor } from "@/common/type";

export enum EMode {
  DARK = "dark",
  LIGHT = "light",
}

export type LayoutTheme = EMode.DARK | EMode.LIGHT;

export type LayoutColor = Exclude<ComponentColor, "white" | "gray">;

export interface LayoutContextState {
  theme: LayoutTheme;
  color: LayoutColor;
  layouted: boolean;
}

const LayoutContext = createContext<LayoutContextState>({
  theme: EMode.LIGHT,
  color: "blue",
  layouted: false,
});

export default LayoutContext;
