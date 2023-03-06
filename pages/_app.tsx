import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../main/reducer/store";
import styles from "../styles/Home.module.css";
import useGetStrings from "../front/hooks/useGetStrings.hook";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
    const strings = useGetStrings("mainPage");
    
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
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
                    <div className={styles.buttonsContainer}>
                        <Link href={"/"} className={styles.headerLink}>
                            <div className={styles.headerButton}>
                                <p className={styles.headerButtonText}>
                                    {strings["homeButtonText"]}
                                </p>
                            </div>
                        </Link>
                        <Link href={"/AboutProject"} className={styles.headerLink}>
                            <div className={styles.headerButton}>
                                <p className={styles.headerButtonText}>
                                    {strings["aboutProjectButtonText"]}
                                </p>
                            </div>
                        </Link>
                        <Link href={"/Contributions"} className={styles.headerLink}>
                            <div className={styles.headerButton}>
                                <p className={styles.headerButtonText}>
                                    {strings["contribute"]}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(MyApp);
