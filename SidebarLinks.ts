import {
  House,
  NotepadText,
  UserPlus,
  Settings,
  Headset,
  Inbox,
} from "lucide-react";
export const SidebarLinks = [
  {
    Icon: House,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    Icon: NotepadText,
    label: "Challenges & Hackathons",
    path: "/dashboard/hackathons",
  },
  {
    Icon: UserPlus,
    label: "Community",
    path: "/dashboard/community",
  },
];
export const FooterLinks = [
  {
    Icon: Settings,
    label: "Settings",
    path: "/",
  },
  {
    Icon: Headset,
    label: "Help Center",
    path: "/",
  },
  {
    Icon: Inbox,
    label: "Refer family & friends",
    path: "/",
  },
];
