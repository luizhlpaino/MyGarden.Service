import { IFlowerOutput } from "../../application/dtos/outputs/flower.output";
import { Flower } from "../../domain/entities/flower";


export class FlowerPresenter {
    static toFlowerOutput(flower: Flower): IFlowerOutput {
        return {
            color: flower.color,
            name: flower.name,
            plantedAt: flower.plantedAt
        };
    }
}