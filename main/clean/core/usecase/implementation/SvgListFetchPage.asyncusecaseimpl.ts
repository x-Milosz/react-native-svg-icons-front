import { SvgList } from "../../entity/SvgList.entity";
import { SvgListRepository } from "../../../data/repository/abstract/SvgList.repository";
import { SvgListFetchPageAsyncUseCase } from "../abstract/SvgListFetchPage.asyncusecase";
import { UseCaseResponseWrapper } from "../../../../base/UseCaseResponseWrapper.interface";
import { ResponseHandlerService } from "../../../../services/abstract/ResponseHandler.serivice";

export class SvgListFetchPageUseCaseImpl implements SvgListFetchPageAsyncUseCase {
    private _svgListRepository : SvgListRepository;
    private _responseHandlerService: ResponseHandlerService;

    constructor(svgListRepository: SvgListRepository, responseHandlerService: ResponseHandlerService) {
        this._svgListRepository = svgListRepository;
        this._responseHandlerService = responseHandlerService;
    }

    public async execute(page?: number, pageSize?: number, search?: string): Promise<UseCaseResponseWrapper<SvgList>> {
        try {
            const svgListDto = await this._svgListRepository.fetchSvgPage(page, pageSize, search);
            
            return this._responseHandlerService.handleResponse({
                page: svgListDto.data.page, 
                pages: svgListDto.data.pages, 
                total: svgListDto.data.total,
                contentList: svgListDto.data.contentList}, 
            "svg_list_fetch_page.success");
        } catch(e) {
            return this._responseHandlerService.handleError(e, {
                page: 0,
                pages: 0,
                total: 0,
                contentList: []
            }, "SvgListFetchPageUseCaseImpl::execute");
        }
    }

}
