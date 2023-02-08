import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  notification: false,
  useProfile: false,
};

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const handleClick=(val)=>{
      setIsClicked({...initialState,[val]:true})
    }
    const [screenSize, setScreenSize] = useState(undefined)

  return (
    <StateContext.Provider value={{ activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize, setScreenSize }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = ()=> useContext(StateContext)