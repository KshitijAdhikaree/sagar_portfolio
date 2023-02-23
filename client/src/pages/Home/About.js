import React from "react";
import image from "../pics/homepaper.jpg";

function About() {
  return (
    <div>
      <div className="flex w-full items-center sm:flex-col">
        <div
          className="h-screen w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flex flex-col items-center mt-10">
            <div className="flex px-40 py-10">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-secondary text-center">
                  About Me
                </h2>
                <div className="flex flex-row gap-6 sm:flex-col">
                <img
                  src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/188601978_4620907477924652_6266218967972445976_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=JFeayNS6rmoAX80KHNb&_nc_ht=scontent.fktm6-1.fna&oh=00_AfCcdi7KA0s-Sjz1csa3TUrb-GGJLDNI33lh31dtt134Rg&oe=6411BC83"
                  alt="Your Image"
                  className="w-1/5 rounded-full sm:w-[200px] sm:rounded-sm  "
                />
                <div className="flex flex-col w-4/5 gap-4 px-12">
                <p className="text-white text-xl text-justify sm:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent scelerisque sem vel velit maximus, et tempor lacus
                  congue. Aliquam auctor facilisis quam, in consectetur nisi
                  pharetra in. Sed eget dui velit.
                </p>
                <p className="text-white text-xl text-justify sm:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent scelerisque sem vel velit maximus, et tempor lacus
                  congue. Aliquam auctor facilisis quam, in consectetur nisi
                  pharetra in. Sed eget dui velit.
                </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-44 gap-2 sm:flex-row sm:gap-4">
            <h3 className="text-4xl font-bold text-secondary text-left  sm:text-lg sm:px-2 ">
              My Resume
            </h3>
            <div className="">
              <a
                href="https://drive.google.com/file/d/1pT-Nk6AxY9ZOWBizuDb4htA3IiUF_fSe/view?usp=sharing"
                className="bg-white hover:bg-secondary hover:text-black text-black font-bold py-2 px-10 rounded-full sm:text-xs sm:rounded-sm  "
                
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
