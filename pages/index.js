import React from "react";
import Grafico from "../components/grafico";
import Slider from "../components/slider";
import ResumenCuenta from "../components/resumenCuenta";
import SuccessModal from "../components/successModal";

export default function Home() {
  const [puntosADistribuir, setPuntosADistribuir] = React.useState(1000);
  const [valorSueldoBase, setValorSueldoBase] = React.useState(856);
  const [valorPtosMaslow, setValorPtosMaslow] = React.useState(500);
  const [valorBono, setValorBono] = React.useState(2000);

  const colorSueldoBase = "#51e0a6";
  const colorPtosMaslow = "#36a2eb";
  const colorBono = "#ffce56";
  const total = valorSueldoBase + valorPtosMaslow + valorBono;

  const modificarValores = (fun, setValores, nuevoValor) => {
    setPuntosADistribuir(fun(puntosADistribuir, setValores));
    setValores(nuevoValor);
  };

  return (
    <>
      <div id="alert"></div>
      <div className="md:flex mx-3">
        <div className="w-full mt-5">
          <Slider
            valor={valorSueldoBase}
            color={colorSueldoBase}
            titulo={"sueldo base"}
            descripcion={"sueldo base"}
            maxValor={2000}
            minValor={500}
            paraDistribuir={puntosADistribuir}
            multiplicador={2}
            modificarPuntosAdistribuir={(fun, nuevoValor) =>
              modificarValores(fun, setValorSueldoBase, nuevoValor)
            }
          />
          <div className="mt-5"></div>
          <Slider
            valor={valorPtosMaslow}
            color={colorPtosMaslow}
            titulo={"puntos maslow"}
            descripcion={"puntos canjeables en un marketplace"}
            maxValor={1000}
            minValor={0}
            paraDistribuir={puntosADistribuir}
            multiplicador={1}
            modificarPuntosAdistribuir={(fun, nuevoValor) =>
              modificarValores(fun, setValorPtosMaslow, nuevoValor)
            }
          />
          <div className="mt-5"></div>
          <Slider
            valor={valorBono}
            color={colorBono}
            titulo={"bono anual"}
            maxValor={3000}
            minValor={1000}
            paraDistribuir={puntosADistribuir}
            multiplicador={0.5}
            modificarPuntosAdistribuir={(fun, nuevoValor) =>
              modificarValores(fun, setValorBono, nuevoValor)
            }
          />
        </div>
        <div className="mt-5"></div>

        <div className="ml-3 mb-3 ">
          <Grafico
            sueldo={{ valor: valorSueldoBase, color: colorSueldoBase }}
            puntos={{ valor: valorPtosMaslow, color: colorPtosMaslow }}
            bono={{ valor: valorBono, color: colorBono }}
          />
          <div className="mt-3"></div>

          <ResumenCuenta saldo={puntosADistribuir} total={total} />
          <div className="mt-3"></div>

          <SuccessModal />
        </div>
      </div>
    </>
  );
}
