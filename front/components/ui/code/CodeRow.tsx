import React from "react";

interface CodeRowI {
    codeLine: number;
    codeLineContent: string;
}

const CodeRow = ({codeLine, codeLineContent}: CodeRowI) => {
    return (
        <tr>
            <td>{codeLine}</td>
            <td>{codeLineContent}</td>
        </tr>
    );
};

export default CodeRow;
