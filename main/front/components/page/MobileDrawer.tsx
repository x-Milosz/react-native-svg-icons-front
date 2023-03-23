import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reducer/hook";
import styles from "../../../../styles/components/page/MobileDrawer.module.css";
import useGetStrings from "../../hooks/useGetStrings.hook";
import { useRouter } from "next/router";
import { UtilThunks } from "../../../reducer/util/util.thunks";

const MobileDrawer = () => {
    const isDrawerOpen = useAppSelector(state => state.util.isMobileDrawerOpen);
    const strings = useGetStrings("mainPage");
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const body = document.querySelector("body");
        if(body === null) {
            return;
        }

        if(isDrawerOpen) {
            body.scrollTo({top: 0, left: 0, behavior: "smooth" });
            body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "auto";
        }
    }, [isDrawerOpen]);

    const onPressCallback = useCallback(async (path: string) => {
        await router.push(path);
        dispatch(UtilThunks.setIsMobileDrawerOpenThunk(false));
    }, [router, dispatch]);

    return (
        <div className={styles.mobileDrawerContainer} style={isDrawerOpen ? drawerOpenStyle : drawerCloseStyle}>
            <div className={styles.buttonsContainer}>
                <div className={styles.headerButton} onClick={() => onPressCallback("/")}>
                    <p className={styles.headerButtonText}>
                        {strings["homeButtonText"]}
                    </p>
                </div>
                <div className={styles.headerButton} onClick={() => onPressCallback("/AboutProject")}>
                    <p className={styles.headerButtonText}>
                        {strings["aboutProjectButtonText"]}
                    </p>
                </div>
                <div className={styles.headerButton} onClick={() => onPressCallback("/Contributions")}>
                    <p className={styles.headerButtonText}>
                        {strings["contribute"]}
                    </p>
                </div>
            </div>
        </div>
    );
};

const drawerOpenStyle = {
    width: 250,
};

const drawerCloseStyle = {
    width: 0,
    overflow: "hidden",
};


export default MobileDrawer;
