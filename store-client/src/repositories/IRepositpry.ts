export interface Irepositpry<T> 
{
    getAll(filter: any|undefined): Promise<T[] | null>;
}