import { responseHandlerServiceImpl } from "./../services/implementation/ResponseHandler.serviceimpl";
import { ResponseHandlerServiceImpl } from "../services/implementation/ResponseHandler.serviceimpl";
import { SvgListRepositoryImpl } from "../clean/data/repository/implementation/SvgList.reposiotryimpl";
import { SvgListFetchPageAsyncUseCase } from 
    "../clean/core/usecase/abstract/SvgListFetchPage.asyncusecase";
import { SvgListFetchPageUseCaseImpl } from 
    "../clean/core/usecase/implementation/SvgListFetchPage.asyncusecaseimpl";
import { SvgListRepository } from "../clean/data/repository/abstract/SvgList.repository";
import { ResponseHandlerService } from "../services/abstract/ResponseHandler.serivice";

export class SvgListFactory {
    private _svgListRepository : SvgListRepository = new SvgListRepositoryImpl();


    public getSvgListFetchPageUseCase(): SvgListFetchPageAsyncUseCase {
        return new SvgListFetchPageUseCaseImpl(this._svgListRepository, responseHandlerServiceImpl);
    }
}
