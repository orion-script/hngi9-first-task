import ZuriInter from "../../assets/zuri-internship-img.svg";
import ingressive from "../../assets/images.png";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <Outlet />
      <div className="md:flex flex-row w-full h-auto py-5 md:justify-around items-center text-center justify-center">
        <img src={ZuriInter} alt="zuri-inter" className="m-auto " />
        <h2 className="font-bold text-xl pb-10">
          HNG Internship 9 Frontend Task
        </h2>
        <img src={ingressive} alt="ingresive" className="h-10 m-auto" />
      </div>
    </Fragment>
  );
};

export default Footer;
