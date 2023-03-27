import { SvgLines } from "./../../entity/ConvertedSvg.entity";
import { DefaultUseCaseResponse } from "../../../../base/DefaultUseCaseResponse.class";
import { UseCaseResponseWrapper } from "../../../../base/UseCaseResponseWrapper.interface";
import { DomOperatorService } from "../../../../services/abstract/DomOperator.service";
import { DomCreatorService } from "../../../../services/abstract/domoperatorinternalservices/DomCreator.service";
import { ResponseHandlerService } from "../../../../services/abstract/ResponseHandler.serivice";
import { RNDomManipulatorService } from "../../../../services/abstract/RNDomManipulator.service";
import { ConvertedSvgRepository } from "../../../data/repository/abstract/ConvertedSvg.repository";
import { ConvertedSvg } from "../../entity/ConvertedSvg.entity";
import { ConvertedSvgCreateAsyncUseCase } from "../abstract/ConvertedSvgCreate.asyncusecase";

export class ConvertedSvCreateAsyncUseCaseImpl implements ConvertedSvgCreateAsyncUseCase {
    private _convertedSvgRepository: ConvertedSvgRepository;
    private _domOperator: DomOperatorService;
    private _rnDomManipulatorService: RNDomManipulatorService;
    private _responseHandlerService: ResponseHandlerService;

    constructor(convertedSvgRepository: ConvertedSvgRepository, domOperator: DomOperatorService,
        rnDomManipulatorService: RNDomManipulatorService, responseHandlerService: ResponseHandlerService) {
        this._convertedSvgRepository = convertedSvgRepository;
        this._rnDomManipulatorService = rnDomManipulatorService;
        this._domOperator = domOperator;
        this._responseHandlerService = responseHandlerService;
    }

    public async execute(id: number): Promise<UseCaseResponseWrapper<ConvertedSvg>> {
        try {
            const singleSvg = await this._convertedSvgRepository.fetchSvg(id);
            const fistUpperCaseName = this.createProperName(singleSvg.data.name);   
            
            const svgLines: SvgLines = [];
            svgLines.push({text: "import React from \"react\";", tabs: 0});
            svgLines.push({text: "import { View } from \"react-native\";", tabs: 0});
            svgLines.push({text: "import Svg, { Path }  from \"react-native-svg\";", tabs: 0});
            svgLines.push({text: "", tabs: 0});
            svgLines.push({text: "", tabs: 0});
            svgLines.push({text: `interface ${fistUpperCaseName}I {`, tabs: 0});
            svgLines.push({text: "size: number;", tabs: 1});
            svgLines.push({text: "color: string;", tabs: 1});
            svgLines.push({text: "}", tabs: 0});
            svgLines.push({text: "", tabs: 0});
            svgLines.push({text: `const ${fistUpperCaseName} = ({ size, color }: ${fistUpperCaseName}I) => (`, tabs: 0});
            svgLines.push({text: "<View style={{ width: size, height: size }}>", tabs: 1});
            svgLines.push({text: this.parseSingleSvgAndGenerateRNSvgCode(singleSvg.data.svg), tabs: 2});
            svgLines.push({text: "</View>", tabs: 1});
            svgLines.push({text: ");", tabs: 0});
            svgLines.push({text: "", tabs: 0});
            svgLines.push({text: `export default ${fistUpperCaseName};`, tabs: 0}); 

            return this._responseHandlerService
                .handleResponse({id: id, name: singleSvg.data.name, svgLines: svgLines}, "convert_svg_create.success");
        } catch(e) {
            return this._responseHandlerService
                .handleError(e, {id: 0, name: "", svgLines: []}, "ConvertedSvCreateAsyncUseCaseImpl::execute");
        }
    }

    private parseSingleSvgAndGenerateRNSvgCode(svgStr: string): string {
        const domTree = this._domOperator.parseAndCreateDomTree(svgStr);
        const rnDomTree = this._rnDomManipulatorService.convertDomTreeToReactNative(domTree);
        return this._domOperator.serializeDomTree(rnDomTree);
    }
    
    private createProperName(svgName: string): string {
        if(svgName.length < 1) {
            return "";
        }


        let newStrList = [...svgName];

        newStrList[0] = newStrList[0].toUpperCase();
        for(let i = 1; i < newStrList.length; i++) {
            if(newStrList[i] === "-") {
                if(i + 1 < newStrList.length) {
                    newStrList[i + 1] = newStrList[i + 1].toUpperCase();
                }
            }
        }
        
        newStrList = newStrList.filter(it => it !== "-");
        return newStrList.join("");
    }
}
