import React from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { FiSettings } from "react-icons/fi";
import TooltipComponent from "../components/costum-elements/TooltipComponent";
import { templateActions } from "../store/template-slice";
import Sidebar from "../components/root-layout/Sidebar";
import Navbar from "../components/root-layout/nav-bar/Navbar";

const RootLayout = () => {
  const { currentMode, currentColor } = useAppSelector(
    (state) => state.template
  );

  const { activeMenu } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" place="top">
            <button
              type="button"
              onClick={() => dispatch(templateActions.setThemeSettings(true))}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
