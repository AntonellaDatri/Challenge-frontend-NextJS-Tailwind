import React from "react";

export default function ModalGenerica(parameters) {
  const { titulo, descripcion, descripcionBoton } = parameters;

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-green-500 float-right text-white active:bg-pink-600 font-bold capitalize text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {descripcionBoton}
      </button>
      {showModal ? (
        <>
          <div className="justify-center flex fixed w-full h-full outline-none overflow-x-hidden overflow-y-auto inset-0 z-50 ">
            <div className="modal-dialog w-1/3 relative w-auto pointer-events-none">
              {/*content*/}
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                {/*header*/}
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalLabel"
                  >
                    {titulo}
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {/*body*/}
                <div className="modal-body relative p-4">{descripcion}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
