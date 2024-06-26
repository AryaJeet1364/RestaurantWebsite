// import React from "react";
// import { motion } from "framer-motion";
// import { navData } from "../data";

// const Nav = () => {
//   return (
//     <nav className="w-full h-full ">
//       <ul className="h-full flex flex-col justify-center items-center gap-y-4">
//         {navData.map((item, index) => {
//           return (
//             <li key={index}>
//               <a className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300 "href={item.href}>{item.name}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Nav;


import React from "react";
import { Link } from "react-scroll";
import { navData } from "../data";

const Nav = () => {
  return (
    <nav className="w-full h-full ">
      <ul className="h-full flex flex-col justify-center items-center gap-y-4">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

