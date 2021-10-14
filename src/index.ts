import 'reflect-metadata';
import { ExpressConfig } from './core/express/express';
import DotEnv from 'dotenv';
import {DatabaseConfig} from "./infrastructure/database/config/database-config";


DotEnv.config();
ExpressConfig.initConfig();
DatabaseConfig.Instance.initMongoose(process.env.URL_MONGOOSE).then((result) => {
    console.log('Sucessfully initialized connection' );
}).catch((error) => console.error(error));