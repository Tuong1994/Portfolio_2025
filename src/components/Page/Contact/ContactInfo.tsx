import { ForwardRefRenderFunction, forwardRef, useMemo } from "react";
import { Divider, InfoRow, Space, Typography } from "@/components/UI";
import { HiPhone, HiEnvelope } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { useLang } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import utils from "@/utils";

const { Paragraph } = Typography;

const ContactInfo: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang } = useLang();

  const socialNetworks = useMemo(
    () => [
      {
        id: "facebook",
        linkURL: "https://www.facebook.com/profile.php?id=61556964666962",
        icon: <FaFacebook size={30} />,
      },
      {
        id: "instagram",
        linkURL: "https://www.facebook.com/profile.php?id=61556964666962",
        icon: <FaInstagram size={30} />,
      },
      {
        id: "twitter",
        linkURL: "https://www.facebook.com/profile.php?id=61556964666962",
        icon: <FaTwitter size={30} />,
      },
    ],
    []
  );

  const infoRowProps: InfoRowProps = {
    hasColon: false,
    labelProps: { strong: false, size: 16 },
    textProps: { strong: false, size: 16 },
    labelSpanProps: { span: 2 },
    textSpanProps: { span: 22 },
    rootClassName: "info-item",
  };

  const className = utils.formatClassName("contact-info");

  return (
    <CardInfo ref={ref} rootClassName={className}>
      <Paragraph size={25} aligns="center">
        {lang.contact.subTitle}
      </Paragraph>
      <Divider />
      <InfoRow {...infoRowProps} label={<HiPhone />} text="(+84) 079 322 9970" />
      <InfoRow {...infoRowProps} label={<HiEnvelope />} text="nbtuong1994@gmail.com" />
      <Space justify="center">
        {socialNetworks.map((network) => (
          <a key={network.id} href={network.linkURL} target="_blank" className="info-network">
            {network.icon}
          </a>
        ))}
      </Space>
    </CardInfo>
  );
};

export default forwardRef(ContactInfo);
