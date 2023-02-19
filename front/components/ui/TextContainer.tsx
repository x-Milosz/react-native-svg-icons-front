import React from "react";
import styles from "../../../styles/components/ui/TextContainer.module.css";

interface TextContainerI {
    children: React.ReactElement[] | React.ReactElement;
}

const TextContainer = ({children}: TextContainerI) => {
    return (
        <div className={styles.mainWrapper}>
            {children}
        </div>
    );
};

export default TextContainer;
