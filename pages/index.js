import React from "react";
import Grafico from "../components/grafico";
import Slider from "../components/slider";
import ResumenCuenta from "../components/resumenCuenta";
import ModalGenerica from "../components/modalGenerica";

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
            color={"--sueldo-base-color"}
            titulo={"sueldo base"}
            descripcion={"sueldo base"}
            maxValor={2000}
            minValor={500}
            multiplicador={2}
            modificarPuntosAdistribuir={(fun, nuevoValor) =>
              modificarValores(fun, setValorSueldoBase, nuevoValor)
            }
          />
          <div className="mt-5"></div>
          <Slider
            valor={valorPtosMaslow}
            color={"--ptos-maslow-color"}
            titulo={"puntos maslow"}
            descripcion={"puntos canjeables en un marketplace"}
            maxValor={1000}
            minValor={0}
            multiplicador={1}
            modificarPuntosAdistribuir={(fun, nuevoValor) =>
              modificarValores(fun, setValorPtosMaslow, nuevoValor)
            }
          />
          <div className="mt-5"></div>
          <Slider
            valor={valorBono}
            color={"--bono-anual-color"}
            titulo={"bono anual"}
            maxValor={3000}
            minValor={1000}
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

          {puntosADistribuir > 0 ? (
            <ModalGenerica
              titulo={"Formulario enviado con exito"}
              descripcion={"El formulario fue enviado con exito."}
              descripcionBoton={"enviar actualización"}
            />
          ) : (
            <ModalGenerica
              titulo={"No se pudo enviar el fomulario"}
              descripcion={
                "No se pudo enviar el formulario porque no hay suficiente dinero para distribuir"
              }
              descripcionBoton={"enviar actualización"}
            />
          )}
        </div>
      </div>
    </>
  );
}
