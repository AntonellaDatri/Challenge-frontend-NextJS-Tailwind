const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function Slider(parameters) {
  const { valor, color, maxValor, minValor } = parameters;

  const titulo = parameters.titulo.toUpperCase();
  const descripcion = Capitalize(parameters.descripcion);
  const porcentaje = ((valor * 100) / (maxValor + minValor)).toString() + "%";
  const colorFin = valor == maxValor ? color : "#f1f5f9";

  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-full ">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {titulo}
        </h5>
        <p className="text-gray-500 text-base">Mensual</p>
        <p className="text-gray-500 text-base">ARS</p>
        <p className="text-gray-500 text-base mb-6">{descripcion}</p>

        <div className="space-y-2">
          <div className="relative">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="dark:bg-cyan-400 h-2"
                role="progressbar"
                aria-label="music progress"
                aria-valuenow="1456"
                aria-valuemin="0"
                aria-valuemax="4550"
                style={{ backgroundColor: color, width: porcentaje }}
              ></div>
            </div>
            <div
              className="absolute diamond top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center"
              style={{ backgroundColor: color }}
            ></div>
            <div
              className="absolute -mt-3 -ml-3 flex items-center justify-center flex-col"
              style={{ left: porcentaje }}
            >
              <div
                className="diamond w-4 h-4 top-1"
                style={{ backgroundColor: color }}
              ></div>
              <div className="text-slate-500 mt-1 text-sm leading-6 font-medium tabular-nums">
                {valor}
              </div>
            </div>
            <div
              className="absolute diamond top-1/2 right-0 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center"
              style={{ backgroundColor: colorFin }}
            ></div>
          </div>
          <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
            <div className="text-slate-500">{minValor}</div>
            <div className="text-slate-500">{maxValor}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
