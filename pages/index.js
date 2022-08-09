import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grafico from "../components/grafico";
import Slider from "../components/slider";

export default function Home() {
  return (
    <Slider
      valor={856}
      color={"#51e0a6"}
      titulo={"sueldo base"}
      descripcion={"sueldo base"}
      maxValor={2000}
      minValor={500}
    />
  );
}
