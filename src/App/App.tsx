import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiSelectDropdown from "components/MultiSelectDropdown";
function App() {
  const dropDownOpts = [
    { key: "shreyas", title: "shreyas" },
    { key: "shreyas", title: "shreyas" },
    { key: "shreyas", title: "shreyas" },
    { key: "shreyas", title: "shreyas" },
    { key: "shreyas", title: "shreyas" },
    { key: "shreyas", title: "shreyas" },
    { key: "shreyas", title: "shreyas" },
  ];
  return (
    <div>
      <div className="App">
        <MultiSelectDropdown options={dropDownOpts} />
      </div>
      <div>
        <MultiSelectDropdown options={dropDownOpts} />
      </div>
    </div>
  );
}

export default App;
