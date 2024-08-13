import { UUID } from "crypto";

export class FlowerEntity {
    private _id: UUID;
    private _name: string;
    private _color: string;
    private _plantedAt: Date;

    constructor(id: UUID, name: string, color: string, plantedAt: Date){
        this._id = id;
        this._name = name;
        this._color = color;
        this._plantedAt = plantedAt;
    }

    //#region [Getters and Setters]
    public get id(): UUID {
        return this._id;
    }

    public set id(value: UUID) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get color(): string {
        return this._color;
    }

    public set color(value: string) {
        this._color = value;
    }

    public get plantedAt(): Date {
        return this._plantedAt;
    }

    public set plantedAt(value: Date) {
        this._plantedAt = value;
    }
    //#endregion
}