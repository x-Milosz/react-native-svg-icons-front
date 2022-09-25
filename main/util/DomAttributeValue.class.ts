export class DomAttributeValue<T> {
    private _value: T;
    private _type: "STRING" | "NUMBER" | "TERNARY_OPERATOR";

    constructor(value: T, type: "STRING" | "NUMBER" | "TERNARY_OPERATOR") {
        this._value = value;
        this._type = type;
    }

    public get value(): T {
        return this._value;
    }
    
    public set value(value: T) {
        this._value = value;
    }

    public get type(): "STRING" | "NUMBER" | "TERNARY_OPERATOR" {
        return this._type;
    }

    public set type(value: "STRING" | "NUMBER" | "TERNARY_OPERATOR") {
        this._type = value;
    }
}
