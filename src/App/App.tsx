import React from "react";
import "./App.css";
import "./SimpleCheckBox.css";
import MultiSelectDropdown from "components/MultiSelectDropdown";

const dropdownOpts = [
  { key: "1", title: "1" },
  { key: "2", title: "2" },
  { key: "3", title: "3" },
  { key: "4", title: "4" },
  { key: "5", title: "5" },
  { key: "6", title: "6" },
  { key: "7", title: "7" },
  { key: "8", title: "8" },
];

function App() {
  return (
    <div>
      <div>
        <MultiSelectDropdown options={dropdownOpts} />
      </div>
      <div>
        <SimpleCheckBox />
      </div>
    </div>
  );
}

const SimpleCheckBox: React.FC = () => {
  return (
    <div>
      <label className="form-control">
        <input type="checkbox" name="checkbox" />
        Checkbox
      </label>

      <label className="form-control">
        <input type="checkbox" name="checkbox-checked" checked />
        Checkbox - checked
      </label>
    </div>
  );
};

export default App;
