import { IFlowerRepository } from "src/application/gateways/flower.repository.interface";
import { Flower } from "src/domain/entities/flower";
import { DataSource } from "typeorm";

export class FlowerMongoDBRepository implements IFlowerRepository {
    private _dataSource;

    constructor(dataSource: DataSource) {
        this._dataSource = dataSource;
    }

    save(flower: Flower): Promise<void> {
        this._dataSource.
    }

    getAll(): Promise<Array<Flower>> {
        throw new Error("Method not implemented.");
    }
}