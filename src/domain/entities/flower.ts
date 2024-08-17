import { randomUUID, UUID } from "crypto";

export class Flower {
  private _id: UUID;  
  private _name: string;  
  private _color: string;
  private _plantedAt: Date;
  
  constructor(  
    name: string,
    color: string
  ) {
    this._id = randomUUID();
    this._name = name;
    this._color = color;
    this._plantedAt = new Date();
    this.validate();
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

  validate() {
    if (!this.name) throw new Error('A flor precisa de um nome!');
    if (!this.color) throw new Error('A flor precisa de uma cor!');
  }
}
