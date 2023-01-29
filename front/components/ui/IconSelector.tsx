import React from "react";
import styles from "../../../styles/components/ui/IconSelector.module.css";
import * as MaterialDesign from "react-icons/md";
import useGetStrings from "../../hooks/useGetStrings.hook";

const IconSelector = () => {
    const strings = useGetStrings("mainPage");

    return (
        <div className={styles.iconSelectorContainer}>
            <div className={styles.searchContainer}>
                <MaterialDesign.MdSearch size={40} />
                <input  className={styles.searchInput} placeholder={strings["searchInputPlaceholder"]} />
            </div>
            <div className={styles.innerIconSelectorContainer}>
                
            </div>
        </div>
    );
};

export default IconSelector;
