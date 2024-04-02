import React, { useState } from "react";
import { HiMiniBars4 } from "react-icons/hi2";
import "./Navigation.css";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GoOrganization } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { Navigate, useNavigate, NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const [isTrue, setisTrue] = useState(true);
  const nav = useNavigate();
  const [activeName, setactiveName] = useState("");
  const location = useLocation();

  const hideSideBars = () => {
    setisTrue(!isTrue);
  };
  let sideOptions = [
    {
      icons: <GoHome />,
      name: "Home",
      link: "/",
    },
    {
      icons: <GoOrganization />,
      name: "Organization",
      link: "/organization",
    },
    {
      icons: <FiBox />,
      name: "Assets",
      link: "/assets",
    },
    {
      icons: <LuArrowDownUp />,
      name: "Trade",
      link: '/trade'
    },
    {
      icons: <MdOutlineHourglassEmpty />,
      name: "History",
      link: '/history'
    },
    {
      icons: <IoWalletOutline />,
      name: "Wallet",
      link: "/wallet",
    },
  ];
  let settingIcons = [
    {
      icons: <IoIosNotificationsOutline />,
      name: "Notifications",
    },
    {
      icons: <MdOutlineContactSupport />,
      name: "Support",
    },
    {
      icons: <CiSettings />,
      name: "Settings",
    },
  ];

  const higlighted = list => {
    nav(list.link);
    setactiveName(list.name)
  };

  return (
    <aside className={isTrue ? "sidebarContainer" : "containerHide"}>
      <div className='logoContainer'>
        <img
          src='https://carboncell.io/assets/img/logo2.png'
          alt='logo'
          className={isTrue ? "" : "hide"}
        />
        <button className='menubtn'>
          <HiMiniBars4 onClick={hideSideBars} />
        </button>
      </div>
      <div className={isTrue ? "sidebarsearch" : "hide"}>
        <FaSearch />
        <input type='text' placeholder='Search' />
      </div>
      <div className={isTrue ? "navbarOptions" : "hide"}>
        <ul>
          {sideOptions.map(list => (
            <li >
              <NavLink exact to={list.link} className={window.location.pathname === list.link ? 'green' : 'navbarList'}>
                {list.icons}
            {list.name}
          </NavLink>
            </li>
          ))}
        </ul>

        <ul className='settingOption'>
          {settingIcons.map(list => (
            <li className='navbarList'>
              {list.icons}
              {list.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={isTrue ? "profileSection" : "hide"}>
        <div className='profileImg'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2919/2919906.png'
            alt='profile'
          />
        </div>
        <div className='profileName'>
          <p style={{ fontWeight: "bold" }}>Brooklyn Simmons</p>
          <p style={{ color: "#929791" }}>brooklyn@simmons.com</p>
        </div>
        <SlOptionsVertical style={{ color: "#929791" }} />
      </div>
    </aside>
  );
};

export default NavigationBar;
