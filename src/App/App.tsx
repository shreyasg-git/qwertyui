import React from "react";
import "./App.css";
import Modal from "components/Modal";
import Button from "components/Button";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Open Modal
        </Button>
        <Modal
          title="Hello World !"
          show={showModal}
          modalCloser={() => {
            setShowModal(false);
          }}
        >
          <h2>Children Passed to Modal</h2>
        </Modal>
      </div>
    </div>
  );
}

export default App;
