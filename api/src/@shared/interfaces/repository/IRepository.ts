import { PropertyTypes } from './types/PropertyTypes'

export default interface IRepository<T> {
  create(entity: T): Promise<void>
  update(entity: T): Promise<void>
  findOne(id: string): Promise<T>
  findAll(filterOptions: PropertyTypes): Promise<T[]>
}
