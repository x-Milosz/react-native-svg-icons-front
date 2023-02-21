import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import TextContainer from "../front/components/ui/TextContainer";
import TextTitle from "../front/components/ui/TextTitle";
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
            <TextTitle>
                <h1>{strings["title"]}</h1>
            </TextTitle>
            <TextContainer>
                <p>{strings["text"]}</p>
                <ul>
                    <li>{strings["point"]}<Link href={strings["pointLink"]} style={{color: "blue"}}>{strings["pointLink"]}</Link></li>
                    <li>{strings["point1"]}<Link href={strings["point1Link"]} style={{color: "blue"}}>{strings["point1Link"]}</Link></li>
                    <li>{strings["point2"]}<Link href={strings["point2Link"]} style={{color: "blue"}}>{strings["point2Link"]}</Link></li>
                </ul>
            </TextContainer>
        </div>
    );
};

export default Contributions;
