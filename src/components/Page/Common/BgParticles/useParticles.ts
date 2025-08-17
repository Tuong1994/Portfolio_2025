import { EMode } from "@/components/UI/Layout/Context";
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import useLayout from "@/components/UI/Layout/useLayout";

type ParticlesTheme = {
  background: string;
  particlesColor: string;
  linkColor: string;
};

const useParticles = (options?: ISourceOptions) => {
  const [particlesTheme, setParticlesTheme] = useState<ParticlesTheme>({
    background: "#fff",
    particlesColor: "#222",
    linkColor: "#222",
  });

  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

   useEffect(() => {
      if (layoutTheme === EMode.LIGHT) {
        setParticlesTheme((prev) => ({
          ...prev,
          background: "#fff",
          particlesColor: "#222",
          linkColor: "#222",
        }));
      } else {
        setParticlesTheme((prev) => ({
          ...prev,
          background: "#222",
          particlesColor: "#fff",
          linkColor: "#fff",
        }));
      }
    }, [layoutTheme]);

  const defaultOptions: ISourceOptions = useMemo(() => {
    if (options) return options;
    return {
      fullScreen: false,
      background: {
        color: {
          value: particlesTheme.background,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particlesTheme.particlesColor,
        },
        links: {
          color: particlesTheme.linkColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }, [particlesTheme.background, particlesTheme.particlesColor, particlesTheme.linkColor]);

  return { particlesTheme, defaultOptions };
};

export default useParticles;
