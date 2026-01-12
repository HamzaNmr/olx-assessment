import { UserInfo } from "@/types";

const MOCK_USER: UserInfo = {
  id: "123",
  firstName: "Hamza",
  lastName: "Nemer",
  avatarUrl: "https://www.olx.com.lb/assets/iconProfilePicture.98cd0cc609ff2afe939ba088a4820924.png",
  email: "hamza@example.com",
};

export const fetchUserInfo = async (): Promise<UserInfo> => {
  await new Promise((res) => setTimeout(res, 300));
  return MOCK_USER;
};
