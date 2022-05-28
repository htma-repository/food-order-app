import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";

const ModalBackdrop = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 z-40 h-[100vh] w-full bg-slate-900/75"
      onClick={onClick}
    />
  );
};

const ModalCard = ({ children }) => {
  return (
    <Card className="fixed top-1/2 left-1/2 z-[60] flex w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex-col justify-between gap-y-4 bg-white md:mx-auto md:w-3/4 md:max-w-2xl">
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
