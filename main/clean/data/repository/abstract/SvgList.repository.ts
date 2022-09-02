import { SvgListDto } from "./../../dto/SvgList.dto";

export abstract class SvgListRepository {
    abstract fetchSvgPage(page?: number, pageSize?: number, search?: string): Promise<SvgListDto>;
}
