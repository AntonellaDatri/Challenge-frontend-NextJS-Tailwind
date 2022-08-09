import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grafico from "../components/grafico";

export default function Home() {
  return <Grafico sueldo={856} puntos={500} bono={2000} />;
}
