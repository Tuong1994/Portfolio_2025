import { forwardRef, ForwardRefRenderFunction, Fragment, useMemo } from "react";
import { Divider, Typography, Button, Space } from "@/components/UI";
import { useLang } from "@/hooks";
import { ELang } from "@/common/enum";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";
import { FaCalendar, FaEnvelope, FaMapMarker, FaPhone, FaPhoneSquare } from "react-icons/fa";

const { Paragraph } = Typography;

const AboutInfo: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang, locale } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const infos = useMemo(
    () => [
      {
        id: "email",
        label: lang.common.form.label.email,
        icon: <FaEnvelope />,
        content: "nbtuong1994@gmail.com",
      },
      {
        id: "phone",
        label: lang.common.form.label.phone,
        icon: <FaPhoneSquare />,
        content: "(+84) 079 322 9970",
      },
      {
        id: "birthday",
        label: lang.common.form.label.birthday,
        icon: <FaCalendar />,
        content: locale === ELang.EN ? "1994 November 28th" : "28 tháng 11 năm 1994",
      },
      {
        id: "location",
        label: lang.common.form.label.location,
        icon: <FaMapMarker />,
        content: locale === ELang.EN ? "Ho Chi Minh" : "Hồ Chí Minh",
      },
    ],
    [locale]
  );

  const className = utils.formatClassName("about-info");

  const renderInfo = () => {
    return infos.map((info, idx) => (
      <Fragment key={info.id}>
        <Space aligns="middle">
          {info.icon}
          <Paragraph size={16}>{info.label}</Paragraph>
        </Space>
        <Paragraph size={18} strong>
          {info.content}
        </Paragraph>
        {idx !== infos.length - 1 && <Divider />}
      </Fragment>
    ));
  };

  return (
    <div ref={ref} className={className}>
      <div className="info-card">{renderInfo()}</div>
      <Button color={layoutColor} sizes="lg">
        <a href="/cv.pdf" download="CV - Nhâm Bổn Tường">
          {lang.about.download}
        </a>
      </Button>
    </div>
  );
};

export default forwardRef(AboutInfo);
