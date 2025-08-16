import { forwardRef, ForwardRefRenderFunction } from "react";
import { Modal, Image, UList, Divider, Button, Typography } from "@/components/UI";
import { ModalProps } from "@/components/UI/Modal";
import { FaCodeBranch } from "react-icons/fa";
import { SideProject } from "./type";
import { useLang } from "@/hooks";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Paragraph } = Typography;

const { List, ListItem } = UList;

interface ProjectsSideModalProps extends ModalProps {
  project: SideProject | null;
}

const ProjectsSideModal: ForwardRefRenderFunction<HTMLDivElement, ProjectsSideModalProps> = (
  { project, ...restProps },
  ref
) => {
  const { lang } = useLang();

  const { layoutValue } = useLayout();

  const { layoutColor } = layoutValue;

  const className = utils.formatClassName("projects-side-modal");

  const renderHead = () => {
    if (!project) return;
    return (
      <Paragraph size={16} strong>
        {project.label}
      </Paragraph>
    );
  };

  const renderContent = () => {
    if (!project) return;
    return (
      <>
        <div className="modal-image content-space">
          <Image
            imgWidth="100%"
            imgHeight="100%"
            objectFit="cover"
            src={project.imgURL}
            alt={project.label}
          />
        </div>
        <Paragraph size={16} strong style={{ marginBottom: "20px" }}>
          {project.desc}
        </Paragraph>
        <Button color={layoutColor} rootClassName="content-space">
          <a href={project.demoURL} target="_blank">
            {lang.projects.side.demo}
          </a>
        </Button>
        <Divider>{lang.projects.side.features}</Divider>
        <List icon={<FaCodeBranch />}>
          {project.features.map((feature) => (
            <ListItem key={feature.id}>{feature.desc}</ListItem>
          ))}
        </List>
      </>
    );
  };

  return (
    <Modal
      ref={ref}
      color={layoutColor}
      hasCloseIcon={false}
      hasCancelButton={false}
      head={renderHead()}
      rootClassName={className}
      {...restProps}
    >
      {renderContent()}
    </Modal>
  );
};

export default forwardRef(ProjectsSideModal);
