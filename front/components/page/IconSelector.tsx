import React, { useCallback, useEffect, useState } from "react";
import styles from "../../../styles/components/ui/IconSelector.module.css";
import * as MaterialDesign from "react-icons/md";
import useGetStrings from "../../hooks/useGetStrings.hook";
import { useAppDispatch, useAppSelector } from "../../../main/reducer/hook";
import parse from "html-react-parser";
import PaginationOperator from "../ui/PaginationOperator";
import { svgListAdapter } from "../../../main/clean/adapter/SvgList.adapter";
import { convertedSvgAdapter } from "../../../main/clean/adapter/ConvertedSvg.adapter";


const IconSelector = () => {
    const dispatch = useAppDispatch();
    const strings = useGetStrings("mainPage");
    const icons = useAppSelector(state => state.svg.svgList);

    const [inputText, setInputText] = useState("");

    useEffect(() => {
        dispatch(svgListAdapter.searchSvgAndFetch(inputText));
    }, [inputText]);

    const convertSvgCallback = useCallback((svgId: number) => {
        dispatch(convertedSvgAdapter.convertSvg(svgId));
    }, []);

    return (
        <div className={styles.iconSelectorContainer}>
            <div className={styles.searchContainer}>
                <MaterialDesign.MdSearch size={40} />
                <input
                    value={inputText}
                    onChange={(val) => {
                        setInputText(val.target.value);
                    }}
                    type="text" 
                    className={styles.searchInput} 
                    placeholder={strings["searchInputPlaceholder"]} />
                <PaginationOperator page={icons.page} totalPages={icons.pages} 
                    newPageFunc={async (newPage: number) => {
                        await dispatch(svgListAdapter.changeSvgListParamAndFetch("page", newPage));
                    }} 
                />
            </div>
            <div className={styles.innerIconSelectorContainer}>
                {icons.contentList.map(it => (
                    <div 
                        key={it.id} 
                        className={styles.innerIconSelectorContainerItem}
                        onClick={() => {
                            convertSvgCallback(it.id);
                        }}
                    >
                        <>{parse(it.svg)}</>
                        <p>{it.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconSelector;
