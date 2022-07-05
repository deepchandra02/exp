import React from "react";
import contactHome from "../Zimages/contactHome.svg";
import contactArrow from "../Zimages/contactArrow.svg";

const Section1 = () => {
  return (
    <div className="pt-24 font-Montserrat text-mpurple font-normal ">
      <div className="contact-gradient1 pt-10 py-5 text-center text-white">
        <h1 className="text-5xl font-bold">Contact Al-Madar</h1>
        <p>call us at : +974 44675405</p>
        <div className="flex my-10 mx-44">
          <div className="">
            <h1 className="text-xl font-bold mb-4">Existing Tenants</h1>
            <p>
              For our current residents we have a complete set of tools and
              procedures to make your stay with us more comfortable and
              rewarding.
            </p>
          </div>
          <div className="px-40">
            <h1 className="text-xl font-bold mb-4">Prospective Residents</h1>
            <p>
              As a prospective tenant, we can help you through the process of
              finding and applying for the home of your dreams.
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-bold mb-4">Existing Clients/Owners</h1>
            <p>
              To fit your needs as a Landlord/Owner. We tailor our services to
              ensure that you have the highest level of service for your home.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex space-between justify-center my-10">
          <img src={contactHome} alt="contactHome" className="h-10" />
          <div className="w-3"></div>
          <p className="pt-3 text-lg font-Montserrat text-mpurple font-semibold">    New Clients (Property Owners)</p>
        </div>
        <div className="">
          <p className="text-center my-10">
            Looking for the best property management in Qatar? <br/> 
            Look no further schedule a free consultation by connecting <br/>
            directly with the team or simply give us a call: +974 44675405
          </p>
          <img src={contactArrow} alt="contactArrow" className="h-16 m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section1;