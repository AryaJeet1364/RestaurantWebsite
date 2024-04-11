import React from "react";
import { newsletterData } from "../data";

const Newsletter = () => {
  const { title, subtitle, placeholder, btnText } = newsletterData;

  const redirectToLink = (e) => {
    e.preventDefault();
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScCVUQmOBCW4m6OcL8cUqCfP-I-ld8q_wD7PsJA_Vx5fi0Ozw/viewform?fbzx=613038147534112146";
  };

  return (
    <div className="bg-none lg:bg-newsletter lg:bg-cover lg:h-[220px] lg:bg-center lg:px-24 xl:bg-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center h-full">
        <div className="text-center lg:text-left mb-4">
          <h3 className="text-[26px] font-primary italic text-white capitalize mb-2">
            {title}
          </h3>
          <p>{subtitle}</p>
        </div>
        <form className="flex flex-col lg:flex-row lg:gap-x-[10px]" action="">
          <input
            className="input bg-transparent placeholder:font-light placeholder:text-white/20 text-white mb-4 focus:ring-1 focus:ring-accent border-white/20 transition-all"
            type="text"
            placeholder={placeholder}
          />
          <button
            className="btn capitalize w-full lg:max-w-[204px]"
            onClick={redirectToLink}
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
