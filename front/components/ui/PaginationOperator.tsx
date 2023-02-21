import React from "react";
import * as MaterialDesign from "react-icons/md";
import styles from "../../../styles/components/ui/PaginationOperator.module.css";
import useGetStrings from "../../hooks/useGetStrings.hook";


interface PaginationOperatorI {
    page: number;
    totalPages: number;
    newPageFunc: (newPage: number) => Promise<void>;
}

const PaginationOperator = ({page, totalPages, newPageFunc}: PaginationOperatorI) => {
    const strings = useGetStrings("paginationOperator");

    const tryToFetchNextPage = async () => {
        if(page + 1 <= totalPages) {
            await newPageFunc(page + 1);
        }
    };

    const tryToFetchPreviousPage = async () => {
        if(page - 1  >= 1 && totalPages > 0) {
            await newPageFunc(page - 1);
        }
    };

    return (
        <div className={styles.paginationOperatorWrapper}>
            <MaterialDesign.MdArrowLeft className={styles.icon} onClick={tryToFetchPreviousPage} />
            <div className={styles.pageDescriptionWrapper}>
                {totalPages > 0 ? <p>{page + strings["of"] + totalPages}</p> : null}
            </div>
            <MaterialDesign.MdArrowRight className={styles.icon} onClick={tryToFetchNextPage} />
        </div>
    );
};

export default PaginationOperator;
