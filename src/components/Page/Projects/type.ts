export type SideProjectFeature = {
  id: string;
  desc: string;
};

export type SideProject = {
  id: string;
  label: string;
  desc: string;
  imgURL: string;
  demoURL: string;
  features: SideProjectFeature[];
};

export type TriggerModal = {
  open: boolean;
  project: SideProject | null;
};
