import { forwardRef, ForwardRefRenderFunction } from "react";
import { Divider, Space, Typography, UList } from "@/components/UI";
import { useLang } from "@/hooks";
import { FaGraduationCap } from "react-icons/fa";
import CardInfo from "../Common/CardInfo";
import utils from "@/utils";

const { Paragraph } = Typography;

const { List, ListItem } = UList;

const AboutContent: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const className = utils.formatClassName("about-content");

  return (
    <div ref={ref} className={className}>
      <Paragraph size={20} rootClassName="content-space">{lang.about.content}</Paragraph>
      <Divider>
        <Space aligns="middle">
          <FaGraduationCap />
          <Paragraph strong size={16}>
            {lang.about.education.title}
          </Paragraph>
        </Space>
      </Divider>
      <CardInfo head={<Paragraph size={20}>CYBERSOFT ACADEMY (2020 - 2021)</Paragraph>}>
        <List>
          <ListItem>
            <Paragraph size={18}>Bootcamp Front End Web Developer</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph size={18}>Back End Developer - NodeJS</Paragraph>
          </ListItem>
        </List>
      </CardInfo>
    </div>
  );
};

export default forwardRef(AboutContent);
