import React from "react";
import styles from "../../../../../styles/components/ui/code/CodeCopyButton.module.css";
import * as MaterialDesign from "react-icons/md";

interface CodeCopyButtonI {
    onClick: () => void;
}


const CodeCopyButton = ({onClick}: CodeCopyButtonI) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <MaterialDesign.MdContentCopy className={styles.icon} />
        </button>
    );
};

export default CodeCopyButton;
