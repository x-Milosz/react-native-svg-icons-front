import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useGetStrings from "../front/hooks/useGetStrings.hook";
import Link from "next/link";
import IconSelector from "../front/components/page/IconSelector";
import { useEffect } from "react";
import { useAppDispatch } from "../main/reducer/hook";
import { setSvgList } from "../main/reducer/svg/svg.slice";
import { SvgListRepository } from "../main/clean/data/repository/abstract/SvgList.repository";
import { SvgListRepositoryImpl } from "../main/clean/data/repository/implementation/SvgList.reposiotryimpl";
import {SvgListDto} from "../main/clean/data/dto/SvgList.dto";
import { SvgList } from "../main/clean/core/entity/SvgList.entity";
import { svgListAdapter } from "../main/clean/adapter/SvgList.adapter";
import localFont from "@next/font/local";
import { useRouter } from "next/router";
import CodeSection from "../front/components/page/CodeSection";


interface HomeI {
    initialSvgList: SvgListDto;
}

const Home: NextPage<HomeI> = ({initialSvgList}: HomeI) => {
    const strings = useGetStrings("mainPage");
    const dispatch = useAppDispatch();
    const router = useRouter();

    // useEffect(() => {
    //     dispatch(setSvgList(new SvgList(initialSvgList.data.page, initialSvgList.data.pages,
    //         initialSvgList.data.total, initialSvgList.data.contentList)));
    // }, [initialSvgList]);

    useEffect(() => {
        dispatch(svgListAdapter.fetchSvgList());
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>{strings["title"]}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <div className={styles.ribbon}>
                    <p className={styles.ribbonText}>{strings["ribbonText"]}</p>
                </div>
                <div className={styles.logoAndButtons}>
                    <div className={styles.logoContainer}>
                        <h1 className={styles.headerTitleText}>
                            {strings["title"]}
                        </h1>
                    </div>
                    <div className={styles.buttonsContainer} onClick={() => router.push("/")}>
                        <div className={styles.headerButton}>
                            <p className={styles.headerButtonText}>
                                {strings["homeButtonText"]}
                            </p>
                        </div>
                        <div className={styles.headerButton}>
                            <p className={styles.headerButtonText}>
                                {strings["aboutProjectButtonText"]}
                            </p>
                        </div>
                        <div className={styles.headerButton}>
                            <p className={styles.headerButtonText}>
                                {strings["contribute"]}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
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

// export const getStaticProps: GetStaticProps = async (context) => {
//     const svgListRepository: SvgListRepository = new SvgListRepositoryImpl();
//     const initialPage = await svgListRepository.fetchSvgPage(1, 49)
//     ;
//     return {
//         props: {initialSvgList: initialPage}
//     };
// };

export default Home;
