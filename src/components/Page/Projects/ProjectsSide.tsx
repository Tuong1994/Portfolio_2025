import { forwardRef, ForwardRefRenderFunction, useEffect, useMemo, useState } from "react";
import { Image, Grid, Typography, Button } from "@/components/UI";
import { SideProject, TriggerModal } from "./type";
import { useLang } from "@/hooks";
import CardInfo from "../Common/CardInfo";
import ProjectsSideModal from "./ProjectsSideModal";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Paragraph } = Typography;

const ProjectsSide: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const [triggerModal, setTriggerModal] = useState<TriggerModal>({
    open: false,
    project: null,
  });

  const { lang, locale } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const sideProjects = useMemo<SideProject[]>(
    () => [
      {
        id: "healthy-food-main",
        label: lang.projects.side.healthyFood.main.title,
        desc: lang.projects.side.healthyFood.main.description,
        imgURL: "/projects/healthy-food-main.PNG",
        demoURL: "https://healthy-food-main.vercel.app/",
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
        id: "healthy-food-admin",
        label: lang.projects.side.healthyFood.admin.title,
        desc: lang.projects.side.healthyFood.admin.description,
        imgURL: "/projects/healthy-food-admin.PNG",
        demoURL: "https://healthy-food-admin.vercel.app/",
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

  useEffect(() => {
    let timeout: any;
    if (!triggerModal.open) {
      timeout = setTimeout(() => setTriggerModal((prev) => ({ ...prev, project: null })), 2000);
    }
    return () => clearTimeout(timeout);
  }, [triggerModal.open]);

  const className = utils.formatClassName("projects-side");

  const handleTriggerModal = (project: SideProject | null) => {
    if (!triggerModal.open) return setTriggerModal((prev) => ({ ...prev, open: true, project }));
    setTriggerModal((prev) => ({ ...prev, open: false }));
  };

  const renderSideProjects = () => {
    return sideProjects.map((project) => (
      <div key={project.id} className="side-item">
        <Image
          imgWidth="100%"
          imgHeight="100%"
          objectFit="cover"
          rootClassName="item-image"
          src={project.imgURL}
          alt={project.label}
        />
        <Paragraph strong aligns="center" rootClassName="item-name">
          {project.label}
        </Paragraph>
        <div className="item-layer">
          <Button
            sizes="lg"
            color={layoutColor}
            rootClassName="layer-action"
            onClick={() => handleTriggerModal(project)}
          >
            {lang.projects.side.detail}
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <CardInfo ref={ref} rootClassName={className}>
        <Grid lg={3} span={3}>
          {renderSideProjects()}
        </Grid>
      </CardInfo>
      <ProjectsSideModal
        open={triggerModal.open}
        project={triggerModal.project}
        onOk={() => handleTriggerModal(null)}
        onCancel={() => handleTriggerModal(null)}
      />
    </>
  );
};

export default forwardRef(ProjectsSide);
