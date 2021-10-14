import 'reflect-metadata';
import { mock, instance } from 'ts-mockito';
import INotes from "../../domain/Entities/note";
import  { NotesMock } from "../mocks/notes-mockup";
import { NotesRepositoryHttp } from "../../infrastructure/HTTP/services/notes-repository-http";


describe('Method to get notes', () => {

    it('should get all notes in array', async () => {
        const { notesMock, NotesRepositoryHttp } = setup();
        const actual = await NotesRepositoryHttp.viewAll();
        expect(actual).toEqual<Array<INotes>>(notesMock.learnNotes());
    })

    it('should create new notes',async () => {
        const {notesMock, NotesRepositoryHttp } = setup();
        const actual = await NotesRepositoryHttp
    });

});


function setup () {
    return {
        notesMock: instance(mock(NotesMock)),
        NotesRepositoryHttp: instance(mock(NotesRepositoryHttp))
    }
}