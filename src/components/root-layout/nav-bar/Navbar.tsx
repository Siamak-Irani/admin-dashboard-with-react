import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import TooltipComponent from "../../costum-elements/TooltipComponent";

import avatar from "../../../data/avatar.jpg"

import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import { IconType } from "react-icons/lib";
import { useAppDispatch, useAppSelector } from "../../../store";
import { uiActions } from "../../../store/ui-slice";
import { clickActions } from "../../../store/click-slice";

type NavButtonProps = {
  title: string;
  customFunc: () => {};
  icon: JSX.Element;
  color: string;
  dotColor?: string;
};

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}: NavButtonProps) => (
  <TooltipComponent content={title} place="bottom">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor } = useAppSelector((state) => state.template);
  const { activeMenu, screenSize } = useAppSelector((state) => state.ui);
  const { isClicked } = useAppSelector((state) => state.click);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const x = window.innerWidth;
    const handleResize = () =>
      dispatch(uiActions.setScreenSize(window.innerWidth));

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize && screenSize <= 900) {
      dispatch(uiActions.setActiveMenu(false));
    } else {
      dispatch(uiActions.setActiveMenu(true));
    }
  }, [screenSize]);

  const handleActiveMenu = () => dispatch(uiActions.toggleActiveMenu());

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => dispatch(clickActions.handleClick("cart"))}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => dispatch(clickActions.handleClick("chat"))}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => dispatch(clickActions.handleClick("notification"))}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" place="bottom">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => dispatch(clickActions.handleClick("userProfile"))}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
