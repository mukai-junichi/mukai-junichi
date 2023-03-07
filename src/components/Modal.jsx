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

  const DevLanguage = props.dev_language;

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
            className="relative flex h-4/5 w-2/3 flex-col md:flex-row items-center gap-4 rounded bg-white p-3"
            id="modalContent"
          >
            <div className="h-full md:w-1/2 overflow-y-scroll p-3">
              <img className="h-auto object-cover" src={props.site_img} />
            </div>
            <div className="h-full md:w-1/2 overflow-y-scroll p-3">
              <span className="rounded-lg bg-teal-300 py-1 px-2 text-sm">
                タイトル ( URL )
              </span>
              <p className="my-2 ml-2 text-sm leading-relaxed">
                {props.title} (
                <a
                  className="text-blue-500"
                  href="https://mj-lab.com/"
                  target={"_blank"}
                >
                  {props.site_url}
                </a>
                )
              </p>
              <span className="rounded-lg bg-teal-300 py-1 px-2 text-sm">
                説明
              </span>
              <p className="my-2 ml-2 text-sm leading-relaxed">{props.site_description}</p>

              <span className="rounded-lg bg-teal-300 py-1 px-2 text-sm">
                開発言語
              </span>
              {DevLanguage.map((language) => {
                return (
                  <p key={language} className="my-2 ml-2 text-sm leading-relaxed">{language}</p>
                );
              })}
              <span className="rounded-lg bg-teal-300 py-1 px-2 text-sm">
                実装について
              </span>
              <p className="my-2 ml-2 text-sm leading-relaxed">{props.dev_description}</p>
              <span className="rounded-lg bg-teal-300 py-1 px-2 text-sm">
                今後の目標
              </span>
              <p className="my-2 ml-2 text-sm leading-relaxed">{props.purpose}</p>
            </div>

            <span onClick={closeModal} className="absolute top-1 right-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
