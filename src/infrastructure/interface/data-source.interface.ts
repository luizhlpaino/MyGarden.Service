export interface IDataSource {
    getRepository<T>();
    save<T>();
}