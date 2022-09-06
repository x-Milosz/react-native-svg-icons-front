import { ConvertedSvg } from "./../../entity/ConvertedSvg.entity";
import { AsyncUseCase } from "../../../../base/AsyncUseCase.interface";

export abstract class ConvertedSvgCreateAsyncUseCase extends AsyncUseCase<ConvertedSvg> {
    abstract execute(id: number): Promise<ConvertedSvg>;
}
