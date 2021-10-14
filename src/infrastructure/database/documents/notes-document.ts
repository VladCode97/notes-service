import {Document} from 'mongoose';
import INotes from "../../../domain/Entities/note";

export interface INotesDocument extends Document, INotes {}