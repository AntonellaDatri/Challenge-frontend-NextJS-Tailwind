export default function ResumenCuenta(parameters) {
  const { saldo, total } = parameters;
  return (
    <div className="flex justify-center ">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full">
        <div className="flex justify-between">
          <div className="text-gray-400 text-xl leading-tight font-medium mb-2">
            Para distribuir
          </div>
          <div className="text-gray-400 text-xl leading-tight font-medium mb-2">
            ARS {saldo}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-700 text-xl leading-tight font-medium mb-2">
            Total
          </div>
          <div className="text-gray-900 text-xl leading-tight font-medium mb-2">
            ARS {total}
          </div>
        </div>
      </div>
    </div>
  );
}
