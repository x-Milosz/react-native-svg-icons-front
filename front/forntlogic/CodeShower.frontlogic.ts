export namespace CodeShowFrontLogic {
    export type ParseCodeResultT = {codeLine: number; codeLineContent: string}[];

    export const parseCode = (code: string): ParseCodeResultT => {
        const lines = code.split("\n");

        const result: ParseCodeResultT = [];

        for(let i = 1; i < lines.length + 1; i++) {
            if(i < lines.length) {
                result.push({
                    codeLine: i,
                    codeLineContent: lines[i],
                });
            } else {
                result.push({
                    codeLine: i,
                    codeLineContent: "",
                });
            }
        }

        return result;
    };
}
