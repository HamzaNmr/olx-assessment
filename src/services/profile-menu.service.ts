import { MenuData } from "@/types";

const MOCK_MENU: MenuData = {
  main: [
     {
      id: "1",
      label: "Wallet",
      subText: "Balance: $1,250.00",
      icon: "Wallet",
    },
    {
      id: "2",
      label: "Favourites & Saved searches",
      icon: "Heart",
    },
    {
      id: "4",
      label: "Orders & Delivery",
      icon: "Truck",
    },
  ],
  bottom: [
    {
      id: "5",
      label: "Settings",
      icon: "Settings",
    },
    {
      id: "6",
      label: "Help & Support",
      icon: "MessageCircleQuestionMark",
    },
    {
      id: "7",
      label: "Download Data",
      icon: "FileSpreadsheet",
    },
  ],
};

export const fetchProfileMenu = async (): Promise<MenuData> => {
  await new Promise((res) => setTimeout(res, 200));
  return MOCK_MENU;
};
