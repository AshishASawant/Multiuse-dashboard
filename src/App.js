import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
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
  let {activeMenu}=useStateContext()
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Setting" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white "
                style={{ backgroundColor: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route exact path="/" element={<Ecommerce/>}></Route>
                <Route exact path="/ecommerce" element={<Ecommerce/>}></Route>

                {/* Pages */}
                <Route path="/orders" element="orders"></Route>
                <Route path="/employee" element="employee"></Route>
                <Route path="/customers" element="customers"></Route>

                {/* Apps */}
                <Route path="/kanban" element="kanban"></Route>
                <Route path="/editor" element="editor"></Route>
                <Route path="/calendar" element="calendar"></Route>
                <Route path="/color-picker" element="color-picker"></Route>

                {/* Charts */}
                <Route path="/line" element="color-picker"></Route>
                <Route path="/area" element="color-picker"></Route>
                <Route path="/bar" element="color-picker"></Route>
                <Route path="/pie" element="color-picker"></Route>
                <Route path="/financial" element="color-picker"></Route>
                <Route path="/color-mapping" element="color-picker"></Route>
                <Route path="/stacked" element="color-picker"></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
