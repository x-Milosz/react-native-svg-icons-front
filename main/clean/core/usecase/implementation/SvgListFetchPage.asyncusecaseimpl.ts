import { SvgList } from "../../entity/SvgList.entity";
import { SvgListRepository } from "../../../data/repository/abstract/SvgList.repository";
import { SvgListFetchPageAsyncUseCase } from "../abstract/SvgListFetchPage.asyncusecase";

export class SvgListFetchPageUseCaseImpl implements SvgListFetchPageAsyncUseCase {
    private _svgListRepository : SvgListRepository;

    constructor(svgListRepository: SvgListRepository) {
        this._svgListRepository = svgListRepository;
    }

    public async execute(page?: number, pageSize?: number, search?: string): Promise<SvgList> {
        try {
            const svgListDto = await this._svgListRepository.fetchSvgPage(page, pageSize, search);
            return new SvgList(svgListDto.data.page, 
                svgListDto.data.pages, svgListDto.data.total, svgListDto.data.contentList);
        } catch(e) {
            console.error(e);
            return new SvgList(0, 0, 0, []);
        }
    }

}
