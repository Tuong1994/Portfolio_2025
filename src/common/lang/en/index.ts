import about_en from "./about";
import common_en from "./common";
import contact_en from "./contact";
import experiences_en from "./experiences";
import header_en from "./header";
import intro_en from "./intro";
import projects_en from "./projects";

const en = {
  common: common_en,
  header: header_en,
  intro: intro_en,
  about: about_en,
  experiences: experiences_en,
  projects: projects_en,
  contact: contact_en,
};

export type EN = typeof en;

export default en;
