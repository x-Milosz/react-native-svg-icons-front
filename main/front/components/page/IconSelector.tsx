import React, { useCallback, useEffect, useState } from "react";
import styles from "../../../../styles/components/page/IconSelector.module.css";
import * as MaterialDesign from "react-icons/md";
import useGetStrings from "../../hooks/useGetStrings.hook";
import parse from "html-react-parser";
import PaginationOperator from "../ui/PaginationOperator";
import { useAppDispatch, useAppSelector } from "../../../reducer/hook";
import { svgListAdapter } from "../../../clean/adapter/SvgList.adapter";
import { convertedSvgAdapter } from "../../../clean/adapter/ConvertedSvg.adapter";


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
                <div className={styles.innerSearchContainer}>
                    <MaterialDesign.MdSearch className={styles.searchIcon} size={30} />
                    <input
                        value={inputText}
                        onChange={(val) => {
                            setInputText(val.target.value);
                        }}
                        type="text" 
                        className={styles.searchInput} 
                        placeholder={strings["searchInputPlaceholder"]} />
                </div>
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
                {icons.contentList.length === 0 ? <p className={styles.placeholder}>{strings.emptyPlaceholder}</p> : null}
            </div>
        </div>
    );
};

export default IconSelector;
