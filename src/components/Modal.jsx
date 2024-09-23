import React from "react";

const Modal = ({ showModal, onClose, service }) => {
  if (!showModal) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className=" w-full items-center text-3xl text-center font-semibold">
                {service.title}
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="text-center italic font-semibold">
                {service.subtitle}
              </p>
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                {service.description}
              </p>
              <p></p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white"
                type="button"
                onClick={() =>
                  window.open(
                    "https://brcnail.simplybook.me/v2/#book",
                    "_blank"
                  )
                }
              >
                BOOK NOW!
              </button>
              <button
                className=" ml-5 px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-gray-500 hover:text-white"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
