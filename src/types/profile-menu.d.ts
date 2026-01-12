import { IconNode } from "lucide-react";
import React from "react";

export type MenuItem = {
  id: string;
  label: string;
  subText?: string;
  icon?: React.ElementType;
};

export type MenuData = {
  main: MenuItem[];
  bottom: MenuItem[];
};
