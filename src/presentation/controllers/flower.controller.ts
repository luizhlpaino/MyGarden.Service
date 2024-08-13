import { IFlowerInput } from "../../domain/application/dtos/inputs/flower.input";
import { IFlowerOutput } from "../../domain/application/dtos/outputs/flower.output";
import { IFlowerRepository } from "../../domain/application/gateways/flower.repository.interface";
import { GetAllFlowersUseCase } from "../../domain/application/use-cases/get-all-flowers.usecase";
import { PlantNewFlowerUseCase } from "../../domain/application/use-cases/plant-new-flower.usecase";
import { Flower } from "../../domain/entities/flower/flower";
import { FlowerPresenter } from "../presenters/flower.presenter";


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
    return await flowers.map(flower => FlowerPresenter.toFlowerOutput(flower));
  }
}
