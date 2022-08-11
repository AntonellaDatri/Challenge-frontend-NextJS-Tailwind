import React from "react";
import ReactDOM from "react-dom";

export default function Alert(parameters) {
  const { descripcion } = parameters;

  const setShowAlert = () => {
    ReactDOM.render(null, document.getElementById("alert"));
  };

  return (
    <>
      <div
        className={
          "bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
        }
        role="alert"
      >
        {descripcion}
        <button
          className="float-right bg-transparent text-2xl font-semibold leading-none right-0 top-0  outline-none focus:outline-none"
          onClick={() => setShowAlert(false)}
        >
          <span>×</span>
        </button>
      </div>
    </>
  );
}
