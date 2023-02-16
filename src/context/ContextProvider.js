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
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    // const [currentMode, setCurrentMode] = useState('Dark')
    const [currentMode, setCurrentMode] = useState('Light')
    const [screenSize, setScreenSize] = useState(undefined)
    const [themeSetting, setThemeSetting] = useState(false)
    const handleClick=(val)=>{
      setIsClicked({...initialState,[val]:true})
    }


  return (
    <StateContext.Provider value={{ activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize, setScreenSize,currentColor, setCurrentColor,currentMode, setCurrentMode,themeSetting, setThemeSetting }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = ()=> useContext(StateContext)