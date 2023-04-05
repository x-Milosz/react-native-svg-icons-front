import { useRouter } from "next/router";
import { useMemo } from "react";
import { StringsFrontLogic } from "../forntlogic/Strings.frontlogic";
import en from "../languages/en";

const useGetStrings = <T extends keyof typeof en>(category: T) => {
    const locale = useRouter().locale;
    const languagePack: typeof en = useMemo(() => {
        return StringsFrontLogic.getProperLanguagePack(locale);
    }, [locale]);
    

    return languagePack[category];
};

export default useGetStrings;
