import IRepository from "../../core/repository/repository";
import INotes from "../Entities/note";

export interface INoteRepository extends IRepository<INotes> {
    viewById?(id: string): Promise<INotes>;
}