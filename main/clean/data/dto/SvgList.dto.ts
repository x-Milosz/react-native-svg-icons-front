import { DtoWrapper } from "./DtoWrapper.dto";


export type SvgListDto = DtoWrapper<SvgListDataDtoI>;

export interface SvgListDataDtoI {
    page:        number;
    pages:       number;
    total:       number;
    contentList: SvgListDataContentListDtoI[];
}

export interface SvgListDataContentListDtoI {
    id:   number;
    name: string;
    svg: string;
}
