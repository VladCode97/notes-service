import { createExpressServer, useContainer } from 'routing-controllers';
import { NotesController } from '../../infrastructure/HTTP/controllers/note-controller';
import { Container } from '../dependency-inject/container';


export class ExpressConfig {

    static initConfig(): void {
        useContainer(Container);
        createExpressServer({
            controllers: [
                NotesController
            ]
        }).listen(5000, () => console.log(`http//localhost:${5000}`));
    }
    
}