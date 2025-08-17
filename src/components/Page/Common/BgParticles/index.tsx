import { CSSProperties, FC, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import useLayout from "@/components/UI/Layout/useLayout";
import useParticles from "./useParticles";
import utils from "@/utils";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

interface BgParticlesProps {
  id?: string;
  rootClassName?: string;
  style?: CSSProperties;
  options?: ISourceOptions;
}

const BgParticles: FC<BgParticlesProps> = ({ options, rootClassName = "", id = "tsparticles", style }) => {
  const [init, setInit] = useState<boolean>(false);

  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  const { defaultOptions } = useParticles(options);

  const className = utils.formatClassName("bg-particles", rootClassName);

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

  if (init) {
    return (
      <Particles id={id} style={style} className={className} key={layoutTheme} options={defaultOptions} />
    );
  }

  return <></>;
};

export default BgParticles;
