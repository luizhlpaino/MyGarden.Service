require('dotenv').config();
import { GardenAPI } from './api';
import { InMemoryData } from './infrastructure/inmemory/data-sources/inmemory-config';

const inMemoryData = new InMemoryData();
const gardenApi = new GardenAPI(inMemoryData);

gardenApi.start();
