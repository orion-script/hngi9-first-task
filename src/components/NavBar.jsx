import ProfilePic from "../assets/Y5xDUhSQ_400x400.jpg";
import { FaShare } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

const NavBar = () => {
  return (
    // <h2 className="slack" id="slack">Olaniyi John</h2>
    <div className="flex  flex-col w-full h-40">
    // <h2 className="slack">Olaniyi John</h2>
      <div className="w-20 h-20 rounded m-auto my-10">
        <FaShare
          className="md:absolute md:ml-52 md:cursor-pointer md:mt-5 hidden md:block border
        border-gray-400
        rounded-full border-dotted w-8 h-8 p-2"
        />
        <FaEllipsisH
          className="absolute cursor-pointer md:hidden ml-36 border
        border-gray-400
        rounded-full border-dotted w-8 h-8 p-2"
        />
        <img
          src={ProfilePic}
          alt="pprofile-pic"
          className="rounded-full cursor-pointer"
          id="profile_img"
        />
      </div>
      <div className="m-auto text-2xl font-bold ">
        <h1 className="cursor-pointer" id="twitter">
          Hades_Codes
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
