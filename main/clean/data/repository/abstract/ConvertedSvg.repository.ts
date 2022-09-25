import { SvgDto } from "../../dto/Svg.dto";

export abstract class ConvertedSvgRepository {
    abstract fetchSvg(id: number): Promise<SvgDto>
}
