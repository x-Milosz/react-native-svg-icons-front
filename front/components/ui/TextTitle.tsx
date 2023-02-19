import React from "react";
import styles from "../../../styles/components/ui/TextTitle.module.css";


interface TextTitleI {
    children: React.ReactElement[] | React.ReactElement;
}

const TextTitle = ({children}: TextTitleI) => {
    return (
        <div className={styles.textTitle}>
            {children}
        </div>
    );
};

export default TextTitle;
