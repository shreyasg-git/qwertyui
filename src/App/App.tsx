import React from "react";
import "./App.css";
import "./SimpleCheckBox.css";
import MultiSelectDropdown from "components/MultiSelectDropdown";
import Modal from "components/Modal";
import Button from "components/Button";

// TODO: if you load Modal and MultiSelectDropdow, the z-index of dropdown is at the same level of the
// Modal body. which makes it look like highlighted because opacity doesnt work.

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
  const [showModal, setshowModal] = React.useState(false);
  return (
    <div>
      <div>
        <Modal show={showModal} modalCloser={() => setshowModal(false)} title="Hello Wworld">
          <h3>Shreyas Here</h3>
        </Modal>
        <Button onClick={() => setshowModal(true)}> Show Modal </Button>
        <MultiSelectDropdown options={dropdownOpts} />
      </div>
    </div>
  );
}

export default App;
