import { SvgLines } from "../.././../main/clean/core/entity/ConvertedSvg.entity";
export namespace CodeShowFrontLogic {
    export type ParseCodeResultT = {codeLine: number; codeLineContent: string, tabs: number}[];

    export const parseCode = (svgLines: SvgLines): ParseCodeResultT => {
        if(svgLines.length === 0) {
            return [];
        }

        const result: ParseCodeResultT = [];

        for(let i = 0; i < svgLines.length + 1; i++) {
            if(i < svgLines.length) {
                result.push({
                    codeLine: i + 1,
                    codeLineContent: svgLines[i].text,
                    tabs: svgLines[i].tabs,
                });
            } else {
                result.push({
                    codeLine: i + 1,
                    codeLineContent: "",
                    tabs: 0,
                });
            }
        }

        return result;
    };
}
