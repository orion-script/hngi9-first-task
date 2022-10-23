import ZuriInter from "../assets/zuri-internship-img.svg";
import ingressive from "../assets/images.png";

const Footer = () => {
  return (
    <div className="hidden md:flex flex-row w-full h-auto py-5 justify-around items-center">
      <img src={ZuriInter} alt="zuri-inter" className="" />
      <h2 className="font-bold text-xl">HNG Internship 9 Frontend Task</h2>
      <img src={ingressive} alt="ingresive" className="h-10" />
    </div>
  );
};

export default Footer;
