import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement);

export default function Grafico(parameters) {
  const { sueldo, puntos, bono } = parameters;

  const data = {
    datasets: [
      {
        data: [sueldo.valor, puntos.valor, bono.valor],
        backgroundColor: [sueldo.color, puntos.color, bono.color],
        hoverBackgroundColor: [sueldo.color, puntos.color, bono.color],
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full ">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Tu compensación
        </h5>
        <p className="text-gray-700 text-base mb-4">
          Representación grafica de tu compensación
        </p>
        <div className="mx-3">
          <Pie data={data} />
        </div>
        <ul>
          <li className="li-sueldo">
            Sueldo base <b>ARS ${sueldo.valor}</b>{" "}
          </li>
          <li className="li-puntos">
            Puntos Maslow <b>ARS ${puntos.valor}</b>
          </li>
          <li className="li-bono">
            Bono anual <b>ARS ${bono.valor}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
