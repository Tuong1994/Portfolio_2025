import { forwardRef, ForwardRefRenderFunction } from "react";
import { useLang } from "@/hooks";
import { Divider, Space, Typography } from "@/components/UI";
import { FaGraduationCap } from "react-icons/fa";
import CardInfo from "../Common/CardInfo";
import utils from "@/utils";

const { Paragraph } = Typography;

const AboutContent: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const className = utils.formatClassName("about-content");

  return (
    <div ref={ref} className={className}>
      <Paragraph size={20}>{lang.about.content}</Paragraph>
      <Divider>
        <Space aligns="middle">
          <FaGraduationCap />
          <Paragraph strong size={16}>
            {lang.about.education.title}
          </Paragraph>
        </Space>
      </Divider>
      <CardInfo head={<Paragraph size={18}>CYBERSOFT ACADEMY (2020 - 2021)</Paragraph>}></CardInfo>
    </div>
  );
};

export default forwardRef(AboutContent);
