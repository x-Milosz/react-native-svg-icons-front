import { DomObject } from "./../../util/DomObject.class";
import { DomTree } from "../../util/DomTree.class";
import { RNDomManipulatorService } from "../abstract/RNDomManipulator.service";

interface RegisteredTagConversionsI {
    svg: "Svg",
    path: "Path",
}

export class RNDomManipulatorServiceImpl implements RNDomManipulatorService {
    private _registeredTagConversions: RegisteredTagConversionsI = {
        svg: "Svg",
        path: "Path",
    };

    private _listOfToDeleteAttributeNamesInTheConversion = [
        "id",
    ];


    public convertDomTreeToReactNative(domTree: DomTree): DomTree {
        try {
            const convertedDomTree = new DomTree([]);
            for(const domObject of domTree.domObjects) {
                convertedDomTree.domObjects.push(this.convertDomObject(domObject));
            }
            return convertedDomTree;
        } catch(e) {
            console.error(e);
            return new DomTree([]);
        }
    }

    private convertDomObject(domObject: DomObject): DomObject {
        const convertedDomObject = new DomObject(this.convertDomObjectTagName(domObject.tagName), 
            this.convertDomObjectAttributes(domObject.attributes));
        return convertedDomObject;
    }

    private convertDomObjectTagName(tagName: DomObject["tagName"]): DomObject["tagName"] {
        if(!Object.keys(this._registeredTagConversions).includes(tagName)) {
            throw new Error(`RNDomManipulatorServiceImpl::convertDomObjectTagName: conversion for tag "${tagName}" is not supported`);
        }
        return this._registeredTagConversions[<keyof RegisteredTagConversionsI>tagName];
    }

    private convertDomObjectAttributes(attributes: DomObject["attributes"]): DomObject["attributes"] {
        const convertedDomObjectAttributes: DomObject["attributes"] = {};

        let doNotSetThisAttribute: boolean;
        const attributesKeys = Object.keys(attributes);
        for(const key of attributesKeys) {
            doNotSetThisAttribute = false;
            for(const toDeleteAttributeName of this._listOfToDeleteAttributeNamesInTheConversion) {
                if(key === toDeleteAttributeName) {
                    doNotSetThisAttribute = true;
                }
            }

            if(doNotSetThisAttribute) {
                continue;
            }

            convertedDomObjectAttributes[key] = attributes[key];
        }
        return convertedDomObjectAttributes;
    }
}

export const rnDomManipulatorServiceImpl: RNDomManipulatorService = new RNDomManipulatorServiceImpl();
