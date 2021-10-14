import {INoteRepository} from "../domain/Repository/note-repository";
import INotes from "../domain/Entities/note";
import {Inject} from "typedi";
import {NOTE_REPOSITORY} from "../core/dependency-inject/tokens";
import { Service } from 'typedi';

@Service()
export class CreateNoteCommand {
    constructor(
        @Inject(NOTE_REPOSITORY)
        private readonly noteRepository: INoteRepository,
    ) {
    }

    async execute(model: INotes): Promise<INotes> {
        return this.noteRepository.createAll(model);
    }

}