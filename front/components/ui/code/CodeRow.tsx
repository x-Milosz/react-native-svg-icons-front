import React from "react";
import styles from "../../../../styles/components/ui/CodeRow.module.css";


interface CodeRowI {
    codeLine: number;
    codeLineContent: string;
}

const CodeRow = ({codeLine, codeLineContent}: CodeRowI) => {
    return (
        <tr className={styles.row}>
            <td className={styles.numberRowPart}>{codeLine}</td>
            <td>{codeLineContent}</td>
        </tr>
    );
};

export default CodeRow;
