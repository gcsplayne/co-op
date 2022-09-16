import Image from "next/image";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Card from "../components/MainCard";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../components/Layout";
import ImageCarousel from "../components/carousel";

{
  /* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */
}
<Head>
  {/* name in tabs - browser */}
  <title>Matt Playne</title>

  {/* icon infront of name with link  */}
  <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico" />
</Head>;
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <Container>
          <ImageCarousel />
        </Container> */}

        <Container>
          <Video />
        </Container>

        <Form />
        {/* <Photo /> */}

        <Container>
          <img
            src="/images/edit.jpg"
            className=" d-flex img-fluid shadow-4 w-75 m-auto"
            alt="..."
          />
        </Container>
        <Card />
      </main>
    </div>
  );
}
