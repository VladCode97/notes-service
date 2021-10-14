import {Inject, Service} from 'typedi';
import {Body, Get, JsonController, Post, Res} from "routing-controllers";
import {Response} from 'express';
import {GetAllNotesQuery} from '../../../application/get-all-notes-query';
import {CreateNoteCommand} from "../../../application/create-note-command";
import INotes from "../../../domain/Entities/note";


@Service()
@JsonController('/Notes')
export class NotesController {

    constructor(
        @Inject()
        private readonly getAllNotesQuery: GetAllNotesQuery,
        @Inject()
        private readonly createNotesCommand: CreateNoteCommand,
    ) {
    }

    @Get('/GetNotes')
    async getNotes(@Res() response: Response) {
        return response.json({message: await this.getAllNotesQuery.execute()})
    }

    @Post('/CreateNote')
    async createNote(@Body() note: INotes, @Res() response: Response) {
        return response.json({
            message: await this.createNotesCommand.execute(note)
        })
    }

}