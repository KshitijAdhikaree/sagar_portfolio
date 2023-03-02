import React, { useState, useRef } from "react";
import pdfFiles from "../../components/pdfFiles";

const Publications = () => {
  return (
    <div className="flex bg-gray-700 justify-center items-center h-screen">
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold text-secondary text-center py-20 sm:py-4 sm:text-3xl">
          Publications
        </h1>

        <div className="flex flex-col px-40 gap-10 sm:flex-row sm:place-items-baseline sm:text-xs sm:px-8 sm:gap-8">
          {pdfFiles.map((pdfFile, index) => (
            <div key={index} className="flex flex-row items-center gap-6">
              <div className="w-1/3">
                <h2 className="text-xl font-bold text-secondary sm:text-base">
                  {pdfFile.name}
                </h2>
              </div>

              <div className="w-1/3">
                <p className="text-white">{pdfFile.description}</p>
              </div>
              <div className="w-1/3 text-right cursor-text">
                <a href={pdfFile.link}>Link</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
