import { defaultInstanceService, InstanceService } from "../../../../base/Instance.service";
import { SvgListDto } from "../../dto/SvgList.dto";
import { SvgListRepository } from "../abstract/SvgList.repository";

export class SvgListRepositoryImpl implements SvgListRepository {
    private _instanceService: InstanceService = defaultInstanceService;

    public async fetchSvgPage(page?: number, pageSize?: number, search?: string): 
    Promise<SvgListDto> {
        const res = await this._instanceService.axios.get<SvgListDto>("icons", 
            {params: {page: page, pageSize: pageSize, search: search}});
        return res.data;
    }
}
