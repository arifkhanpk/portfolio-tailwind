import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I am <span className="text-[#033ad0]">Muhammad Arif Khan</span> 
          <br /> <br />
        </h1>
        <p className="text-3xl font-semibold">WEB Developer</p>       
      </div>

      {/* Welcome Message */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Welcome to My Portfolio</h2>
        <p className="text-lg mt-2">
          I specialize in creating responsive and dynamic web applications using
          the Web Development. Explore my skills and projects below!
        </p>
      </div>

      {/* Skills Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">What I Do</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-lg">
          <li>Web Development</li>
          <li>Responsive Web Design</li>         
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-2">Let's Work Together!</h2>
        <Link
          href="/contact"
          className=" text-[#033ad0] hover:text-[#033ad0] underline transition"
        >
          Get in touch!
        </Link>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Connect with Me</h2>
        <p className="text-lg mt-2">
          Follow me on:         
          <a
            href="https://github.com/arifkhanpk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#033ad0] text-[#033ad0] underline ml-1 transition"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
