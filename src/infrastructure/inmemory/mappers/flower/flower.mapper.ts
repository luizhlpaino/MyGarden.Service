import { Flower } from "../../../../domain/entities/flower/flower";
import { FlowerEntity } from "../../entities/flower.entity";


export class FlowerMapper {
    toDomain(flowerEntity: FlowerEntity): Flower {
        const flower = new Flower(
            flowerEntity.name,
            flowerEntity.color
        );

        flower.id = flowerEntity.id;
        flower.plantedAt = flowerEntity.plantedAt;
 
        return flower;
    }

    toEntity(flower: Flower): FlowerEntity {
        const flowerEntity = new FlowerEntity(
            flower.id,
            flower.name,
            flower.color,
            flower.plantedAt
        );

        return flowerEntity;
    }
}