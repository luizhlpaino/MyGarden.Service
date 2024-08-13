import { Request, Response } from 'express';
import { APIConfig } from './config/config';
import { InMemoryData } from '../infrastructure/inmemory/data-sources/inmemory-config';



export class GardenAPI {  
  private _inMemoryData: InMemoryData;
  constructor(inMemoryData: InMemoryData) {
    this._inMemoryData = inMemoryData
  }

  start() {
    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');

    const app = express();

    //middlewares
    app.use(cors());
    app.use(bodyParser.json());

    //routes
    app.get('/health', (req: Request, res: Response) => {
      res.status(200).json({ success: true });
    });

    new APIConfig(app, this._inMemoryData);

    //start point
    app.listen(process.env.API_PORT, () => {
      console.log(`[Application Started][Port: ${process.env.API_PORT}]`);
    });
  }

  
}
