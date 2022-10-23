import { FaSlack } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Section = () => {
  return (
    <div className="flex flex-row my-5 justify-center">
      <FaSlack className="w-10 h-10" />
      <FaGithub className="ml-2 w-10 h-10" />
    </div>
  );
};

export default Section;
