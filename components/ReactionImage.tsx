import React from "react";
import ThumbsUpEmoji from "@/public/homepage/thumbs.svg";
import HeartEmoji from "@/public/homepage/heart.svg";
import BellEmoji from "@/public/homepage/bell.svg";
import Image from "next/image";

const ReactionImage = () => {
  return (
    <div className="absolute -top-[27px] left-[51%] rounded-full shadow-sm h-[57px] w-[57px] bg-white border ">
      <div className="absolute border top-2 left-[25%] z-30 bg-[#549CFF] p-1 rounded-full">
        <Image src={ThumbsUpEmoji} alt="emoji" width={20} />
      </div>
      <div className=" absolute left-[10px] top-[25px] z-20 border bg-[#FF6E7C] p-1 rounded-full">
        <Image src={HeartEmoji} alt="emoji" width={15} />
      </div>
      <div className=" absolute top-6 left-[45%] z-10 border bg-[#FFEE6E] p-1 rounded-full">
        <Image src={BellEmoji} alt="emoji" width={15} />
      </div>
    </div>
  );
};

export default ReactionImage;
