import {INoteRepository} from "../domain/Repository/note-repository";
import {NOTE_REPOSITORY} from "../core/dependency-inject/tokens";
import INotes from "../domain/Entities/note";
import { Inject, Service } from "typedi";

@Service()
export class GetAllNotesQuery {

    constructor(
        @Inject(NOTE_REPOSITORY)
        private readonly noteRepository: INoteRepository,
    ) {}

    execute(): Promise<Array<INotes>> {
        return this.noteRepository.viewAll();
    }

}