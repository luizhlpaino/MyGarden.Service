import { Express } from 'express';
import { IFlowerRepository } from '../../domain/application/gateways/flower.repository.interface';

import { FlowerMapper } from '../../infrastructure/inmemory/mappers/flower/flower.mapper';
import { FlowerController } from '../../presentation/controllers/flower.controller';
import { FlowerControllerHandler } from '../controllers/flower.controller';
import { InMemoryData } from '../../infrastructure/inmemory/data-sources/inmemory-config';
import { FlowerInMemoryRepository } from '../../infrastructure/inmemory/gateways/flower/flower.repository';


export class APIConfig {
    private _flowerRepository: IFlowerRepository;
    private _flowerControllerHandler: FlowerControllerHandler;

    private _flowerController: FlowerController;
    
    private _app: Express; 
    
    constructor(app: Express, dataSource: InMemoryData) {
        this._app = app;
        
        this._flowerRepository = new FlowerInMemoryRepository(dataSource.flowers, new FlowerMapper());        
        
        this._flowerController = new FlowerController(this._flowerRepository);
        
        this._flowerControllerHandler = new FlowerControllerHandler(this._flowerController);

        this.mapRoutes();
    }

    mapRoutes() {
        this._flowerControllerHandler.routes.forEach(route => {
            console.log(`[Started Route]: ${route.method.toUpperCase()} ${route.path}`);
            switch(route.method) {
                case "get":
                    this._app.get(route.path, route.handler);
                    break;
                case "post":
                    this._app.post(route.path, route.handler);
            }
        });      
    }
}