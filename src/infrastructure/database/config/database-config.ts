import Mongoose from 'mongoose';

export class DatabaseConfig {

    private static databaseConfig: DatabaseConfig;

    private constructor(){}

    static get Instance(): DatabaseConfig {
        if(DatabaseConfig.databaseConfig === undefined) {
            DatabaseConfig.databaseConfig = new DatabaseConfig();
        }
        return DatabaseConfig.databaseConfig;
    }

    initMongoose(url: string){
        return Mongoose.connect(url);
    }

}