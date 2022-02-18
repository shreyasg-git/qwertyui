import React, { MouseEventHandler, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

type ModalProps = {
  show: boolean;
  shouldCloseOnEscKeyPress?: boolean;
  modalCloser?: Function;
  title: string;

  //   modalCloser?: MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLButtonElement>;
};

/**
 * A Standard Modal component with great granular access.
 * @param {boolean} show - should Modal be visible or not.
 * @param {Function | MouseEventHandler<HTMLButtonElement>} onClose - A function which _closes_ the Modal. (usually by setting show=false)
 *
 */
const Modal: React.FC<ModalProps> = ({
  show,
  //   TODO: "modalCloser" is still not a good name. onClose was the initial choice, which was way wrong-er.
  modalCloser = () => {
    console.log(
      "Default On Close Function For Modal Called, pass 'onClose' to <Modal/> to close the Modal. Set 'show' to 'false'"
    );
  },
  shouldCloseOnEscKeyPress = true,
  title = "Default Modal Title",
  children,
}) => {
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      modalCloser();
    }
  };
  useEffect(() => {
    if (shouldCloseOnEscKeyPress) {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      };
    }
  });

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div
        className={`modal ${show ? "show" : ""}`}
        onClick={modalCloser as MouseEventHandler<HTMLDivElement>}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title"> {title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <Button
              className="button"
              onClick={modalCloser as MouseEventHandler<HTMLButtonElement>}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("modal-container")!
  );
};

export default Modal;
