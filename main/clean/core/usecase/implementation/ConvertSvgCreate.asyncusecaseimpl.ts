import { ConvertedSvgRepository } from "../../../data/repository/abstract/ConvertedSvg.repository";
import { ConvertedSvg } from "../../entity/ConvertedSvg.entity";
import { ConvertedSvgCreateAsyncUseCase } from "../abstract/ConvertedSvgCreate.asyncusecase";

export class ConvertedSvCreateAsyncUseCaseImpl implements ConvertedSvgCreateAsyncUseCase {
    private _convertedSvgRepository: ConvertedSvgRepository;

    constructor(convertedSvgRepository: ConvertedSvgRepository) {
        this._convertedSvgRepository = convertedSvgRepository;
    }

    public async execute(id: number): Promise<ConvertedSvg> {
        throw new Error("Method not implemented.");
    }
    
}
