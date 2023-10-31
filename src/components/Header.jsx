import React, { useState } from "react";
import Logo from "../assets/Images/logo.png";
import Avatar from "../assets/Images/avatar.png";
import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header() {

  const [toggel, setToggel] = useState(false)

  const menus = [
    { id: 1, name: "HOME", icon: HiHome },
    { id: 2, name: "SEARCH", icon: HiMagnifyingGlass },
    { id: 3, name: "WHTCH LIST", icon: HiPlus },
    { id: 4, name: "ORGINALS", icon: HiStar },
    { id: 5, name: "MOVIES", icon: HiPlayCircle },
    { id: 6, name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center gap-6">
        <img src={Logo} className="w-[70px] md:w-[90px] object-cover" />
        <div className="hidden md:flex gap-6">
          {menus.map((item) => (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-6">
          {menus.map((item, index) => index < 3 && (
            <HeaderItem key={item.id} name={''} Icon={item.icon} />
          ))}
          <div className="md:hidden relative" onClick={() => setToggel(prevToggel => !prevToggel)}>
             <HeaderItem name={''} Icon={HiDotsVertical}/>
            {
            toggel &&
             <div className="absolute mt-4 bg-[#12121259]
               border border-gray-700 px-5 py-4 z-10">
               {menus.map((item, index) => index > 2 && (
                  <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
               ))}
            </div>
            }

          </div>
        </div>
      </div>
      <img src={Avatar} className="w-8 lg:w-10 cursor-pointer" />
    </div>
  );
}

export default Header;
