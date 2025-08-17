import { EMode } from "@/components/UI/Layout/Context";
import { useEffect, useState } from "react";
import useLayout from "@/components/UI/Layout/useLayout";

type ParticlesTheme = {
  background: string;
  particlesColor: string;
  linkColor: string;
};

const colorWhite = '#fff';
const colorBlack = '#222';
const colorBlue = '#0ea5e9';
const colorRed = '#f43f5e';
const colorGreen = '#10b981';
const colorOrange = '#f5a316';
const colorYellow = '#ffe601';
const colorPurple = '#6366f1';
const colorPink = '#ec4899';

const useParticles = (hasColor?: boolean) => {
  const [particlesTheme, setParticlesTheme] = useState<ParticlesTheme>({
    background: colorWhite,
    particlesColor: colorBlack,
    linkColor: colorBlack,
  });

  const { layoutValue } = useLayout();

  const { layoutTheme, layoutColor } = layoutValue;

  const bgColors: Record<string, string> = {
    blue: colorBlue,
    green: colorGreen,
    red: colorRed,
    orange: colorOrange,
    yellow: colorYellow,
    purple: colorPurple,
    pink: colorPink,
  }

  // Set dark/light mode -> work when don't apply color theme
  useEffect(() => {
    if (hasColor) return;
    if (layoutTheme === EMode.LIGHT) {
      setParticlesTheme((prev) => ({
        ...prev,
        background: colorWhite,
        particlesColor: colorBlack,
        linkColor: colorBlack,
      }));
    } else {
      setParticlesTheme((prev) => ({
        ...prev,
        background: colorBlack,
        particlesColor: colorWhite,
        linkColor: colorWhite,
      }));
    }
  }, [layoutTheme, hasColor]);

  // Set theme -> disabled dark/light mode
  useEffect(() => {
    if(!hasColor) return;
    const background = bgColors[layoutColor]
    setParticlesTheme((prev) => ({
        ...prev,
        background,
        particlesColor: colorWhite,
        linkColor: colorWhite,
      }));
  }, [layoutColor, hasColor])

  return { particlesTheme };
};

export default useParticles;
