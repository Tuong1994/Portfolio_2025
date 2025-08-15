import { ForwardRefRenderFunction, forwardRef, useMemo } from "react";
import { Divider, Flex, Space, Typography } from "@/components/UI";
import { FaHammer } from "react-icons/fa";
import { useLang, useViewpoint } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import utils from "@/utils";
import TechLogo from "../Common/TechLogo";

const { FlexRow, FlexCol } = Flex;

const { Paragraph } = Typography;

type ProgramLogo = {
  img: string;
  name: string;
};

const AboutSkills: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { isPhone, isSmTablet } = useViewpoint();

  const feLogos = useMemo<ProgramLogo[]>(
    () => [
      {
        img: "html",
        name: "HTML",
      },
      {
        img: "css",
        name: "CSS",
      },
      {
        img: "sass",
        name: "Sass",
      },
    ],
    []
  );

  const libsLogos = useMemo<ProgramLogo[]>(
    () => [
      {
        img: "js",
        name: "Javascript",
      },
      {
        img: "ts",
        name: "Typescript",
      },

      {
        img: "redux",
        name: "Redux",
      },
    ],
    []
  );

  const frameworkLogos = useMemo<ProgramLogo[]>(
    () => [
      {
        img: "react",
        name: "ReactJs",
      },
      {
        img: "vue",
        name: "VueJs",
      },
      {
        img: "nextjs",
        name: "NextJs",
      },
    ],
    []
  );

  const beLogos = useMemo<ProgramLogo[]>(
    () => [
      {
        img: "nodejs",
        name: "NodeJs",
      },
      {
        img: "nestjs",
        name: "NestJs",
      },
      {
        img: "mysql",
        name: "MySQL",
      },
    ],
    []
  );

  const className = utils.formatClassName("about-skills");

  const renderLogo = (logos: ProgramLogo[]) => {
    return logos.map((logo, idx) => {
      const spacingClassName = idx !== logos.length - 1 || isPhone ? "content-space" : "";
      const itemClassName = utils.formatClassName("skills-item", spacingClassName);
      return (
        <Space key={logo.name} aligns="middle" rootClassName={itemClassName}>
          <TechLogo rootClassName="item-image" src={`/dev/${logo.img}.svg`} alt={logo.name} />
          <div className="item-name">
            <Paragraph strong aligns="center">
              {logo.name}
            </Paragraph>
          </div>
        </Space>
      );
    });
  };

  return (
    <div ref={ref} className={className}>
      <Divider>
        <Space aligns="middle">
          <FaHammer />
          <Paragraph strong size={16}>
            {lang.about.skills.title}
          </Paragraph>
        </Space>
      </Divider>
      <FlexRow justify="between">
        <FlexCol xs={24} md={24} lg={16} span={16}>
          <CardInfo head={<Paragraph size={18}>Frontend</Paragraph>}>
            <FlexRow>
              <FlexCol xs={24} md={isSmTablet ? 24 : 8} lg={8} span={8}>
                {renderLogo(feLogos)}
              </FlexCol>
              <FlexCol xs={24} md={isSmTablet ? 24 : 8} lg={8} span={8}>
                {renderLogo(libsLogos)}
              </FlexCol>
              <FlexCol xs={24} md={isSmTablet ? 24 : 8} lg={8} span={8}>
                {renderLogo(frameworkLogos)}
              </FlexCol>
            </FlexRow>
          </CardInfo>
        </FlexCol>
        <FlexCol xs={24} md={24} lg={8} span={8}>
          <CardInfo head={<Paragraph size={18}>Backend</Paragraph>}>{renderLogo(beLogos)}</CardInfo>
        </FlexCol>
      </FlexRow>
    </div>
  );
};

export default forwardRef(AboutSkills);
