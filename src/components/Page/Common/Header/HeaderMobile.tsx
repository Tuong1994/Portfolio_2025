import { ForwardRefRenderFunction, forwardRef } from "react";
import { CiCircleList as ListIcon } from "react-icons/ci";
import { Button } from "@/components/UI";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const HeaderMobile: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { layoutValue } = useLayout();

  const className = utils.formatClassName("header-mobile");

  return (
    <div ref={ref} className={className}>
      <Button color={layoutValue.layoutColor}>
        <ListIcon />
      </Button>
    </div>
  );
};

export default forwardRef(HeaderMobile);
