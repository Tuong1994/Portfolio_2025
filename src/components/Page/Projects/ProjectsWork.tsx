import { forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import { InfoRow, Space, Tooltip, Typography } from "@/components/UI";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { useLang } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import TechLogo from "../Common/TechLogo";
import utils from "@/utils";

const { Paragraph } = Typography;

const ProjectsWork: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const className = utils.formatClassName("projects-work");

  const techs = useMemo(() => ["html", "css", "js", "ts", "react", "c-sharp", "net-core"], []);

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
      <Space>
        {techs.map((tech) => (
          <Tooltip key={tech} label={tech}>
            <TechLogo logoSize={30} src={`/dev/${tech}.svg`} alt={tech} />
          </Tooltip>
        ))}
      </Space>
    );
  };

  return (
    <CardInfo ref={ref} rootClassName={className} head={head}>
      <InfoRow {...infoRowProps} label={lang.projects.description} text={lang.projects.work.description} />
      <InfoRow {...infoRowProps} label={lang.projects.role} text="Frontend" />
      <InfoRow {...infoRowProps} label={lang.projects.tech} text={renderTechs()} />
    </CardInfo>
  );
};

export default forwardRef(ProjectsWork);
