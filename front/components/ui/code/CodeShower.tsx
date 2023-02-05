import React, { useMemo } from "react";
import { CodeShowFrontLogic } from "../../../forntlogic/CodeShower.frontlogic";
import styles from "../../../styles/components/ui/CodeShower.module.css";
import CodeRow from "./CodeRow";


interface CodeShowerI {
    code: string;
}

const CodeShower = ({code}: CodeShowerI) => {
    
    const parsedCode = useMemo(() => {
        return CodeShowFrontLogic.parseCode(code);
    }, [code]);
    
    return (
        <table className={styles.table}>
            {parsedCode.map(it => (
                <CodeRow codeLine={it.codeLine} codeLineContent={it.codeLineContent} key={it.codeLine} />
            ))}
        </table>
    );
};

export default CodeShower;
