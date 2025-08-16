import { ForwardRefRenderFunction, forwardRef, useState } from "react";
import { Form, FormItem, Input, InputPhone, TextArea } from "@/components/Control";
import { Button } from "@/components/UI";
import { ControlColor } from "@/components/Control/type";
import { useFormRule, useLang } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import useLayout from "@/components/UI/Layout/useLayout";
import useMessage from "@/components/UI/ToastMessage/useMessage";
import useForm from "@/components/Control/Form/useForm";
import emailjs from "@emailjs/browser";
import utils from "@/utils";

type UserInfo = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { lang } = useLang();

  const { required, email, phone } = useFormRule();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const messageApi = useMessage();

  const form = useForm();

  const className = utils.formatClassName("contact-form");

  const initialData: UserInfo = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSendEmail = (formData: UserInfo) => {
    setLoading(true);
    emailjs
      .send("service_qw1jxnh", "template_dowyd17", formData, {
        publicKey: "UL1L9fRXplZ10GTaf",
      })
      .then(
        () => {
          setLoading(false);
          messageApi.success(lang.contact.messageSuccess);
          form?.resetForm();
        },
        () => {
          messageApi.error(lang.contact.messageError);
          setLoading(false);
        }
      );
  };

  return (
    <CardInfo ref={ref} rootClassName={className}>
      <Form<UserInfo>
        sizes="lg"
        disabled={loading}
        initialData={initialData}
        color={layoutColor as ControlColor}
        onFinish={handleSendEmail}
      >
        <FormItem name="fullName" rules={required()}>
          <Input required label={lang.contact.label.fullName} />
        </FormItem>
        <FormItem name="email" rules={email()}>
          <Input required label={lang.contact.label.email} />
        </FormItem>
        <FormItem name="phone" rules={phone()}>
          <InputPhone required label={lang.contact.label.phone} />
        </FormItem>
        <FormItem name="message" rules={required()}>
          <TextArea required label={lang.contact.label.message} />
        </FormItem>
        <Button loading={loading} color={layoutColor}>{lang.contact.action}</Button>
      </Form>
    </CardInfo>
  );
};

export default forwardRef(ContactForm);
