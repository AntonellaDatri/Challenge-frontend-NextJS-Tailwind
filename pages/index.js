import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grafico from "../components/grafico";
import Slider from "../components/slider";
import Total from "../components/total";

export default function Home() {
  return (
    <>
      <div className="md:flex mx-3">
        <div className="w-full mt-5">
          <Slider
            valor={856}
            color={"#51e0a6"}
            titulo={"sueldo base"}
            descripcion={"sueldo base"}
            maxValor={2000}
            minValor={500}
          />
          <div className="mt-5"></div>
          <Slider
            valor={500}
            color={"#51e0a6"}
            titulo={"sueldo base"}
            descripcion={"sueldo base"}
            maxValor={1000}
            minValor={0}
          />
          <div className="mt-5"></div>
          <Slider
            valor={2000}
            color={"#51e0a6"}
            titulo={"sueldo base"}
            descripcion={"sueldo base"}
            maxValor={3000}
            minValor={1000}
          />
        </div>
        <div className="ml-3 mb-3">
          <Grafico sueldo={856} puntos={500} bono={2000} />
          <div className="mt-3"></div>

          <Total saldo={72} total={3356} />
        </div>
      </div>
    </>
  );
}
