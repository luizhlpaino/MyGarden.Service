import { Flower } from "../../entities/flower/flower";


export interface IFlowerRepository {
  save(flower: Flower): Promise<void>;
  getAll(): Promise<Array<Flower>>;
}
