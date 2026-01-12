import styles from "@/styles/profile-menu.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/common/ui/dropdown-menu";
import { Button } from "@/components/common/ui/button";
import { fetchProfileMenu } from "@/services/profile-menu.service";
import { fetchUserInfo } from "@/services/user-info.service";
import { MenuData, UserInfo } from "@/types";
import { Icons } from "./svg/icons";

export function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuData>({ main: [], bottom: [] });
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    fetchProfileMenu().then((data) => {
      setMenuItems(data as MenuData);
    });

    fetchUserInfo()
      .then((data: UserInfo) => {
        setUser(data);
      })
      .catch((err: any) => console.error("User fetch error:", err))
      .finally(() => setLoadingUser(false));
  }, []);

  const onLogout = () => {
    console.log("Logged out!");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger onToggle={setOpen}>
        <div className={styles.profileMenuTrigger}>
          <div className={styles.avatarBtn}>
            {loadingUser ? (
              <div className={styles.avatarPlaceholder} />
            ) : (
              <Image
                src={user?.avatarUrl ?? "https://www.olx.com.lb/assets/iconProfilePicture.98cd0cc609ff2afe939ba088a4820924.png"}
                alt="User avatar"
                className={styles.avatarImg}
                width={30}
                height={30}
              />
            )}
          </div>
          {open ? <Icons.arrowDown style={{ transform: "rotate(180deg)" }} /> : <Icons.arrowDown />}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent open={open} className={styles.profileMenuContent}>
        <DropdownMenuItem className={styles.profileMenuItem}>
          <div className={styles.profileUserContainer}>
            <div className={styles.profileUserInfo}>
              {loadingUser ? (
                <div className={styles.avatarPlaceholderLarge} />
              ) : (
                <Image
                  src={user?.avatarUrl ?? "https://www.olx.com.lb/assets/iconProfilePicture.98cd0cc609ff2afe939ba088a4820924.png"}
                  alt="User avatar"
                  width={50}
                  height={50}
                />
              )}
              <div>
                <p className={styles.greetingUser}>
                  {loadingUser ? "Hello," : `Hello,`}
                </p>
                <p className={styles.userName}>
                  {loadingUser ? "Loading..." : `${user?.firstName ?? ""} ${user?.lastName ?? ""}`}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className={styles.editProfileBtn}
              label="View and edit profile"
            />
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {menuItems.main.map((item) => {
          const Icon = item.icon;

          return (
            <DropdownMenuItem key={item.id} className={styles.profileMenuItem}>
              {Icon && <Icon className={styles.menuIcon} />}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span>{item.label}</span>
                {item.subText && (
                  <span style={{ fontSize: "12px", color: "#777" }}>{item.subText}</span>
                )}
              </div>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        {menuItems.bottom.map((item) => {
          const Icon = item.icon;

          return (
            <DropdownMenuItem key={item.id} className={styles.profileMenuItem}>
              {Icon && <Icon className={styles.menuIcon} />}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span>{item.label}</span>
                {item.subText && (
                  <span style={{ fontSize: "12px", color: "#777" }}>{item.subText}</span>
                )}
              </div>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className={styles.profileMenuItem}
          onSelect={() => {
            onLogout();
            setOpen(false);
          }}
        >
          <Icons.logout />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
