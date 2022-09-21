import { DomObject } from "./../../util/DomObject.class";
import { DomTree } from "../../util/DomTree.class";
import { DomSerializerService } from "../abstract/DomSerializer.service";

export class DomSerializerServiceImpl implements DomSerializerService {
    public serializeDomTree(domTree: DomTree): string {
        if(domTree.domObjects.length === 0) {
            return "";
        }

        const xmlSerializer = new XMLSerializer();

        const firstElement = domTree.domObjects[0];
        const rootNode: HTMLElement = this.createHTMLElementFromDomObject(firstElement);
        for(let i = 1; i < domTree.domObjects.length; i++) {
            rootNode.appendChild(this.createHTMLElementFromDomObject(domTree.domObjects[i]));
        }

        const result = xmlSerializer.serializeToString(rootNode).replace("xmlns=\"http://www.w3.org/1999/xhtml\"", "").replace("  ", " ");
        return result;
    }

    private createHTMLElementFromDomObject(domObject: DomObject): HTMLElement {
        if(this.checkIfStringContainsAtLeastOneUppercaseCharacter(domObject.tagName)) {
            return this.setDomObjectAttributesToGeneratedHTMLElement(<HTMLElement>document
                .createElementNS("", domObject.tagName), domObject.attributes);
        } else {
            return this.setDomObjectAttributesToGeneratedHTMLElement(<HTMLElement>document
                .createElement(domObject.tagName), domObject.attributes);
        }
    }

    private setDomObjectAttributesToGeneratedHTMLElement(element: HTMLElement, 
        attributes: DomObject["attributes"]): HTMLElement {
        const attributeKeys = Object.keys(attributes);
        for(const key of attributeKeys) {
            if(this.checkIfStringContainsAtLeastOneUppercaseCharacter(key)) {
                element.setAttributeNS("", key, <string>attributes[key].value);
            } else {
                element.setAttribute(key, <string>attributes[key].value);
            }
        }
        return element;
    }

    private checkIfStringContainsAtLeastOneUppercaseCharacter(string: string) {
        let enoughOneCharacterIsUppercase = false;
        for(let i = 0; i < string.length; i++) {
            if(this.checkIfCharacterIsUppercase(string[i])) {
                enoughOneCharacterIsUppercase = true;
            }
        }
        return enoughOneCharacterIsUppercase;
    }

    private checkIfCharacterIsUppercase(char: string) {
        return /^[A-Z]*$/.test(char);
    }
}
