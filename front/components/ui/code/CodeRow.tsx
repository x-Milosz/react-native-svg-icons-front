import React from "react";
import styles from "../../../../styles/components/ui/CodeRow.module.css";


interface CodeRowI {
    codeLine: number;
    codeLineContent: string;
    tabs: number;
}

const CodeRow = ({codeLine, codeLineContent, tabs}: CodeRowI) => {
    return (
        <tr className={styles.row}>
            <td className={styles.numberRowPart}>{codeLine}</td>
            <td><p style={{paddingLeft: tabs * 30}}>{codeLineContent}</p></td>
        </tr>
    );
};

export default CodeRow;
