import {INoteRepository} from '../../../domain/Repository/note-repository';
import INotes from '../../../domain/Entities/note';
import {Service} from 'typedi';
import {NotesModel} from "../../database/documents/model/notes-model";


@Service()
export class NotesRepositoryHttp implements INoteRepository {

    private notesRepositoryMongoose;

    constructor() {
        this.notesRepositoryMongoose = NotesModel;
    }

    async viewAll(): Promise<Array<INotes>> {
        try {
            return this.notesRepositoryMongoose.find({});
        } catch (exception: any) {
            throw new Error(exception.message);
        }
    }

    async createAll(note: INotes): Promise<INotes> {
        try {
            await this.notesRepositoryMongoose.create(note);
            return note;
        } catch (exception: any) {
            throw new Error(exception.message);
        }
    }


}