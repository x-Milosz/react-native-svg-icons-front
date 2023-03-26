import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useAppDispatch } from "../main/reducer/hook";
import {SvgListDto} from "../main/clean/data/dto/SvgList.dto";
import { svgListAdapter } from "../main/clean/adapter/SvgList.adapter";
import { useRouter } from "next/router";
import useGetStrings from "../main/front/hooks/useGetStrings.hook";
import IconSelector from "../main/front/components/page/IconSelector";
import CodeSection from "../main/front/components/page/CodeSection";


interface HomeI {
    initialSvgList: SvgListDto;
}

const Home: NextPage<HomeI> = ({initialSvgList}: HomeI) => {
    const strings = useGetStrings("mainPage");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(svgListAdapter.fetchSvgList());
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>{strings["pageTitle"]}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.fistMainContainer}>
                    <IconSelector />
                </div>
                <div className={styles.secondMainContainer}>
                    <CodeSection />
                </div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};

export default Home;
