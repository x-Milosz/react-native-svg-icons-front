import React from "react";
import Head from "next/head";
import TextContainer from "../main/front/components/ui/TextContainer";
import TextTitle from "../main/front/components/ui/TextTitle";
import useGetStrings from "../main/front/hooks/useGetStrings.hook";
import styles from "../styles/404.module.css";

const Page404 = () => {
    const strings = useGetStrings("404");

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
                <p>{strings["description"]}</p>
            </TextContainer>
        </div>
    );
};

export default Page404;
