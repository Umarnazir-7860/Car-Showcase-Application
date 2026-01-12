import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturerProps {
  manufacturer: string | null;
  setManufacturer: (value: string | null) => void;
  // setManufacturer:React.Dispatch<React.SetStateAction<string>>;
}
