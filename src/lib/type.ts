import { _DeepPartialObject } from "chart.js/dist/types/utils";
import { IconType } from "react-icons/lib";

export type EarningDataItem = {
  icon: IconType;
  amount: string;
  percentage: string;
  title: string;
  iconColor: string;
  iconBg: string;
  pcColor: string;
};

export type ChartElementsPosition =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "center"
  | "chartArea"
  | _DeepPartialObject<{ [scaleId: string]: number }>
  | undefined;
