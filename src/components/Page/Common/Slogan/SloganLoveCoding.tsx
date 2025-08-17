import { forwardRef, ForwardRefRenderFunction } from "react";
import { Space, Typography } from "@/components/UI";
import { CiHeart } from "react-icons/ci";
import { useLang } from "@/hooks";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Paragraph } = Typography;

const SloganLoveCoding: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const colorClassName = `slogan-love-coding-${layoutColor}`;

  const className = utils.formatClassName("slogan-love-coding", colorClassName);

  return (
    <Space ref={ref} aligns="middle" size={15} rootClassName={className}>
      <Paragraph size={40}>{lang.common.slogan.loveCoding.prefix}</Paragraph>
      <CiHeart size={40} />
      <Paragraph size={60} weight={600} rootClassName="love-coding-suffix">{lang.common.slogan.loveCoding.suffix}</Paragraph>
    </Space>
  );
};

export default forwardRef(SloganLoveCoding);
