export class ConvertedSvg {
    private _id: number;
    private _name: string;
    private _svg: string;

    constructor(id: number, name: string, svg: string) {
        this._id = id;
        this._name = name;
        this._svg = svg;
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get svg(): string {
        return this._svg;
    }
    public set svg(value: string) {
        this._svg = value;
    }
}
