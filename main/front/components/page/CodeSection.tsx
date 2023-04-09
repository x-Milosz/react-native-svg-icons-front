import React, { useMemo } from "react";
import CodeShower from "../ui/code/CodeShower";
import styles from "../../../../styles/components/page/CodeSection.module.css";
import { useAppDispatch, useAppSelector } from "../../../reducer/hook";
import CodeCopyButton from "../ui/code/CodeCopyButton";
import { convertedSvgCopyAdapter } from "../../../clean/adapter/ConvertedSvgCopy.adapter";
import { useRouter } from "next/router";
import useGetStrings from "../../hooks/useGetStrings.hook";


const CodeSection = () => {
    const dispatch = useAppDispatch();
    const locale = useRouter().locale;
    const convertedSvg = useAppSelector(state => state.svg.convertedSvg);
    const strings = useGetStrings("codeSection");


    const handleCopyButtonClick = () => {
        dispatch(convertedSvgCopyAdapter.copyConvertedSvg(locale));
    };

    return (
        <div className={styles.wrapper}>
            <CodeCopyButton onClick={handleCopyButtonClick} />
            <CodeShower svgLines={convertedSvg.svgLines} emptyPlaceholder={strings.emptyPlaceholder} />
        </div>
    );
};

export default CodeSection;
