import { RNDomManipulatorServiceImpl } from "./../../main/services/implementation/RNDomManipulator.serviceimpl";
/* eslint-disable max-len */

import { RNDomManipulatorService } from "../../main/services/abstract/RNDomManipulator.service";
import { DomAttributeValue } from "../../main/util/DomAttributeValue.class";
import { DomObject } from "../../main/util/DomObject.class";
import { DomTree } from "./../../main/util/DomTree.class";

describe("RNDomManipulationService tests", () => {
    it("Should RNDomManipulationService convert domTree properly", () => {
        const toConvertDomTree =
            new DomTree([
                new DomObject("svg", {viewBox: new DomAttributeValue("0 0 24 24", "STRING"), id: new DomAttributeValue("mdi-account", "STRING"), xmlns: new DomAttributeValue("http://www.w3.org/2000/svg", "STRING")}), 
                new DomObject("path", 
                    {d: new DomAttributeValue("M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", "STRING")}
                )]);
        const expectedDomTree =
            new DomTree([
                new DomObject("Svg", {viewBox: new DomAttributeValue("0 0 24 24", "STRING")}), 
                new DomObject("Path", 
                    {d: new DomAttributeValue("M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", "STRING")}
                )]);

        const rnDomManipulatorService: RNDomManipulatorService = new RNDomManipulatorServiceImpl();
        const resultDomTree = rnDomManipulatorService.convertDomTreeToReactNative(toConvertDomTree);

        expect(resultDomTree).toStrictEqual(expectedDomTree);
    });

    it("Should RNDomManipulationService convert one element domTree properly", () => {
        const toConvertDomTree =
            new DomTree([
                new DomObject("svg", {viewBox: new DomAttributeValue("0 0 24 24", "STRING"), id: new DomAttributeValue("mdi-account", "STRING"), xmlns: new DomAttributeValue("http://www.w3.org/2000/svg", "STRING")})]);
        const expectedDomTree =
            new DomTree([
                new DomObject("Svg", {viewBox: new DomAttributeValue("0 0 24 24", "STRING")})]);

        const rnDomManipulatorService: RNDomManipulatorService = new RNDomManipulatorServiceImpl();
        const resultDomTree = rnDomManipulatorService.convertDomTreeToReactNative(toConvertDomTree);

        expect(resultDomTree).toStrictEqual(expectedDomTree);
    });

    it("Should RNDomManipulationService convert empty domTree properly", () => {
        const toConvertDomTree =
            new DomTree([]);
        const expectedDomTree =
            new DomTree([]);

        const rnDomManipulatorService: RNDomManipulatorService = new RNDomManipulatorServiceImpl();
        const resultDomTree = rnDomManipulatorService.convertDomTreeToReactNative(toConvertDomTree);

        expect(resultDomTree).toStrictEqual(expectedDomTree);
    });

    it("Should RNDomManipulationService return empty domTree when encountering not supported tag", () => {
        const toConvertDomTree =
            new DomTree([
                new DomObject("svg", {viewBox: new DomAttributeValue("0 0 24 24", "STRING"), id: new DomAttributeValue("mdi-account", "STRING"), xmlns: new DomAttributeValue("http://www.w3.org/2000/svg", "STRING")}), 
                new DomObject("rectangle", 
                    {d: new DomAttributeValue("M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", "STRING")}
                )]);
        const expectedDomTree =
            new DomTree([]);

        const rnDomManipulatorService: RNDomManipulatorService = new RNDomManipulatorServiceImpl();
        const resultDomTree = rnDomManipulatorService.convertDomTreeToReactNative(toConvertDomTree);

        expect(resultDomTree).toStrictEqual(expectedDomTree);
    });
});
