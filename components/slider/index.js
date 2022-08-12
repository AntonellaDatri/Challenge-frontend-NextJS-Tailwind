import ModalEdit from "./edit";
import React from "react";
import ReactDOM from "react-dom";
import Alert from "../alert";

export default function Slider(parameters) {
  const {
    titulo,
    descripcion,
    color,
    maxValor,
    minValor,
    multiplicador,
    modificarPuntosAdistribuir,
  } = parameters;

  const [valor, setValor] = React.useState(parameters.valor);
  const porcentaje =
    (((valor - minValor) * 100) / (maxValor - minValor)).toString() + "%";
  const valorBarra = valor == maxValor || valor == minValor ? "" : valor;

  const verificarYCambiarValor = (nuevoValor) => {
    if (nuevoValor == valor) {
      return;
    }

    if (nuevoValor < minValor || nuevoValor > maxValor) {
      ReactDOM.render(
        <Alert
          descripcion={"El valor que se intenta ingresar se sale del rango "}
        />,
        document.getElementById("alert")
      );
      return;
    }

    setPuntosADistribuir(nuevoValor);
    setValor(nuevoValor);
  };

  const setPuntosADistribuir = (nuevoValor) => {
    let dif = nuevoValor - valor;
    modificarPuntosAdistribuir(
      (actual) => actual - dif / multiplicador,
      parseFloat(nuevoValor)
    );
  };

  const handleChange = (event) => {
    let value = event.target.value;
    verificarYCambiarValor(value);
    setValor(value);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white w-full ">
          <div className="text-gray-500 text-base float-right">
            {multiplicador}x
          </div>
          <h5 className="text-gray-900 text-xl uppercase leading-tight font-medium mb-2">
            {titulo}
          </h5>
          <p className="text-gray-500 text-base">Mensual</p>
          <p className="text-gray-500 text-base">ARS</p>
          <p className="text-gray-500 normal-case text-base mb-6">
            {descripcion}
          </p>

          <div className="space-y-2 mb-3">
            <div className="relative">
              <div
                className="absolute diamond top-1/2 w-5 h-5 -mt-2  flex items-center justify-center"
                style={{ backgroundColor: `var(${color})` }}
              ></div>
              <div
                className="absolute -mt-8 -ml-2 flex text-slate-500 text-sm leading-6 font-medium tabular-nums"
                style={{ left: porcentaje }}
              >
                {valorBarra}
              </div>
              <div
                className="absolute diamond top-1/2 -right-2 w-5 h-5 -mt-2 mr-2 flex items-center justify-center"
                style={{ backgroundColor: "#cccccc" }}
              ></div>
              <input
                className={`seekbar h-2 ${color}`}
                type="range"
                min={minValor}
                max={maxValor}
                value={valor}
                onChange={handleChange}
                style={{
                  background: `linear-gradient(to right, var(${color}) ${porcentaje}, #ccc 0px`,
                }}
              />
            </div>
            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
              <div className="text-slate-500">{minValor}</div>
              <div className="text-slate-500">{maxValor}</div>
            </div>
          </div>
          <ModalEdit onAccept={verificarYCambiarValor} tipo={titulo} />
        </div>
      </div>
    </>
  );
}
