import React from "react";
import "./MultiSelectDropdown.css";
type OptionType = {
  key: string;
  title: string;
};

type MultiSelectDropdownPropsType = {
  options: OptionType[];
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownPropsType> = () => {
  return (
    <div>
      <div>Label: </div>
      <span className="dropdown-btn">DropDown Button</span>
      <div className="dropdown-menu">DropDown menu</div>
    </div>
  );
};

export default MultiSelectDropdown;
