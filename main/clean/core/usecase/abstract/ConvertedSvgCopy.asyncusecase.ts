import { ConvertedSvg } from "./../../entity/ConvertedSvg.entity";
import { AsyncUseCase } from "../../../../base/AsyncUseCase.interface";
import { UseCaseResponseWrapper } from "../../../../base/UseCaseResponseWrapper.interface";
import en from "../../../../front/languages/en";

export abstract class ConvertedSvgCopyAsyncUseCase extends AsyncUseCase<boolean> {
    abstract execute(convertedSvg: ConvertedSvg, strings: typeof en["convertedSvgCopy"]): Promise<UseCaseResponseWrapper<boolean>>;
}
