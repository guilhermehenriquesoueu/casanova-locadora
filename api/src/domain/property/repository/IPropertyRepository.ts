import PropertyEntity from '../entity/property.entity'
import IRepository from '../../../@shared/IRepository'

export default interface IPropertyRepository
  extends IRepository<PropertyEntity> {}
