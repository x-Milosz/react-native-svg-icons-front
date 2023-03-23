import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "../../../../styles/components/page/MobileDrawerButton.module.css";
import { useAppDispatch, useAppSelector } from "../../../reducer/hook";
import { UtilThunks } from "../../../reducer/util/util.thunks";

const MobileDrawerButton = () => {
    const isDrawerOpen = useAppSelector(state => state.util.isMobileDrawerOpen);
    const dispatch = useAppDispatch();

    return (
        <button className={styles.mobileDrawerButton} 
            onClick={() => dispatch(UtilThunks.setIsMobileDrawerOpenThunk(!isDrawerOpen))}>
            <BsThreeDotsVertical className={styles.icon} />
        </button>
    );
};

export default MobileDrawerButton;
