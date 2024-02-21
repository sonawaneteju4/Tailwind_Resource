import React, { useContext } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { TbWorldQuestion } from "react-icons/tb";
import AppContext from "../../context/AppContext";

const ContactUs = () => {
  const { setContactUs, contactUs, postConactus } = useContext(AppContext);

  const handleChange = (e) => {
    setContactUs({ ...contactUs, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-gradient-to-r from-gray-600/80 to-blue-600/60 pb-5">
      <div className="flex justify-center items-center pt-10 pb-5 border-b">
        <div className="basis-1/4 flex flex-col text-center">
          <div className="flex justify-center">
            <MdOutlineLocationOn className="border-2 text-white border-white  bg-sky-600/80 rounded-full text-4xl p-2" />
          </div>
          <div className="font-semibold poppins-medium  cursor-pointer text-white mt-2">
            A1, ABC business zone, <br />
            Pune, In 411044
          </div>
        </div>
        <div className="basis-1/4 flex flex-col text-center">
          <div className="flex justify-center">
            <MdAlternateEmail className="border-2 text-white border-white bg-sky-600/80 rounded-full text-4xl p-2" />
          </div>
          <div className="font-semibold poppins-medium  cursor-pointer text-white mt-2">
            help@domain.com
          </div>
        </div>
        <div className="basis-1/4 flex flex-col text-center">
          <div className="flex justify-center">
            <FiPhone className="border-2 text-white border-white bg-sky-600/80 rounded-full text-4xl p-2" />
          </div>
          <div className="font-semibold poppins-medium  cursor-pointer text-white mt-2">
            8899441122
          </div>
        </div>
        <div className="basis-1/4 flex flex-col text-center">
          <div className="flex justify-center">
            <TbWorldQuestion className="border-2 text-white border-white bg-sky-600/80 rounded-full text-4xl p-2" />
          </div>
          <div className="font-semibold poppins-medium  cursor-pointer text-white mt-2">
            www.mydomain.co.in/help
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-3 bg-white/30 mx-96 mt-5 backdrop-blur-sm rounded-xl poppins-semibold">
        <div
          style={{ fontFamily: "Open Sans" }}
          className="font-semibold text-3xl text-center border-b mx-32 "
        >
          Contact Us
        </div>
        <form
          onSubmit={postConactus}
          className="flex justify-center items-center"
        >
          <div className="flex flex-col ">
            <div>
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white mt-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={contactUs.email}
                onChange={handleChange}
                id="input-label"
                className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="you@site.com"
              />
            </div>
            <div>
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white mt-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={contactUs.name}
                onChange={handleChange}
                id="input-label"
                className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white mt-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="input-label"
                name="subject"
                value={contactUs.subject}
                onChange={handleChange}
                className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white mt-1"
              >
                Message
              </label>
              <textarea
                name="message"
                value={contactUs.message}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                rows="3"
                placeholder="This is a textarea placeholder"
              ></textarea>
            </div>
            <div className="flex justify-center m-5">
              <button className="bg-white lg:px-5 px-6 lg:text-base text-xs rounded-full poppins-medium py-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
