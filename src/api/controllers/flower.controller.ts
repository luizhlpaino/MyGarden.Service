import { Request, Response } from "express"
import { IFlowerInput } from "../../application/dtos/inputs/flower.input";
import { APIController, APIRoute } from "../interfaces/controller.interface";
import { FlowerController } from "src/presentation/controllers/flower.controller";



export class FlowerControllerHandler implements APIController {
    private _flowerController: FlowerController;
    routes: APIRoute[];
    
    constructor(flowerController: FlowerController){
        this._flowerController = flowerController;

        this.routes = [
            {
                path: "/v1/flowers",
                method: "get",
                handler: (req: Request, res: Response) => new FlowerControllerHandler(this._flowerController).getAllFlowers(req, res)
            },
            {
                path: "/v1/flowers",
                method: "post",
                handler: (req: Request, res: Response) => new FlowerControllerHandler(this._flowerController).plantNewFlower(req, res)
            }
        ]
    }

    async plantNewFlower(req: Request, res: Response): Promise<void> {        
        const input: IFlowerInput = req.body;
        console.log(`[POST][/v1/flowers]: Planting new flower: ${ JSON.stringify(input) }`);
        await res.status(201).send(await this._flowerController.plantNewFlower(input));
    }

    async getAllFlowers(req: Request, res: Response): Promise<void> {        
        console.log(`[GET][/v1/flowers]: Searching for flowers...`);
        await res.status(200).send(await this._flowerController.getAllFlowers());
    }
}