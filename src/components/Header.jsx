import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoLockClosedOutline } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.avif';

const Header = ({ onMenuToggle }) => {
  return (
    <nav className=" sticky top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="main-div flex items-center justify-between p-5">
        <div className="left flex items-center gap-5">
          <button onClick={onMenuToggle}>
            <GiHamburgerMenu size={30} />
          </button>
          <div className="img">
            <img src={logo} className="mx-auto md:mx-0" alt="" />
          </div>
        </div>
        <div className="right flex gap-2">
          <CiSearch size={30} className="hidden md:block" />
          <RiAdminFill size={30} />
          <IoLockClosedOutline size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
