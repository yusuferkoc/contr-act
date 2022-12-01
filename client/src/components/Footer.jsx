import React from "react";

import logo from "../assets/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-64" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Buy</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Education</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">My Transactions</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">My Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Join us</p>
      <p className="text-white text-sm text-center font-medium mt-2">https://github.com/yusuferkoc</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@yusuf</p>
    </div>
  </div>
);

export default Footer;
