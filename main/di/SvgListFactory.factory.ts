import { SvgListFetchPageAsyncUseCase } from 
    "../clean/core/usecase/abstract/SvgListFetchPage.asyncusecase";
import { SvgListFetchPageUseCaseImpl } from 
    "../clean/core/usecase/implementation/SvgListFetchPage.asyncusecaseimpl";
import { SvgListRepository } from "../clean/data/repository/abstract/SvgList.repository";

export class SvgListFactory {
    private _svgListRepository : SvgListRepository;
    
    constructor(svgListRepository: SvgListRepository) {
        this._svgListRepository = svgListRepository;
    }

    public getSvgListFetchPageUseCase(): SvgListFetchPageAsyncUseCase {
        return new SvgListFetchPageUseCaseImpl(this._svgListRepository);
    }
}
