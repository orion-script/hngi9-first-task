import React from "react";

function Contact() {
  return (
    <div className="mt-10 w-4/5 md:w-2/4 h-auto m-auto">
      <h2 className="font-bold text-3xl py-4">Contact Me</h2>
      <p className="font-bold text-xl py-4">
        Hi there, contact me to ask me anything you have in mind.
      </p>
      <form action="">
        <div className="md:flex md:flex-row md:justify-between w-full">
          <div className="flex flex-col md:w-2/5">
            <label htmlFor="">First name</label>
            <input
              id="first_name"
              className="border-solid border-black border-2 rounded w-full h-10 pl-5 outline-none mt-2 mb-5"
              placeholder="Enter your first name"
              type="text"
            />
          </div>
          <div className="flex flex-col md:w-2/5">
            <label htmlFor="">Last Name</label>
            <input
              id="last_name"
              className="border-solid border-black border-2 rounded w-full h-10 pl-5 outline-none  mt-2 mb-5"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="">Email</label>
          <input
            id="email"
            className="border-solid border-black border-2 rounded w-full h-10 pl-5 outline-none  mt-2 mb-5"
            type="text"
            placeholder="yourname@email.com"
          />
        </div>
        <textarea
          className="w-full border-solid border-black border-2 rounded h-24 outline-none pl-5 pt-2"
          name=""
          id="message"
          cols="30"
          rows="10"
          placeholder="Send me a message and i will reply you as soon as possible..."
        ></textarea>
        <div className="text-xl">
          <input className="" type="checkbox" value="Other" name="tick" /> You
          agree to providing you data to John who may contact you.
        </div>
        <button
          id="btn__submit"
          className="bg-sky-700 w-full rounded h-10 text-white font-bold text-xl my-4"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
