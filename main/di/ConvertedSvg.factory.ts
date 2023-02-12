import { rnDomManipulatorServiceImpl } from "./../services/implementation/RNDomManipulator.serviceimpl";
import { domOperatorServiceImpl } from "./../services/implementation/DomOperator.serviceimpl";
import { responseHandlerServiceImpl, ResponseHandlerServiceImpl } from "./../services/implementation/ResponseHandler.serviceimpl";
import { ConvertedSvgRepositoryImpl } from "./../clean/data/repository/implementation/ConvertedSvg.repositoryimpl";
import { ConvertedSvgRepository } from "../clean/data/repository/abstract/ConvertedSvg.repository";
import { ConvertedSvgCreateAsyncUseCase } from "../clean/core/usecase/abstract/ConvertedSvgCreate.asyncusecase";
import { ConvertedSvCreateAsyncUseCaseImpl } from "../clean/core/usecase/implementation/ConvertSvgCreate.asyncusecaseimpl";

export class ConvertedSvgFactory {
    private _convertedSvgRepository: ConvertedSvgRepository = new ConvertedSvgRepositoryImpl();

    public getConvertedSvgCreateUseCase(): ConvertedSvgCreateAsyncUseCase {
        return new ConvertedSvCreateAsyncUseCaseImpl(this._convertedSvgRepository, 
            domOperatorServiceImpl, rnDomManipulatorServiceImpl, responseHandlerServiceImpl);
    }
}
