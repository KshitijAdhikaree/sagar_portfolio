import React from "react";

function Logos() {
  return (
    <div className=" bottom-6 left-1/2 bg-black px-96 py-4 sm:x-1/2 ">
      <div className="flex flex-row items-center sm:items-center ">
        <div className="flex flex-col px-40 bg-tertiary "></div>
        <div className="flex gap-4 text-xl px-48 sm:flex  ">
          

          <a href="https://www.linkedin.com/in/sagar-adhikari-43771a1ab">
            <i class="ri-linkedin-fill text-gray-400 hover:text-secondary"></i>
          </a>

          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sagaradhikari@gmail.com">
            <i class="ri-mail-send-fill text-gray-400 hover:text-secondary"></i>
          </a>

          <a href="https://www.facebook.com/adhikarisagar">
            <i class="ri-facebook-fill text-gray-400 hover:text-secondary"></i>
          </a>

          <a href="https://www.instagram.com/sagar_adhikari">
            <i class="ri-instagram-fill text-gray-400 hover:text-secondary"></i>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Logos;
