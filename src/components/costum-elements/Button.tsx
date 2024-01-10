import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { click } from "@testing-library/user-event/dist/click";
import { clickActions } from "../../store/click-slice";

type ButtonProps = {
  icon?: ReactElement<"svg">;
  bgColor?: string;
  color?: string;
  bgHoverColor?: string;
  size?: string;
  text?: string;
  borderRadius?: string;
  width?: string;
};

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}: ButtonProps) => {
  const isClickedState = useAppSelector((state) => state.click.isClicked);
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(clickActions.setToInitialState())}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
