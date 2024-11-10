import React from "react";
import {
  FaPaperPlane,
  // FaHeart,
    FaGithub,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="contact-left flex-1 lg:mr-8">
            <h1 className="sub-title text-3xl font-bold mb-4">Contact Me</h1>
            <p className="mt-8 text-lg">
              <FaPaperPlane className="bg-[#033ad0] text-white inline mr-4 text-2xl" />
              muhammadarifkhan4u@gmail.com
            </p>
            <div className="social-icons mt-8 flex">                         
              <Link href="https://github.com/arifkhanpk" aria-label="GitHub">
                <FaGithub className="text-gray-400 text-3xl mr-5 transition-transform transform hover:text-[#C6F67E] hover:translate-y-[-5px]" />
              </Link>
            </div>
            <Link
              href="/Images/Arif-CV.pdf"
              download
              className="btn btn2 mt-6 inline-block bg-[#033ad0] text-white py-2 px-4 rounded-lg hover:bg-[#fbf9f917] transition"
            >
              Download CV
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <form name="submit-to-google-sheet" className="mt-4">
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
                className="w-full border-0 outline-none bg-[#262626] text-white p-4 mb-4 rounded-lg"
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter Your Email"
                required
                className="w-full border-0 outline-none bg-[#262626] text-white p-4 mb-4 rounded-lg"
              />
              <textarea
                name="Message"
                rows={6}
                placeholder="Your Message"
                className="w-full border-0 outline-none bg-[#262626] text-white p-4 mb-4 rounded-lg"
              />
              <button
                type="submit"
                className="btn btn2 bg-[#033ad0] text-white py-2 px-6 rounded-lg hover:bg-[#A6D94D] transition"
              >
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>

      {/* <div className="copyright text-center py-4 bg-[#262626] mt-8">
                <p className="text-gray-400 flex items-center justify-center">
                    Copyright © Sabeh Shaikh <FaHeart className="text-[#C6F67E] ml-2" />
                </p>
            </div> */}
    </div>
  );
}
