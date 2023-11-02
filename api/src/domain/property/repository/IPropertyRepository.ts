import PropertyEntity from '../entity/property.entity'
import IRepository from './IRepository'

export default interface IPropertyRepository
  extends IRepository<PropertyEntity> {}
