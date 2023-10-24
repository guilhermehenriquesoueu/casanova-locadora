import { v4 as uuid } from 'uuid'
import PropertyEntity from '../../../../domain/entity/property.entity'
import IPropertyRepository from '../../../../domain/repository/IPropertyRepository'
import PropertyModel from '../config/PropertyModel'
import { PropertyTypes } from '../../../../domain/types/PropertyTypes'

export default class PropertyRepository implements IPropertyRepository {
  async create(entity: PropertyEntity): Promise<void> {
    await PropertyModel.create({
      id: uuid().split('-')[0].slice(0, 5),
      type: entity.type,
      price: entity.price,
      size: entity.size,
      bedrooms: entity.bedrooms,
      rooms: entity.rooms,
      bathrooms: entity.bathrooms,
      parking: entity.parking,
      pavement: entity.pavement,
      neighborhood: entity.neighborhood,
      city: entity.city,
      description: entity.description,
      buy_or_rent: entity.buy_or_rent,
      cabinets: entity.cabinets,
      intercom: entity.intercom,
      recreation_area: entity.recreation_area,
      private_area: entity.private_area,
      elevator: entity.elevator,
      physical_doorman: entity.physical_doorman,
      electronic_gate: entity.electronic_gate,
      suite: entity.suite,
      balcony: entity.balcony,
      photos: entity.photos
    })
  }

  async update(entity: PropertyEntity): Promise<void> {
    await PropertyModel.update(
      {
        type: entity.type,
        price: entity.price,
        size: entity.size,
        bedrooms: entity.bedrooms,
        rooms: entity.rooms,
        bathrooms: entity.bathrooms,
        parking: entity.parking,
        pavement: entity.pavement,
        neighborhood: entity.neighborhood,
        city: entity.city,
        description: entity.description,
        buy_or_rent: entity.buy_or_rent,
        cabinets: entity.cabinets,
        intercom: entity.intercom,
        recreation_area: entity.recreation_area,
        private_area: entity.private_area,
        elevator: entity.elevator,
        physical_doorman: entity.physical_doorman,
        electronic_gate: entity.electronic_gate,
        suite: entity.suite,
        balcony: entity.balcony,
        photos: entity.photos
      },
      {
        where: {
          id: entity.id
        }
      }
    )
  }

  async findOne(id: string): Promise<PropertyEntity> {
    const property = await PropertyModel.findOne({
      where: {
        id
      }
    })

    return new PropertyEntity(
      property.id,
      property.type,
      property.price,
      property.size,
      property.bedrooms,
      property.rooms,
      property.bathrooms,
      property.parking,
      property.pavement,
      property.neighborhood,
      property.city,
      property.description,
      property.buy_or_rent,
      property.cabinets,
      property.intercom,
      property.recreation_area,
      property.private_area,
      property.elevator,
      property.physical_doorman,
      property.electronic_gate,
      property.suite,
      property.balcony,
      property.photos
    )
  }

  async findAll(filterOptions: PropertyTypes = {}): Promise<PropertyEntity[]> {
    const properties = await PropertyModel.findAll({
      where: filterOptions
    })

    return properties.map(
      (property) =>
        new PropertyEntity(
          property.id,
          property.type,
          property.price,
          property.size,
          property.bedrooms,
          property.rooms,
          property.bathrooms,
          property.parking,
          property.pavement,
          property.neighborhood,
          property.city,
          property.description,
          property.buy_or_rent,
          property.cabinets,
          property.intercom,
          property.recreation_area,
          property.private_area,
          property.elevator,
          property.physical_doorman,
          property.electronic_gate,
          property.suite,
          property.balcony,
          property.photos
        )
    )
  }
}
