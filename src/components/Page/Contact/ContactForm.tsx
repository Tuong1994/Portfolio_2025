import { ForwardRefRenderFunction, forwardRef } from "react";
import { Card } from "@/components/UI";
import CardInfo from "../Common/CardInfo";
import utils from "@/utils";

const ContactForm: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("contact-form");

  return <CardInfo ref={ref} rootClassName={className}></CardInfo>;
};

export default forwardRef(ContactForm);
