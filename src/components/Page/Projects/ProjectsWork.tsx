import { forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import { Divider, InfoRow, Space, Tooltip, Typography } from "@/components/UI";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { useLang } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import TechLogo from "../Common/TechLogo";
import utils from "@/utils";

const { Paragraph } = Typography;

const ProjectsWork: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang, locale } = useLang();

  const techs = useMemo(() => ["html", "css", "js", "ts", "react", "c-sharp", "net-core"], []);

  const features = useMemo(
    () => [
      {
        id: "automation",
        label: lang.projects.work.features.automation.title,
        content: lang.projects.work.features.automation.description,
      },
      {
        id: "album",
        label: lang.projects.work.features.album.title,
        content: lang.projects.work.features.album.description,
      },
      {
        id: "printer",
        label: lang.projects.work.features.printed.title,
        content: lang.projects.work.features.printed.description,
      },
      {
        id: "wholesale",
        label: lang.projects.work.features.wholesale.title,
        content: lang.projects.work.features.wholesale.description,
      },
      {
        id: "xGetY",
        label: lang.projects.work.features.xGetY.title,
        content: lang.projects.work.features.xGetY.description,
      },
    ],
    [locale]
  );

  const className = utils.formatClassName("projects-work");

  const infoRowProps: InfoRowProps = {
    labelProps: { size: 16 },
    textProps: { size: 16, style: { marginBottom: "10px" } },
    gutters: [0],
    labelSpanProps: { xs: 24, md: 24, lg: 5, span: 3 },
    textSpanProps: { xs: 24, md: 24, lg: 19, span: 20 },
  };

  const head = (
    <Space>
      <Paragraph size={17} strong>
        {lang.projects.work.project}
      </Paragraph>
      <span>|</span>
      <Paragraph>CNV Loyalty</Paragraph>
    </Space>
  );

  const renderTechs = () => {
    return (
      <Space style={{ marginBottom: "10px" }}>
        {techs.map((tech) => (
          <Tooltip key={tech} label={tech}>
            <TechLogo logoSize={30} src={`/dev/${tech}.svg`} alt={tech} />
          </Tooltip>
        ))}
      </Space>
    );
  };

  const renderFeatures = () => {
    return features.map((feature) => (
      <CardInfo key={feature.id} head={feature.label}>
        {feature.content}
      </CardInfo>
    ));
  };

  return (
    <CardInfo ref={ref} rootClassName={className} head={head}>
      <InfoRow {...infoRowProps} label={lang.projects.description} text={lang.projects.work.description} />
      <InfoRow {...infoRowProps} label={lang.projects.role} text="Frontend" />
      <InfoRow {...infoRowProps} label={lang.projects.tech} text={renderTechs()} />
      <Divider>
        <Paragraph strong size={17}>
          {lang.projects.work.features.title}
        </Paragraph>
      </Divider>
      {renderFeatures()}
    </CardInfo>
  );
};

export default forwardRef(ProjectsWork);
