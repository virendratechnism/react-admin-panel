import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser, FaPeace, FaTasks } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import logo from '../image/logo.png';

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/sweetAlert",
    name: "SweetAlert",
    icon: <FaUser />,
  },  {
    path: "/sortTable",
    name: "Table",
    icon: <AiFillHeart />,
  },
  {
    path: "/about",
    name: "About",
    icon: <MdMessage />,
  },
  {
    path: "/chartView",
    name: "ChartView",
    icon: <BiAnalyse />,
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: <FaTasks />
  },
  {
    path: "/profile",
    name: "Profile ",
    icon: <FaUser />,
  },
  {
    path: "/2fa",
    name: "2FA",
    icon: <FaLock />,
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <FaMoneyBill />,
  },  
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },  
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile1",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa1",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing1",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },  
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile2",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa2",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing2",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "140px",
      transition: {
        duration: 0.5,
      },
    },
  };
  
  useEffect(() => {
    window
    .matchMedia("(max-width: 1000px)")
    .addEventListener('change', e => setIsOpen( false ));
    
  }, []);

  return (
    <>
      <aside>
        <div className="main-container ">
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",
              transition: {
                duration: 0.5,
                type: "",// type of animation = ex: spring
                damping: 10,
              },
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    <img src={logo} className='logo_image'/>
                    Tax Patra
                  </motion.h1>
                )}
              </AnimatePresence>
              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
            </div>
            {/* <div className="search">
              <div className="search_icon">
                <BiSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                    type="text"
                    placeholder="Search"
                    color="dark"
                  />
                )}
              </AnimatePresence>
            </div> */}
            <section className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                      // activeClassName="active"
                    />
                  );
                }
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    // activeClassName="active"
                  >
                    <div className="" >{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
          <main>{children}</main>
        </div>
      </aside>
    </>
  );
};

export default SideBar;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// import { NavLink } from 'react-router-dom';

// const routes = [
//     {
//         oath: '/',
//         name: 'Home',
//         icon: <FaHome />
//     }
// ]

// const SideBar = ({children}) => {
//   const [Open, setOpen] = useState(true);
//   const toggle = () => {
//     setOpen(!Open);
//   }
//     return (
//         <>
//           <div className='sidebar' style={{width:((Open)?'240px':'40px')}}>
//             <div className='logo_content'>
//               <div className='logo'>
//                 <FaPeace className="logo_icon"/>
//                 <div className='logo_name'>logoHeading</div>
//               </div>
//               <FaTasks id='btn' onClick={toggle}/>
//             </div>
//             <ui className='nav_list'>
//               <li>
//                 {/* <a href='/'>
//                   <FaHome className="icon"/>
//                   <span className='links_name'>Dashboard</span>
//                 </a> */}
//                 <NavLink to='/'>
//                   <FaHome className="icon"/>
//                   <span className='links_name'>Dashboard</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//               <li>
//                 {/* <a href='/user'>
//                 <FaBars className="icon"/>
//                   <span className='links_name'>Dashboard1</span>
//                 </a> */}
//                 <NavLink to='/user'>
//                   <FaBars className="icon"/>
//                   <span className='links_name'>Dashboard1</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//               <li>
//                 <NavLink to='/about'>
//                   <FaLock className="icon"/>
//                   <span className='links_name'>Dashboard2</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//               <li>
//                 <NavLink to='/contact'>
//                   <FaMoneyBill className="icon"/>
//                   <span className='links_name'>Dashboard3</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//               <li>
//                 <NavLink to='/blog'>
//                   <MdMessage className="icon"/>
//                   <span className='links_name'>Dashboard4</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//               <li>
//                 <NavLink to='#'>
//                   <BiCog className="icon"/>
//                   <span className='links_name'>Dashboard5</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//               <li>
//                 <NavLink to='#'>
//                   <BsCartCheck className="icon"/>
//                   <span className='links_name'>Dashboard6</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//               <li>
//                 <NavLink to='#'>
//                   <FaUser className="icon"/>
//                   <span className='links_name'>Dashboard7</span>
//                 </NavLink>
//                 {/* <span className='tooltip'>Dashboard</span> */}
//               </li>
//             </ui>
//             <div className='profile_content'>
//               <div className='profile'>
//                 <div className='profile_details'>
//                   {/* <img src='profile.png' alt=''/> */}
//                   <img src="https://picsum.photos/200"/>
//                   <div className='name_job'>
//                     <div className='name'>VeerKatariya</div>
//                     <div className='job'>Admin</div>
//                   </div>
//                 </div>
//                 <FaUser id="logout"/>
//               </div>
//             </div>
//             {children}
//           </div>

//         </>
//     );
// }

// export default SideBar;
