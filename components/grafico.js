import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement);

export default function Grafico(parameters) {
  const { sueldo, puntos, bono } = parameters;
  const sueldoColor = "#51e0a6";
  const puntosColor = "#36A2EB";
  const bonoColor = "#FFCE56";

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [sueldo, puntos, bono],
        backgroundColor: [sueldoColor, puntosColor, bonoColor],
        hoverBackgroundColor: [sueldoColor, puntosColor, bonoColor],
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Tu compensación
        </h5>
        <p className="text-gray-700 text-base mb-4">
          Representación grafica de tu compensación
        </p>
        <Pie data={data} />
        <ul>
          <li className="li-sueldo">
            Sueldo base <b>ARS ${sueldo}</b>{" "}
          </li>
          <li className="li-puntos">
            Puntos Maslow <b>ARS ${puntos}</b>
          </li>
          <li className="li-bono">
            Bono anual <b>ARS ${bono}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
