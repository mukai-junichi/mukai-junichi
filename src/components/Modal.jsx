import { backfaceFixed } from "./utils/backfaceFixed";
import { useEffect } from "react";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  const stopScrollingBackContent = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
      if (!props.showFlag) {
        document.body.style.overflow = "auto";
      }
    }
  };
  useEffect(stopScrollingBackContent, [props.showFlag]);

  return (
    <>
      {props.showFlag ? (
        <div
          onClick={closeModal}
          className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50"
          id="overlay"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded bg-white p-3"
            id="modalContent"
          >
            <img src={props.img} />
            <p>{props.title}</p>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
