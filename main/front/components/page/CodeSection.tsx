import React, { useMemo } from "react";
import CodeShower from "../ui/code/CodeShower";
import styles from "../../../../styles/components/page/CodeSection.module.css";
import { useAppSelector } from "../../../reducer/hook";
import CodeCopyButton from "../ui/code/CodeCopyButton";


const CodeSection = () => {
    const convertedSvg = useAppSelector(state => state.svg.convertedSvg);

    const concatenatedCode = useMemo(() => {
        const reducedString = convertedSvg.svgLines.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.text + "\n";
        }, "");
        return reducedString;
    }, [convertedSvg]);

    const handleCopyButtonClick = () => {
        navigator.clipboard.writeText(concatenatedCode);
    };

    return (
        <div className={styles.wrapper}>
            <CodeCopyButton onClick={handleCopyButtonClick} />
            <CodeShower svgLines={convertedSvg.svgLines} />
        </div>
    );
};

export default CodeSection;
