import { Card, Typography } from "@/components/UI";
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Paragraph } = Typography;

interface CardInfoProps {
  rootClassName?: string;
  head?: ReactNode;
  children?: ReactNode;
}

const CardInfo: ForwardRefRenderFunction<HTMLDivElement, CardInfoProps> = (
  { rootClassName = "", head, children },
  ref
) => {
  const { layoutValue } = useLayout();

  const { layoutTheme } = layoutValue;

  const themeClassName = `card-info-${layoutTheme}`;

  const className = utils.formatClassName("card-info", themeClassName, rootClassName);

  return (
    <Card ref={ref} rootClassName={className}>
      <div className="info-head">{head}</div>
      {children}
    </Card>
  );
};

export default forwardRef(CardInfo);
