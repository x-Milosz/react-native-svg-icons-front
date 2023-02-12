import { ResponseHandlerServiceImpl } from "./../../main/services/implementation/ResponseHandler.serviceimpl";
/* eslint-disable max-len */
import { DomSerializerServiceImpl } from "../../main/services/implementation/domoperatorintenalservices/DomSerializer.serviceimpl";
import { RNDomManipulatorServiceImpl } from "./../../main/services/implementation/RNDomManipulator.serviceimpl";
import { ConvertedSvgCreateAsyncUseCase } from 
    "../../main/clean/core/usecase/abstract/ConvertedSvgCreate.asyncusecase";
import { ConvertedSvCreateAsyncUseCaseImpl } from 
    "../../main/clean/core/usecase/implementation/ConvertSvgCreate.asyncusecaseimpl";
import { DummyConvertedSvgRepository } from "../data/dummyrepositories/DummyConvertedSvg.repository";
import { DomOperatorServiceImpl } from "../../main/services/implementation/DomOperator.serviceimpl";
import { DomCreatorServiceImpl } from "../../main/services/implementation/domoperatorintenalservices/DomCreator.serviceimpl";

describe("ConvertSvgCreate tests", () => {
    it("ConvertSvgCreate default transition", async () => {
        const convertedSvgCreate: ConvertedSvgCreateAsyncUseCase
             = new ConvertedSvCreateAsyncUseCaseImpl(new DummyConvertedSvgRepository(),  
                 new DomOperatorServiceImpl(new DomCreatorServiceImpl(), new DomSerializerServiceImpl()), 
                 new RNDomManipulatorServiceImpl(), new ResponseHandlerServiceImpl());
        const response = await convertedSvgCreate.execute(1);
        const svg = response.entity.svgLines.map(it => it.text).join("");
        expect(svg).toEqual(
            "import * as React from \"react\";" +
            "import { View } from \"react-native\";" +
            "import Svg, { Path, Color }  from \"react-native-svg\";" +
            "" +
            "" +
            "interface AccountI {" +
            "size: number;" +
            "color: Color;" +
            "}" +
            "" +
            "const Account = ({ size, color }: AccountI) => (" +
            "<View style={{ width: size, height: size }}>" +
                        "<Svg xmlns=\"http://www.w3.org/2000/svg\"><Path d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\"/></Svg>" +
            "</View>" +
            ");" + 
            "" +
            "export default Account;"
        );
    });

    it("ConvertSvgCreate should return error wheen picked not existing svg", async () => {
        const convertedSvgCreate: ConvertedSvgCreateAsyncUseCase
            = new ConvertedSvCreateAsyncUseCaseImpl(new DummyConvertedSvgRepository(), 
                new DomOperatorServiceImpl(new DomCreatorServiceImpl(), new DomSerializerServiceImpl()), 
                new RNDomManipulatorServiceImpl(), new ResponseHandlerServiceImpl());
        const response = await convertedSvgCreate.execute(2137);
        const svg = response.entity.svgLines.map(it => it.text).join("");
        expect(svg).toEqual(
            "import * as React from \"react\";" +
            "import { View } from \"react-native\";" +
            "import Svg, { Path, Color }  from \"react-native-svg\";" +
            "" +
            "" +
            "interface AccountI {" +
            "size: number;" +
            "color: Color;" +
            "}" +
            "" +
            "const Account = ({ size, color }: AccountI) => (" +
            "<View style={{ width: size, height: size }}>" +
                        "<Svg xmlns=\"http://www.w3.org/2000/svg\"><Path d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\"/></Svg>" +
            "</View>" +
            ");" + 
            "" +
            "export default Account;"
        );
    });
});
