import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSetting } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  let {activeMenu,themeSetting,setThemeSetting,currentColor,currentMode}=useStateContext()

  //In the code below if the currentMode is set to Dark then if enters the if condition and adds a link inside the div.When the currentMode changes the link unmounts using the return statement
  // useEffect(() => {
  //   if(currentMode==="Dark"){
  //     const link = document.createElement("link");
  //     link.rel = "stylesheet";
  //     link.href = "./material-dark.min.css";
  //     linkRef?.current?.parentNode?.appendChild(link);
  //     console.log(linkRef)
  //     console.log(linkRef?.current)
  //     console.log(linkRef?.current?.parentNode)
  //     return () => {
  //       linkRef?.current?.parentNode?.removeChild(link);
  //     };
  //   }
    
  //   // return () => {};
  // }, [currentMode])

  
  useEffect(() => {
    const link = document.querySelector("#theme");
    if (currentMode === 'Dark') {
      link.href = "./material-dark.css";
    } else {
      link.href = "";
    }
       // eslint-disable-next-line
  }, [currentMode]);
  
  
  return (
    <div className={currentMode==="Dark"?"dark":""}>
      <link rel="stylesheet" href="style.css" id="theme"/>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "10" }}>
            <TooltipComponent content="Setting" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white "
                style={{ backgroundColor: currentColor, borderRadius: "50%" }}
                onClick={()=>{setThemeSetting(true)}}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-10">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"></div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
            <div>

              {themeSetting && <ThemeSetting/>}

              <Routes>
                {/* Dashboard */}
                <Route exact path="/" element={<Ecommerce/>}></Route>
                <Route exact path="/ecommerce" element={<Ecommerce/>}></Route>

                {/* Pages */}
                <Route path="/orders" element={<Orders/>}></Route>
                <Route path="/employees" element={<Employees/>}></Route>
                <Route path="/customers" element={<Customers/>}></Route>

                {/* Apps */}
                <Route path="/kanban" element={<Kanban/>}></Route>
                <Route path="/editor" element={<Editor/>}></Route>
                <Route path="/calendar" element={<Calendar/>}></Route>
                <Route path="/color-picker" element={<ColorPicker/>}></Route>

                {/* Charts */}
                <Route path="/line" element={<Line/>}></Route>
                <Route path="/area" element={<Area/>}></Route>
                <Route path="/bar" element={<Bar/>}></Route>
                <Route path="/pie" element={<Pie/>}></Route>
                <Route path="/financial" element={<Financial/>}></Route>
                <Route path="/color-mapping" element={<ColorMapping/>}></Route>
                <Route path="/pyramid" element={<Pyramid/>}></Route>
                <Route path="/stacked" element={<Stacked/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
