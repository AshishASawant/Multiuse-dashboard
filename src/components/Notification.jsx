import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { chatData } from "../data/dummy";

const Notification = () => {
  const { handleClick, currentColor } = useStateContext();
  return (
    <div className="absolute top-16 sm:right-[10rem] right-5 bg-white dark:bg-[#42464D] dark:text-slate-200 rounded-lg sm:w-96  nav-item sm:p-8 p-4  ">
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-lg">Notification</p>
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
      {chatData?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
        >
          <div className="relative">
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <span
              style={{ background: item.dotColor }}
              className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
            />
          </div>
          <div>
            <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
      <button
        className="mt-5 w-full p-3 rounded-xl text-gray-100 "
        style={{ backgroundColor: currentColor }}
      >
        See all notification
      </button>
    </div>
  );
};

export default Notification;
