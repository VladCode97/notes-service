export default interface IRepository<Model> {
    createAll?(model: Model): Promise<Model>;
    viewAll?(): Promise<Array<Model>>;
}