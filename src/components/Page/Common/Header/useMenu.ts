import { useLang } from "@/hooks";
import { anchorId } from "@/common/constant/anchorId";

const { ABOUT, EXPERIENCES, PROJECTS, CONTACT } = anchorId;

const useMenu = () => {
  const { lang } = useLang();

  const menus = [
    { id: ABOUT, title: lang.header.menu.about },
    { id: EXPERIENCES, title: lang.header.menu.experiences },
    { id: PROJECTS, title: lang.header.menu.projects },
    { id: CONTACT, title: lang.header.menu.contact },
  ];

  return menus;
};

export default useMenu;
