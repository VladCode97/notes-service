import { Schema } from 'mongoose';

export const NotesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: { type: String, required: true},
    description: { type: String, required: true},
    createDate: { type: Date, required: false, default: new Date()},
    updatedDate: { type: Date, required: false, default: new Date()}
});