import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import BellIcon from "../components/bell";
import Addnoti from "../components/AddNoti";
import storeBasic from "../redux/storebasic";
import styles from "../styles/Home.module.css";
import Removenoti from "../components/readNoti";
import Bellbasic from "../components/bellbasic";
import BellContext from "../components/BellContext";
import Addnotibasic from "../components/Addnotibasic";
import Removenotibasic from "../components/readNotibasic";
import AddnotiContext from "../components/AddnotiContext";
import ReadnotiContext from "../components/ReadnotiContext";
import React from "react";

export const NotiContext = React.createContext();

export default function Home() {
  const [notiCount, setNotiCount] = useState(0);
  function incrementNoti() {
    setNotiCount(notiCount + 1);
  }
  function decrementNoti() {
    if (notiCount > 0) setNotiCount(notiCount - 1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <Provider store={store}>
          <BellIcon />
          <h2 className={styles.title}>This For Redux and ReduxToolkit</h2>
          <div className={styles.grid}>
            <Addnoti />
            <Removenoti />
          </div>
        </Provider>

        <NotiContext.Provider value={notiCount}>
          <BellContext />
          <h2 className={styles.title}>This For useContext</h2>
          <div className={styles.grid}>
            <button className={styles.card} onClick={incrementNoti}>
              <AddnotiContext />
            </button>
            <button className={styles.card} onClick={decrementNoti}>
              <ReadnotiContext />
            </button>
          </div>
        </NotiContext.Provider>

        <Provider store={storeBasic}>
          <Bellbasic />
          <h2 className={styles.title}>This For Redux basic</h2>
          <div className={styles.grid}>
            <Addnotibasic />
            <Removenotibasic />
          </div>
        </Provider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
