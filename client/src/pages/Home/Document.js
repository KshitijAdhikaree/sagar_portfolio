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
          <div className="flex px-10 py-10 flex-center">
          <h1 className="text-secondary text-3xl ">Documents</h1>
          </div>
          <div className="grid grid-cols-4 gap-8 px-16 ">
            
      {pdfFiles.map((pdfFile, index) => (
        <div key={index} className="p-8">
          
            <img
              src="https://img.icons8.com/officel/256/pdf.png"
              alt="PDF File Icon"
              className="h-12 w-12 mb-4"
            />
            <h2 className="text-xl font-bold text-secondary">{pdfFile.name}</h2>
          
          <p className="text-white">{pdfFile.description}</p>
          <a
            href={pdfFile.link}
            download
            className="bg-white hover:bg-secondary text-black hover:text-primary font-bold py-2 px-4 rounded"
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
