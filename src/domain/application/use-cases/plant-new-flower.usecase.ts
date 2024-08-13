import { Flower } from "../../entities/flower/flower";
import { IFlowerRepository } from "../gateways/flower.repository.interface";


export class PlantNewFlowerUseCase {
  private _flowerRepository: IFlowerRepository;

  constructor(flowerRepository: IFlowerRepository) {
    this._flowerRepository = flowerRepository;
  }

  async handle(flower: Flower): Promise<void> {
    await this._flowerRepository.save(flower);
  }
}
