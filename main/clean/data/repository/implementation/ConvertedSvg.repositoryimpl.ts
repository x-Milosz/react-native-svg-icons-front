import { defaultInstanceService } from "./../../../../base/Instance.service";
import { InstanceService } from "../../../../base/Instance.service";
import { ConvertedSvgRepository } from "../abstract/ConvertedSvg.repository";
import { SvgDto } from "../../dto/Svg.dto";

export class ConvertedSvgRepositoryImpl implements ConvertedSvgRepository {
    private _instanceService: InstanceService = defaultInstanceService;

    public async fetchSvg(id: number): Promise<SvgDto> {
        const res = await this._instanceService.axios.get<SvgDto>(`icons/${id}`);
        return res.data;
    }
}
