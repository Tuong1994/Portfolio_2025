import { forwardRef, ForwardRefRenderFunction } from "react";
import { Image } from "@/components/UI";
import avatar from "/avatar-filter.png";
import utils from "@/utils";

const IntroAvatar: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const className = utils.formatClassName("intro-avatar");

  return (
    <div ref={ref} className={className}>
      <div className="avatar-wrapper">
        <div className="wrapper-image">
          <Image imgWidth="100%" imgHeight="100%" src={avatar} />
        </div>
        <div className="wrapper-layer"></div>
        <div className="wrapper-dots">
          {[...Array(25)].map((_, idx) => (
            <div key={idx} className="dots-item"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(IntroAvatar);
