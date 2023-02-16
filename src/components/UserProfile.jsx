import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import avatar from '../data/avatar.jpg';
import { userProfileData } from "../data/dummy";


const UserProfile = () => {
  const { handleClick, currentColor } = useStateContext();
  return (
    <div className="absolute top-16 sm:right-16 right-5 bg-white dark:bg-[#42464D] dark:text-slate-200 rounded-lg sm:w-96  nav-item sm:p-8 p-4  ">
      <div className="flex justify-between items-center mb-5">
        <p className="font-semibold text-lg">User Profile</p>
        <button
          type="button"
          onClick={() => {
            handleClick("");
          }}
          style={{ color: "rgb:(153,171,180" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full  dark:hover:bg-slate-700"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex items-center justify-between gap-2 border-color border-b-1 pb-4">
          <img src={avatar} alt="User" className="sm:w-24 w-16 rounded-full"/>
          <div className="">
              <p className="text-xl font-semibold">Ashish Sawant</p>
              <p className="text-sm text-slate-400">Developer</p>
              <p className="text-sm text-slate-400 font-semibold">ashishsawant2050@gmail.com</p>
          </div>
      </div>
      {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#4d4f53]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      <button
        className="mt-5 w-full p-3 rounded-xl text-gray-100 "
        style={{ backgroundColor: currentColor }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserProfile;
