import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, sidebar }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    console.log("ref");
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div
      className={`${
        sidebar && "lg:hidden"
      } fixed inset-0 z-50  flex items-center justify-center  bg-black/70 transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
