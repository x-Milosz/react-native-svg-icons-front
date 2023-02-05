import React from "react";
import CodeShower from "../ui/code/CodeShower";
import styles from "../../../styles/components/ui/CodeSection.module.css";
import { useAppSelector } from "../../../main/reducer/hook";


const CodeSection = () => {
    const convertedSvg = useAppSelector(state => state.svg.convertedSvg);

    return (
        <div className={styles.wrapper}>
            <CodeShower code={convertedSvg.svg} />
        </div>
    );
};

export default CodeSection;
