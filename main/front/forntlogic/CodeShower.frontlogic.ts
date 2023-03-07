import { SvgLines } from "./../../main/clean/core/entity/ConvertedSvg.entity";
export namespace CodeShowFrontLogic {
    export type ParseCodeResultT = {codeLine: number; codeLineContent: string, tabs: nuber}[];

    export const parseCode = (svgLines: SvgLines): ParseCodeResultT => {

        const result: ParseCodeResultT = [];

        for(let i = 1; i < svgLines.length + 1; i++) {
            if(i < svgLines.length) {
                result.push({
                    codeLine: i,
                    codeLineContent: svgLines[i].text,
                    tabs: svgLines[i].tabs,
                });
            } else {
                result.push({
                    codeLine: i,
                    codeLineContent: "",
                    tabs: 0,
                });
            }
        }

        return result;
    };
}
