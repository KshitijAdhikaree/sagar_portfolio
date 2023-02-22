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
          
          <div className="flex flex-col px-16 py-16 w-3/4 sm:px-3 sm:py-2 sm:mt-4   ">
            <h1 className=" text-7xl sm:text-3xl text-secondary font-semibold">Sagar Adhikari </h1>

            <div className=" text-white text-justify mt-10 text-xl sm:text-base sm:px-3 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                pariatur officiis sed praesentium error esse consequuntur
                accusamus quidem ipsa distinctio facere vero incidunt,
                temporibus voluptatibus quae dicta. Rerum, dolorem assumenda?
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
            <a href="">
              <i></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
