// import React from "react";

// function Header() {
//   return (
//     <div className="p-5 bg-primary flex justify-between header">
//       <h1 className="text-secondary text-5xl font-semibold">K</h1>
//       <h1 className="text-khaki secondary text-5xl font-semibold">Portfolio</h1>
//       <h1 className="text-tertiary text-5xl font-semibold">A</h1>
//     </div>
//   );
// }

// export default Header;

// import React from "react";
// import { useHistory } from "react-router-dom";

// const Header = () => {
//   const history = useHistory();

//   const handleLogoClick = () => {
//     history.push("/");
//   };

//   return (
//     <header className="bg-gray-900 py-3">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <img
//             src="/client/public/logo.png"
//             alt="Logo"
//             className="h-10 cursor-pointer"
//             onClick={handleLogoClick}
//           />
//           <h1 className="text-white text-xl ml-3">S.A</h1>
//         </div>
//         <nav className="flex">
//           <a className="text-white text-sm mr-5" href="#">
//             Home
//           </a>
//           <a className="text-white text-sm mr-5" href="#">
//             About
//           </a>
//           <a className="text-white text-sm mr-5" href="#">
//             Documents
//           </a>
//           <a className="text-white text-sm mr-5" href="#">
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <nav className="bg-primary p-4 flex items-center justify-between">
      <a href="/home" className=" text-white px-2 ">
      <img src="logo.png" alt="Company Logo" className="h-12" />
      </a>
      <div className="flex">
        <a href="/home" className=" text-white px-4 font-medium hover:text-secondary">
          Home
        </a>
        <a href="/about" className="text-white px-4 font-medium hover:text-secondary">
          About
        </a>
        <a href="/documents" className="text-white px-4 font-medium hover:text-secondary">
          Documents
        </a>
        <a href="/contact" className="text-white px-4 font-medium hover:text-secondary">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
