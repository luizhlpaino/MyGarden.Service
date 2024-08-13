import { Flower } from "../../entities/flower/flower";
import { IFlowerRepository } from "../gateways/flower.repository.interface";



export class GetAllFlowersUseCase {
  private _flowerRepository: IFlowerRepository;

  constructor(flowerRepository: IFlowerRepository) {
    this._flowerRepository = flowerRepository;
  }

  async handle(): Promise<Array<Flower>> {
    return this._flowerRepository.getAll();
  }
}
