import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";

const ModalBackdrop = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 z-[70] h-[100vh] w-full bg-slate-900/75 "
      onClick={onClick}
    />
  );
};

const ModalCard = ({ children }) => {
  return (
    <Card
      className={
        "absolute top-1/3 z-[80] flex w-full flex-col justify-between gap-y-4 bg-white md:left-[25%] md:mx-auto md:w-1/2 "
      }
    >
      {children}
    </Card>
  );
};

const Modal = ({ children, onClickModal }) => {
  const modalOverlay = document.getElementById("modal-overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={onClickModal} />,
        modalOverlay
      )}

      {ReactDOM.createPortal(<ModalCard>{children}</ModalCard>, modalOverlay)}
    </Fragment>
  );
};

export default Modal;
