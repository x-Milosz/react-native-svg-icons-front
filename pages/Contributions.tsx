import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import TextContainer from "../main/front/components/ui/TextContainer";
import TextTitle from "../main/front/components/ui/TextTitle";
import useGetStrings from "../main/front/hooks/useGetStrings.hook";
import styles from "../styles/Contributions.module.css";

const Contributions: NextPage = () => {
    const strings = useGetStrings("contributionsPage");

    return (
        <div className={styles.main}>
            <Head>
                <title>{strings["pageTitle"]}</title>
                <meta name="description" content={strings["metaDescription"]} /> 
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TextTitle>
                <h1 className={styles.title}>{strings["title"]}</h1>
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

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};

export default Contributions;
