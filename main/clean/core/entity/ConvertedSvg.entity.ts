export interface ConvertedSvg {
    id: number;
    name: string;
    svgLines: SvgLines;
}

export type SvgLines = SvgLine[];

export interface SvgLine {
    tabs: number;
    text: string;
}
