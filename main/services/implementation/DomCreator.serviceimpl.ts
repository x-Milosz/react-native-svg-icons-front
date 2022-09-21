import { DomObject } from "./../../util/DomObject.class";
import { DomTree } from "../../util/DomTree.class";
import { DomCreatorService } from "../abstract/DomCreator.service";
import { DomAttributeValue } from "../../util/DomAttributeValue.class";



export class DomCreatorServiceImpl implements DomCreatorService {
    public parseAndCreateDomTree(toParseString: string): DomTree {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(toParseString, "text/html");
            const body = doc.body;

            const domObjects: DomObject[] = [];
            let name: string | null;
            for(const element of body.getElementsByTagName("*")) {
                name = element.tagName;
                if(name === null) {
                    throw new Error("DomCreatorServiceImpl::parseAndCreateDomTree: element has to have a name attribute");
                }
                domObjects.push(new DomObject(name, this.parseElementAttributes(element.attributes)));
            }
            return new DomTree(domObjects);
        } catch(e) {
            console.error(e);
            return new DomTree([]);
        }
    }

    private parseElementAttributes(attributes: NamedNodeMap): Record<string, DomAttributeValue<unknown>> {
        const parsedAttributes: DomObject["attributes"] = {};
        for(const attribute of attributes) {
            parsedAttributes[attribute.name] = this.parseAttributeValueToTheDomAttributeVale(attribute.value);
        }
        return parsedAttributes;
    }

    private parseAttributeValueToTheDomAttributeVale(attributeValue: string): DomAttributeValue<unknown> {
        const parsedValue = Number(attributeValue);

        if(!isNaN(parsedValue)) {
            return new DomAttributeValue<number>(parsedValue, "NUMBER");
        } else {
            return new DomAttributeValue<string>(attributeValue, "STRING");
        }
    }
}
