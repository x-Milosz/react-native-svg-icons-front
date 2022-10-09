import { useRouter } from "next/router";
import { useMemo } from "react";
import en from "../languages/en";
import pl from "../languages/pl";

const useGetStrings = <T extends keyof typeof en>(category: T) => {
    const locale = useRouter().locale;
    const languagePack: typeof en = useMemo(() => {
        switch(locale) {
        case "en": {
            return en;
        }
        case "pl": {
            return pl;
        }
        default: {
            return en;
        }
        }
    }, [locale]);
    

    return languagePack[category];
};

export default useGetStrings;
