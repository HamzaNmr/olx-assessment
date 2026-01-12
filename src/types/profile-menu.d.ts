import { ICONS } from "@/services/icon-map.service";

type IconKeys = keyof typeof ICONS;

export type MenuItem = {
  id: string;
  label: string;
  subText?: string;
  icon?: IconKeys;
};

export type MenuData = {
  main: MenuItem[];
  bottom: MenuItem[];
};
