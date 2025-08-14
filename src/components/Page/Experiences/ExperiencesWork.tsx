import { ForwardRefRenderFunction, forwardRef } from "react";
import { Divider, Space, Typography, UList } from "@/components/UI";
import { useLang } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import utils from "@/utils";
import { FaCodeBranch } from "react-icons/fa";

const { Paragraph } = Typography;

const { List, ListItem } = UList;

const ExperiencesWork: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const className = utils.formatClassName("experiences-work");

  const head = (
    <>
      <Paragraph strong size={17}>
        Fresher ReactJs Developer
      </Paragraph>
      <Space aligns="middle">
        <Paragraph strong size={18} rootClassName="work-company">
          CNV Loyalty
        </Paragraph>
        <span>|</span>
        <Paragraph size={15}>10/2021 - 03/2023</Paragraph>
      </Space>
    </>
  );

  return (
    <CardInfo ref={ref} rootClassName={className} head={head}>
      <Divider>
        <Paragraph strong size={17}>
          {lang.experiences.firstCompany.jobDesc.title}
        </Paragraph>
      </Divider>
      <List icon={<FaCodeBranch />} rootClassName="content-space">
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.jobDesc.content_1}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.jobDesc.content_2}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.jobDesc.content_3}</Paragraph>
        </ListItem>
      </List>
      <Divider>
        <Paragraph strong size={17}>
          {lang.experiences.firstCompany.project.title}
        </Paragraph>
      </Divider>
      <List icon={<FaCodeBranch />}>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.project.name_1}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.project.name_2}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.project.name_3}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.project.name_4}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.project.name_5}</Paragraph>
        </ListItem>
      </List>
    </CardInfo>
  );
};

export default forwardRef(ExperiencesWork);
