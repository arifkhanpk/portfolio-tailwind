"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="about-col-1 md:w-1/2 mb-8 md:mb-0 md:mr-8 flex justify-center">
        <Image
          src="/images/arif-image.jpg"
          alt="My Picture"
          width={345}
          height={345}
          className="rounded-full object-cover w-3/4 sm:w-1/2 md:w-1/3"
        />
      </div>

      <div className="about-col-2 md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-8 max-w-2xl mx-auto md:mx-0">
          I'm a dedicated Web Developer, driven by the passion to create
          user-centric and visually captivating websites. My core skills include
          HTML, CSS, and JavaScript, with a strong focus on enhancing user
          experiences. Currently, I'm mastering React JS for dynamic and
          interactive interfaces. I'm also actively expanding my expertise in
          full-stack development, exploring Node.js to build efficient web
          applications. In addition to my development pursuits, I'm currently
          delving into Generative AI and TypeScript to broaden my skill set and
          stay ahead in the ever-evolving tech landscape.
        </p>

        <div className="tab-titles flex space-x-8 relative justify-center md:justify-start">
          <p
            className={`tab-links relative cursor-pointer transition duration-500 ${
              activeTab === "skills" ? "active-link text-[#033ad0]" : ""
            }`}
            onClick={() => opentab("skills")}
          >
            Skills
          </p>

          <p
            className={`tab-links relative cursor-pointer transition duration-500 ${
              activeTab === "experience" ? "active-link text-[#033ad0]" : ""
            }`}
            onClick={() => opentab("experience")}
          >
            Experience
          </p>
          <p
            className={`tab-links relative cursor-pointer transition duration-500 ${
              activeTab === "education" ? "active-link text-[#033ad0]" : ""
            }`}
            onClick={() => opentab("education")}
          >
            Education
          </p>
        </div>

        <div className="tab-contents">
          {activeTab === "skills" && (
            <div id="skills" className="active-tab">
              <ul className="list-none pl-8 mt-6">
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">UI/UX</span>
                  <br /> Designing Web/App interfaces
                </li>
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">
                    Front-End Development
                  </span>
                  <br /> Web/App Development
                </li>
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">
                    Responsive Web Design
                  </span>
                  <br /> Creating mobile-friendly websites
                </li>
              </ul>
            </div>
          )}

          {activeTab === "experience" && (
            <div id="experience" className="active-tab">
              <ul className="list-none pl-8 mt-6">
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">
                    Office Assistant
                  </span>
                  <br /> National Institute of Oceanography
                  <span className="text-[#033ad0]">
                    {" "}
                    (March 2004 - Till Now)
                  </span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">
                    Office Assistant Cum Computer Operator
                  </span>
                  <br /> Softech Microsystem
                  <span className="text-[#033ad0]">
                    {" "}
                    (March 2002 - March 2004)
                  </span>
                </li>               
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div id="education" className="active-tab">
              <ul className="list-none pl-8 mt-6">
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">
                    University of Karachi
                  </span>
                  <br /> Master of Administrative Science (MAS)
                  <span className="text-[#033ad0]"> (2010)</span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">
                    Governor Sindh Initiative For AI, WEB 3.0 & Metaverse
                  </span>
                  <br /> Generative AI Engineer
                  <span className="text-[#033ad0]">(2024 - Present)</span>
                </li>
                <li className="mb-4">
                  <span className="font-bold text-[#033ad0]">
                    Saylani Mass IT Training
                  </span>
                  <br />  Web Development
                  <span className="text-[#033ad0]">(2023 - 2024)</span>
                </li>               
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
