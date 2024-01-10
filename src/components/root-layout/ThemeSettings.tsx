import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import TooltipComponent from "../costum-elements/TooltipComponent";

import { themeColors } from "../../data/dummy";
import { useAppDispatch, useAppSelector } from "../../store";
import { templateActions } from "../../store/template-slice";

const ThemeSettings = () => {
  const { currentColor, currentMode } = useAppSelector(
    (state) => state.template
  );

  const dispatch = useAppDispatch();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => dispatch(templateActions.setThemeSettings(false))}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={(e) => {
                dispatch(templateActions.setMode(e));
              }}
              checked={currentMode === "Light"}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={(e) => {
                dispatch(templateActions.setMode(e));
              }}
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} place="top">
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() =>
                      dispatch(templateActions.setColor(item.color))
                    }
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
