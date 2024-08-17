
import { GetAllFlowersUseCase } from "../../application/use-cases/get-all-flowers.usecase";
import { PlantNewFlowerUseCase } from "../../application/use-cases/plant-new-flower.usecase";
import { IFlowerInput } from "src/application/dtos/inputs/flower.input";
import { IFlowerOutput } from "src/application/dtos/outputs/flower.output";
import { IFlowerRepository } from "src/application/gateways/flower.repository.interface";
import { FlowerPresenter } from "../presenters/flower.presenter";
import { Flower } from "../../domain/entities/flower";

export class FlowerController {
  _flowerRepository: IFlowerRepository;

  constructor(flowerRepository: IFlowerRepository) {
    this._flowerRepository = flowerRepository;
  }

  async plantNewFlower(input: IFlowerInput): Promise<void> {
    const plantNewFlowerUseCase = new PlantNewFlowerUseCase(this._flowerRepository);
    
    const newFlower = new Flower(
      input.name,
      input.color
    );

    await plantNewFlowerUseCase.handle(newFlower);
  }

  async getAllFlowers(): Promise<Array<IFlowerOutput>> {
    const getAllFlowersUseCase = new GetAllFlowersUseCase(this._flowerRepository);
    const flowers = await getAllFlowersUseCase.handle();    
    return flowers.map(flower => FlowerPresenter.toFlowerOutput(flower));
  }
}
