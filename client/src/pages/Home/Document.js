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
          <h1 className="text-4xl font-bold text-secondary text-center py-20">
            Documents
          </h1>

          <div className=" grid grid-cols-4 gap-12 px-40  ">
            {pdfFiles.map((pdfFile, index) => (
              <div key={index} className="">
                <img
                  src="https://img.icons8.com/officel/256/pdf.png"
                  alt="PDF File Icon"
                  className="h-12 w-12 mb-4"
                />
                <h2 className="text-xl font-bold text-secondary">
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
