import INotes from "../../domain/Entities/note";

export class NotesMock {

    public learnNotes(): Array<INotes> {
        return [{
            uuid: 232443443,
            name: "to play soccer with my family",
            description: "I'm going to play with my family at 3:00pm",
            createDate: new Date(),
            updateDate: new Date()
        }]
    }

}