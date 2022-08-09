const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function Slider(parameters) {
  const { valor, color } = parameters;

  const titulo = parameters.titulo.toUpperCase();
  const descripcion = Capitalize(parameters.descripcion);

  console.log(color);

  return (
    <div className="flex justify-center">
      <div
        className="block p-6 rounded-lg shadow-lg bg-white"
        style={{ width: "100%" }}
      >
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {titulo}
        </h5>
        <p className="text-gray-700 text-base">Mensual</p>
        <p className="text-gray-700 text-base">ARS</p>
        <p className="text-gray-700 text-base mb-6">{descripcion}</p>
        <div className="w-full bg-gray-200 h-1 mb-6">
          <div
            className="h-1"
            style={{ width: "25%", backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
}
