import React from "react";
import { Tooltip } from "react-tooltip";
import { v4 as uuidv4 } from "uuid";

type TooltipProps = React.ComponentProps<typeof Tooltip>;

interface TooltipComponentProps extends TooltipProps {
  children: React.ReactNode;
}

const TooltipComponent = ({ children, ...rest }: TooltipComponentProps) => {
  const id = uuidv4();

  return (
    <>
      <div data-tooltip-id={id}>{children}</div>
      <Tooltip id={id} {...rest} />
    </>
  );
};

export default TooltipComponent;
