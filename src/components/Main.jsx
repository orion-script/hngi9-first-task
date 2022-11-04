import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col mt-10 text-center text-base">
      <a
        href="/contact"
        id="contact"
        className=" bg-gray-400 w-10/12 m-auto rounded my-5 py-5 items-center font-bold text-xl"
      >
        Contact
      </a>
      <a
        href="https://twitter.com/Hades_Codes"
        target="_blank"
        rel="noreferrer"
        className=" bg-gray-400 w-10/12 m-auto rounded my-5 py-5 items-center font-bold text-xl"
        id="twitter_link"
      >
        Twitter Link
      </a>
      <a
        href="https://training.zuri.team"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-400 w-10/12 m-auto rounded my-5 py-5 items-center font-bold text-xl"
        id="btn__zuri"
      >
        Zuri Team
      </a>
      <a
        href="http://books.zuri.team"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-400 w-10/12 m-auto rounded my-5 py-5 items-center font-bold text-xl"
        id="books"
      >
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=OlaniyiJohn"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-400 w-10/12 m-auto rounded my-5 py-5 items-center font-bold text-xl"
        id="book_python"
      >
        Python Books
      </a>
      <a
        href="https://background.zuri.team"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-400 w-10/12 m-auto rounded my-5 py-5 items-center font-bold text-xl"
        id="pitch"
      >
        Background Check for Coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-400 w-10/12 m-auto rounded my-5 py-5 items-center font-bold text-xl"
        id="book-design"
      >
        Design Books
      </a>
    </div>
  );
};

export default Main;
