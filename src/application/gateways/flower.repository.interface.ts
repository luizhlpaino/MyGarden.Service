import { Flower } from "../../domain/entities/flower";


export interface IFlowerRepository {
  save(flower: Flower): Promise<void>;
  getAll(): Promise<Array<Flower>>;
}
