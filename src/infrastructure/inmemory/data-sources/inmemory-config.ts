import { FlowerEntity } from "../entities/flower.entity";

export class InMemoryData {
  private _flowers: Array<FlowerEntity> = [];

  get flowers() {
    return this._flowers;
  }
}
