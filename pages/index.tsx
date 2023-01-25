import { Box } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { type MeowType } from "../components/ExistingMeows";

const Meows = dynamic(() => import("../components/ExistingMeows"), {
  ssr: false,
});

const SayMewForm = dynamic(() => import("../components/SayMewForm"), {
  ssr: false,
});

const Home: NextPage = () => {
  // here id use either a global state provider or context
  const [allMeows, setAllMeows] = useState<MeowType[]>([]);

  return (
    <>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component={"header"}>
        <Box
          sx={{
            zIndex: 1100,
            position: "fixed",
            width: "100%",
            p: 2,
            display: "flex",
            justifyContent: "flex-end",
            background: "cyan",
          }}
        >
          <ConnectButton />
        </Box>
      </Box>
      <Box component={"div"} className={styles.container}>
        <main className={styles.main}>
          <h3>
            There seems to be an issue with closing the connect modal after
            connecting to wallet, due to{" "}
            <span style={{ color: "red" }}>react-remove-scroll-bar</span> wont
            look into it too much (<i>refreshing should fix</i>)
          </h3>

          <SayMewForm />

          <Meows meows={allMeows} setMeows={setAllMeows} />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://rainbow.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️ by your frens at 🌈
          </a>
        </footer>
      </Box>
    </>
  );
};

export default Home;
