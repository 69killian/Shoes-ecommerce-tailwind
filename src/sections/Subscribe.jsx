import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex flex-col items-center justify-center  gap-10 text-center"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] font-montserrat font-bold">
        Sign Up for <span className="text-[#266131]">Updates</span> & Newsletter
      </h3>
      <div className="flex items-center gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="subscribe@shoesea.com"
          className="text-[#266131] bg-white border border-solid border-[#266131] transition-shadow duration-300 ease-in-out shadow-[4px_4px_0px_#266131] hover:shadow-none rounded-lg px-4 h-14 w-full text-lg focus:outline-none"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
