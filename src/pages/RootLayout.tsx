import React from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { FiSettings } from "react-icons/fi";
import TooltipComponent from "../components/costum-elements/TooltipComponent";
import { templateActions } from "../store/template-slice";

const RootLayout = () => {
  const { currentMode, currentColor } = useAppSelector(
    (state) => state.template
  );

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
        
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
