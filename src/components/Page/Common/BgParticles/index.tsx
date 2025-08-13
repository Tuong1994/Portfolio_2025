import { FC, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import useLayout from "@/components/UI/Layout/useLayout";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { EMode } from "@/components/UI/Layout/Context";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

type ParticlesTheme = {
  background: string;
  particlesColor: string;
  linkColor: string;
};

const BgParticles: FC = () => {
  const [init, setInit] = useState<boolean>(false);
  const [particlesTheme, setParticlesTheme] = useState<ParticlesTheme>({
    background: "#fff",
    particlesColor: "#222",
    linkColor: "#222",
  });

  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      //await loadBasic(engine);
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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

  const options: ISourceOptions = useMemo(
    () => ({
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
    }),
    [particlesTheme.background, particlesTheme.particlesColor, particlesTheme.linkColor]
  );

  if (init) {
    return <Particles id="tsparticles" key={layoutValue.layoutTheme} options={options} />;
  }

  return <></>;
};

export default BgParticles;
