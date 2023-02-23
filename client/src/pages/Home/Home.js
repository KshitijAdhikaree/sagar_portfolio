import React, { useState, useRef } from "react";
import bg_image from "../pics/homepaper.jpg";

const Home = () => {
  return (
    <div>
      <div className="flex w-full items-center sm:flex-col">
        <div
          className="h-screen w-screen bg-cover bg-center "
          style={{ backgroundImage: `url(${bg_image})` }}
        >
          <h1 className=" text-7xl px-40 py-5 mt-10 sm:text-4xl sm:mt-5 sm:px-6 text-secondary font-semibold">
            Sagar Adhikari
          </h1>

          <div className=" text-white w-7/8 px-40 text-justify text-xl sm:text-base sm:px-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              pariatur officiis sed praesentium error esse consequuntur
              accusamus quidem ipsa distinctio facere vero incidunt, temporibus
              voluptatibus quae dicta. Rerum, dolorem assumenda?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              perspiciatis aperiam id, placeat eum incidunt eos harum illum
              inventore. Debitis explicabo, cumque numquam qui exercitationem
              dicta repellendus voluptatem unde vero!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, dignissimos eius consequuntur ipsa maxime
              reprehenderit laudantium. Placeat nam ratione alias maiores quod
              consequatur. Qui reiciendis nemo voluptas, minima debitis nihil?
            </p>
          </div>
          <div className=" px-40 text-xl py-6 bg-">
            <a href="/contact">
              <button className="border-2 border-tertiary bg-transparent text-white px-8 py-3 rounded-xl hover:bg-secondary hover:text-black sm:px-4">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
