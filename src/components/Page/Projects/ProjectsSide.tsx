import { forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import { Image, Grid } from "@/components/UI";
import { useLang } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import utils from "@/utils";

const ProjectsSide: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const { lang, locale } = useLang();

  const sideProjects = useMemo(
    () => [
      {
        id: "",
        label: lang.projects.side.healthyFood.main.title,
        desc: lang.projects.side.healthyFood.main.description,
        imgURL: "/projects/healthy-food-main.PNG",
        features: [
          { id: "main-1", desc: lang.projects.side.healthyFood.main.features_1 },
          { id: "main-2", desc: lang.projects.side.healthyFood.main.features_2 },
          { id: "main-3", desc: lang.projects.side.healthyFood.main.features_3 },
          { id: "main-4", desc: lang.projects.side.healthyFood.main.features_4 },
          { id: "main-5", desc: lang.projects.side.healthyFood.main.features_5 },
          { id: "main-6", desc: lang.projects.side.healthyFood.main.features_6 },
          { id: "main-7", desc: lang.projects.side.healthyFood.main.features_7 },
        ],
      },
      {
        id: "",
        label: lang.projects.side.healthyFood.admin.title,
        desc: lang.projects.side.healthyFood.admin.description,
        imgURL: "/projects/healthy-food-admin.PNG",
        features: [
          { id: "admin-1", desc: lang.projects.side.healthyFood.admin.features_1 },
          { id: "admin-2", desc: lang.projects.side.healthyFood.admin.features_2 },
          { id: "admin-3", desc: lang.projects.side.healthyFood.admin.features_3 },
          { id: "admin-4", desc: lang.projects.side.healthyFood.admin.features_4 },
          { id: "admin-5", desc: lang.projects.side.healthyFood.admin.features_5 },
          { id: "admin-6", desc: lang.projects.side.healthyFood.admin.features_6 },
          { id: "admin-7", desc: lang.projects.side.healthyFood.admin.features_7 },
          { id: "admin-8", desc: lang.projects.side.healthyFood.admin.features_8 },
          { id: "admin-9", desc: lang.projects.side.healthyFood.admin.features_9 },
          { id: "admin-10", desc: lang.projects.side.healthyFood.admin.features_10 },
        ],
      },
    ],
    [locale]
  );

  const className = utils.formatClassName("projects-side");

  const renderSideProjects = () => {
    return sideProjects.map((project) => (
      <div className="side-item">
        <Image
          imgWidth="100%"
          imgHeight="100%"
          objectFit="cover"
          rootClassName="item-image"
          src={project.imgURL}
          alt={project.label}
        />
        <div className="item-layer"></div>
      </div>
    ));
  };

  return (
    <CardInfo ref={ref} rootClassName={className}>
      <Grid lg={3} span={3}>{renderSideProjects()}</Grid>
    </CardInfo>
  );
};

export default forwardRef(ProjectsSide);
