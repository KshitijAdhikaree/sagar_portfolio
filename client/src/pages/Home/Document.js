import React, { useState, useRef } from "react";
import bg_image from "../pics/homepaper.jpg";
import pdfFiles from "../../components/pdfFiles";

const Home = () => {
  return (
    <div>
      <div className="flex w-full items-center sm:flex-col">
        <div
          className="h-screen w-screen bg-cover bg-center "
          style={{ backgroundImage: `url(${bg_image})` }}
        >
          <h1 className="text-4xl font-bold text-secondary text-center py-20 sm:py-4 sm:text-3xl">
            Documents
          </h1>

          <div className=" grid grid-cols-4 px-40 gap-20 sm:flex-row sm:place-items-baseline sm:text-xs sm:px-8 sm:gap-8">
            {pdfFiles.map((pdfFile, index) => (
              <div key={index} className="">
                <img
                  src="https://img.icons8.com/officel/256/pdf.png"
                  alt="PDF File Icon"
                  className="h-12 w-12 mb-4 sm:h-6 sm:w-6 sm:mb-2"
                />
                <h2 className="text-xl font-bold text-secondary sm:text-base">
                  {pdfFile.name}
                </h2>

                <p className="text-white">{pdfFile.description}</p>
                <a
                  href={pdfFile.link}
                  download
                  className="bg-white hover:bg-secondary hover:text-white text-black  font-bold py-2 px-4 rounded"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
