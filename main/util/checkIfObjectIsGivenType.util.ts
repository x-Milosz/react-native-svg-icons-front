export const checkIfObjectIsGivenTypeUtil = <T>(obj: any, tKey: keyof T): obj is T => {
    return (<T>obj)[tKey] !== undefined;
};
