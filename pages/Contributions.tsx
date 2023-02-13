import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import useGetStrings from "../front/hooks/useGetStrings.hook";
import styles from "../styles/AboutProject.module.css";

const Contributions: NextPage = () => {
    const strings = useGetStrings("contributionsPage");

    return (
        <div className={styles.main}>
            <Head>
                <title>{strings["pageTitle"]}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        </div>
    );
};

export default Contributions;
