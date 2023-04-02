import React, { useMemo } from "react";
import { CodeShowFrontLogic } from "../../../forntlogic/CodeShower.frontlogic";
import styles from "../../../../../styles/components/ui/code/CodeShower.module.css";
import CodeRow from "./CodeRow";
import { SvgLines } from "../../../../clean/core/entity/ConvertedSvg.entity";


interface CodeShowerI {
    svgLines: SvgLines;
}

const CodeShower = ({svgLines}: CodeShowerI) => {
    
    // TODO: make code be parsed in ConvertSvgCreate.asyncusecaseimpl.ts
    const parsedCode = useMemo(() => {
        return CodeShowFrontLogic.parseCode(svgLines);
    }, [svgLines]);

     
    return (
        <table className={styles.table}>
            {parsedCode.map(it => (
                <CodeRow codeLine={it.codeLine} codeLineContent={it.codeLineContent} key={it.codeLine} tabs={it.tabs} />
            ))}
        </table>
    );
};

export default CodeShower;
