import React from "react";
import { AvatarCircles } from "./ui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
];

const BannerAvatars = () => {
  return (
    <div className="absolute gap-2 items-center bottom-[12px] -left-[30%] bg-white w-[200px] p-1 rounded-full hidden sm:flex">
      <AvatarCircles avatarUrls={avatars} />
      <div className="text-xs font-semibold">
        <p>20k</p>
        <p>Talents</p>
      </div>
    </div>
  );
};

export default BannerAvatars;
