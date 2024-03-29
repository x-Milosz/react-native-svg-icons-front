import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import TextContainer from "../main/front/components/ui/TextContainer";
import TextTitle from "../main/front/components/ui/TextTitle";
import useGetStrings from "../main/front/hooks/useGetStrings.hook";
import styles from "../styles/AboutProject.module.css";

const AboutProject: NextPage = () => {
    const strings = useGetStrings("aboutProjectPage");

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
                <h2>{strings["description"]}</h2>
                <p>{strings["text1"]}</p>
                <p>{strings["text2"]}</p>
                <p>{strings["text3"]}</p>
                <p>{strings["text4"]}</p>
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

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};

export default AboutProject;
