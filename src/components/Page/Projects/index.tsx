import { forwardRef, ForwardRefRenderFunction } from "react";
import { AnchorScroll, Tabs, Typography, Space } from "@/components/UI";
import { BsLightbulb, BsBuilding } from "react-icons/bs";
import { TabsColor, TabsItems } from "@/components/UI/Tabs/type";
import { anchorId } from "@/common/constant/anchorId";
import { useLang } from "@/hooks";
import SectionWrapper from "../Common/SectionWrapper";
import SectionTitle from "../Common/SectionWrapper/SectionTitle";
import ProjectsWork from "./ProjectsWork";
import ProjectsSide from "./ProjectsSide";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { AnchorSection } = AnchorScroll;

const { Paragraph } = Typography;

const Projects: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor, layoutTheme } = layoutValue;

  const themeClassName = `projects-${layoutTheme}`

  const colorClassName = `projects-${layoutColor}`

  const className = utils.formatClassName("projects", themeClassName, colorClassName);

  const items: TabsItems = [
    {
      id: "work",
      title: (
        <Space aligns="middle">
          <BsBuilding />
          <Paragraph size={16}>{lang.projects.work.title}</Paragraph>
        </Space>
      ),
      content: <ProjectsWork />,
    },
    {
      id: "side",
      title: (
        <Space aligns="middle">
          <BsLightbulb />
          <Paragraph size={16}>{lang.projects.side.title}</Paragraph>
        </Space>
      ),
      content: <ProjectsSide />,
    },
  ];

  return (
    <AnchorSection id={anchorId.PROJECTS}>
      <SectionWrapper ref={ref} rootClassName={className}>
        <SectionTitle>{lang.header.menu.projects}</SectionTitle>
        <Tabs items={items} color={layoutColor as TabsColor} contentStyle={{ overflow: "unset" }} />
      </SectionWrapper>
    </AnchorSection>
  );
};

export default forwardRef(Projects);
