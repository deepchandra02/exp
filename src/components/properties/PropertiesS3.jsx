import React from "react";
import choose from "../Zimages/whychooseus.png";
import project from "../Zimages/featuredprojects.png";
import place from "../Zimages/findyourplace.png"

const PropertiesS3 = () => {
  return (
    <div className="flex space-x-32 justify-center font-Montserrat text-mpurple font-normal m-auto my-20 bg-white">
      <div className="flex flex-col justify-center items-center">
        <img src={choose} alt="whychooseus" className="w-20 m-7"/>
        <h1 className="font-semibold">Why choose us?</h1>
        <p>Making a difference by providing <br/> quality services for over 30 years</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={project} alt="featuredprojects" className="w-20 m-7"/>
        <h1 className="font-semibold">Featured Projects</h1>
        <p>Making a difference by providing <br/> quality services for over 30 years</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={place} alt="findyourplace" className="w-20 m-7"/>
        <h1 className="font-semibold">Find Your place</h1>
        <p>Making a difference by providing <br/> quality services for over 30 years</p>
      </div>
    </div>
  );
};

export default PropertiesS3;
