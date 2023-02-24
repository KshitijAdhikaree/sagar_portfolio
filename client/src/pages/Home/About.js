import React from "react";
import image from "../pics/homepaper.jpg";

function About() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-row px-40 py-20">
        <div className="flex flex-col">
          <img
            src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/188601978_4620907477924652_6266218967972445976_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=JFeayNS6rmoAX80KHNb&_nc_ht=scontent.fktm6-1.fna&oh=00_AfCcdi7KA0s-Sjz1csa3TUrb-GGJLDNI33lh31dtt134Rg&oe=6411BC83"
            alt="Your Image"
            className="w-[800px] rounded-full sm:w-[200px] sm:rounded-sm  "
          />
          <h3 className="text-4xl font-bold text-secondary text-center py-4 sm:text-lg sm:px-2 ">
            My Resume
          </h3>
          <a
            href="https://drive.google.com/file/d/1pT-Nk6AxY9ZOWBizuDb4htA3IiUF_fSe/view?usp=sharing"
            className="bg-white hover:bg-secondary text-center hover:text-black text-black font-bold py-2 px-10 rounded-full sm:text-xs sm:rounded-sm  "
          >
            Download Resume
          </a>
        </div>
        <div className="flex flex-col text-justify px-20">
          <h1 className="text-4xl font-bold text-secondary text-center sm:py-4 sm:text-3xl">
            About
          </h1>
          <p className="text-white text-xl text-justify sm:text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            veniam et ratione soluta reiciendis animi nesciunt omnis laborum
            odit obcaecati? Magnam, amet ducimus ullam minima dicta ipsam
            accusantium reiciendis! Cupiditate?
          </p>
          <p className="text-white text-xl text-justify sm:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            accusantium debitis labore omnis quasi ratione, officiis, molestiae
            ab repudiandae enim dignissimos quos nulla, qui cumque quibusdam hic
            deleniti dolor iure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
