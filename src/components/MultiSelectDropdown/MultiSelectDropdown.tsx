import React, { useState } from "react";
import "./MultiSelectDropdown.css";
import { IoIosArrowDropdown } from "react-icons/io";
// IoIosArrowDropdown
type OptionType = {
  key: string;
  title: string;
};

type MultiSelectDropdownPropsType = {
  options: OptionType[];
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownPropsType> = ({ options }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropDownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const genOptions = () => {
    return options.map((option) => {
      return <DropDownOption option={option} key={option.key} />;
    });
  };

  return (
    <div className="wrapper-dropdown">
      <span>Label: </span>
      <span className="dropdown-btn" onClick={toggleDropDownMenu}>
        <span>DropDown Button</span>
        <span className={`${isMenuOpen ? "inverted" : ""}`}>
          <IoIosArrowDropdown />
        </span>
      </span>
      {isMenuOpen ? <div className="dropdown-menu">{genOptions()}</div> : null}
    </div>
  );
};

type DropDownOptionPropsType = {
  option: OptionType;
};

const DropDownOption: React.FC<DropDownOptionPropsType> = ({ option }) => {
  return (
    <div className="dropdown-option-wrapper">
      <label className="container">
        <SimpleCheckBox />
      </label>
      {option.title}

      {/* <input type="checkbox" name="fruit[]" value="grapes" className="check-box" /> */}
    </div>
  );
};

const SimpleCheckBox = () => {
  return (
    <div>
      <input type="checkbox" />
      <span className="checkmark"></span>
    </div>
  );
};

export default MultiSelectDropdown;
