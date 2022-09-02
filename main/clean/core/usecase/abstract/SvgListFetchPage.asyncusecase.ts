import { AsyncUseCase } from "../../../../base/AsyncUseCase.interface";
import { SvgList } from "../../entity/SvgList.entity";

export abstract class SvgListFetchPageAsyncUseCase extends AsyncUseCase<SvgList> {
    abstract execute(page?: number, pageSize?: number, search?: string): Promise<SvgList>;
}
