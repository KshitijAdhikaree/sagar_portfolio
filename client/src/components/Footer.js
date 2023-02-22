import React from "react";

function Footer() {
  return (
    <div className="py-10 bg-primary">
      <div className="h-[1px] w-full bg-secondary opacity-50"></div>

      <div className="flex items-center justify-center flex-col mt-10  opacity-80 ">
        <h1 className="text-white">Designed and Developed By:</h1>
        <h className="text-white ">
          <span className="text-white">Sagar Adhikari</span>
        </h>
      </div>
    </div>
  );
}

export default Footer;
