import en from "../languages/en";
import pl from "../languages/pl";

export namespace StringsFrontLogic {
    export const getProperLanguagePack = (locale?: string) => {
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
    };
}
