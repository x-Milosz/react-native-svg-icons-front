import { SvgDto } from "../../../main/clean/data/dto/Svg.dto";
import { ConvertedSvgRepository } from "../../../main/clean/data/repository/abstract/ConvertedSvg.repository";

export class DummyConvertedSvgRepository implements ConvertedSvgRepository {
    public async fetchSvg(id: number): Promise<SvgDto> {
        const res: SvgDto = {
            data: {
                name: "account",
                // eslint-disable-next-line max-len
                svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-account\" viewBox=\"0 0 24 24\"><path d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\"/></svg>",
            },
            message: "Pomyślnie pobrano ikone svg",
        }; 
        return res;
    }

}
