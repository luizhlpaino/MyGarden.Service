import { IDataSource } from "src/infrastructure/interface/data-source.interface";
import { IFlowerRepository } from "../../../../application/gateways/flower.repository.interface";
import { Flower } from "../../../../domain/entities/flower";
import { FlowerEntity } from "../../entities/flower.entity";
import { FlowerMapper } from "../../mappers/flower/flower.mapper";

export class FlowerInMemoryRepository implements IFlowerRepository {
  private _flowerDataSource: IDataSource;
  private _flowerMapper: FlowerMapper;
  constructor(flowerDataSource: IDataSource, flowerMapper: FlowerMapper){
    this._flowerDataSource = flowerDataSource;
    this._flowerMapper = flowerMapper;
  }
  
  save(flower: Flower): Promise<void> {
    return new Promise((resolve, reject) => {
      const flowerEntity = this._flowerMapper.toEntity(flower);
      this._flowerDataSource.push(flowerEntity);
      resolve();
    });
  }

  getAll(): Promise<Array<Flower>> {
    return new Promise((resolve, reject) => {
      const flowers: Array<Flower> = this._flowerDataSource.map(flowerEntity => this._flowerMapper.toDomain(flowerEntity));
      resolve(flowers);
    });
  }
}