import {Model, model} from 'mongoose';
import {INotesDocument} from "../notes-document";
import {NotesSchema} from "../schema/notes-schema";

export const NotesModel: Model<INotesDocument> = model('notes', NotesSchema);