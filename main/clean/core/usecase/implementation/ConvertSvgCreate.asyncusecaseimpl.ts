import { AsyncWebWorkerService } from "../../../../services/abstract/AsyncWebWorker.service";
import { DomOperatorService } from "../../../../services/abstract/DomOperator.service";
import { DomCreatorService } from "../../../../services/abstract/domoperatorinternalservices/DomCreator.service";
import { RNDomManipulatorService } from "../../../../services/abstract/RNDomManipulator.service";
import { ConvertedSvgRepository } from "../../../data/repository/abstract/ConvertedSvg.repository";
import { ConvertedSvg } from "../../entity/ConvertedSvg.entity";
import { ConvertedSvgCreateAsyncUseCase } from "../abstract/ConvertedSvgCreate.asyncusecase";

export class ConvertedSvCreateAsyncUseCaseImpl implements ConvertedSvgCreateAsyncUseCase {
    private _convertedSvgRepository: ConvertedSvgRepository;
    private _asyncWebWorkerService: AsyncWebWorkerService;
    private _domOperator: DomOperatorService;
    private _rnDomManipulatorService: RNDomManipulatorService;

    constructor(convertedSvgRepository: ConvertedSvgRepository, 
        asyncWebWorkerService: AsyncWebWorkerService, domOperator: DomOperatorService,
        rnDomManipulatorService: RNDomManipulatorService) {
        this._convertedSvgRepository = convertedSvgRepository;
        this._asyncWebWorkerService = asyncWebWorkerService;
        this._rnDomManipulatorService = rnDomManipulatorService;
        this._domOperator = domOperator;
    }

    public async execute(id: number): Promise<ConvertedSvg> {
        const asyncWebWorkerOperation = async () => {
            try {
                const singleSvg = await this._convertedSvgRepository.fetchSvg(id);
                
                const firstUpperCaseNameChars = [...singleSvg.data.name];
                firstUpperCaseNameChars[0] = firstUpperCaseNameChars[0].toUpperCase();
                const fistUpperCaseName = firstUpperCaseNameChars.join("");
                
                // TODO: make View by generated programmatically  
                const output = 
                "import * as React from \"react\";" +
                "\nimport { View } from \"react-native\";" +
                "\nimport Svg, { Path, Color }  from \"react-native-svg\";" +
                "\nimport IconI from \"../../interface/Icon.interface\";" +
                "\n" +
                `\ninterface ${fistUpperCaseName}I {` +
                "\n    size: number;" +
                "\n    color: Color;" +
                "\n}" +
                "\n" +
                `\nconst ${fistUpperCaseName} = ({ size, color }: ${fistUpperCaseName}I) => (` +
                "\n    <View style={{ width: size, height: size }}>\n    " +
                        this.parseSingleSvgAndGenerateRNSvgCode(singleSvg.data.svg) +
                "\n    </View>" +
                "\n;" + 
                "\n" +
                `\nexport default ${fistUpperCaseName};`;

                return new ConvertedSvg(id, singleSvg.data.name, output);
            } catch(e) {
                console.error(e);
                return new ConvertedSvg(0, "", "");
            }
        };
        const convertedSvg = this._asyncWebWorkerService
            .startWebWorker<ConvertedSvg>(asyncWebWorkerOperation);
        return convertedSvg;
    }

    private parseSingleSvgAndGenerateRNSvgCode(svgStr: string): string {
        const domTree = this._domOperator.parseAndCreateDomTree(svgStr);
        const rnDomTree = this._rnDomManipulatorService.convertDomTreeToReactNative(domTree);
        return this._domOperator.serializeDomTree(rnDomTree);
    }
    

}
