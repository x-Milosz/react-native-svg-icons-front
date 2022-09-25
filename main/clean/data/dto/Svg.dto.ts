import { DtoWrapper } from "./DtoWrapper.dto";

export type SvgDto = DtoWrapper<SvgDataI>;

export interface SvgDataI {
    name: string;
    svg: string;
}
