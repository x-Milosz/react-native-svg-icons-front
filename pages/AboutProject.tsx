import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import TextContainer from "../front/components/ui/TextContainer";
import useGetStrings from "../front/hooks/useGetStrings.hook";
import styles from "../styles/AboutProject.module.css";

const AboutProject: NextPage = () => {
    const strings = useGetStrings("aboutProjectPage");

    return (
        <div className={styles.main}>
            <Head>
                <title>{strings["pageTitle"]}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{strings["title"]}</h1>
            </div>
            <TextContainer>
                <h2>{strings["description"]}</h2>
                <p>{strings["text1"]}</p>
                <h2>{strings["techStack"]}</h2>
                <p>{strings["techStackText"]}</p>
                <ul>
                    <li>{strings["techStackList1"]}</li>
                    <li>{strings["techStackList2"]}</li>
                </ul>
            </TextContainer>
        </div>
    );
};

export default AboutProject;
