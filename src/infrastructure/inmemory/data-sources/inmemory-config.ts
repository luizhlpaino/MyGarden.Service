import { IDataSource } from "src/infrastructure/interface/data-source.interface";
import { FlowerEntity } from "../entities/flower.entity";

export class InMemoryDataSource implements IDataSource {
  private _flowers: Array<FlowerEntity> = [];  
  get flowers() {
    return this._flowers;
  }

  getRepository<T>() {
    
  }

  save<T>() {
    throw new Error("Method not implemented.");
  }    
}
