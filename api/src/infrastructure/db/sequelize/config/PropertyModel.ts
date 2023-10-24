import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'properties',
  timestamps: false
})
export default class PropertyModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string

  @Column({ allowNull: false })
  declare type: string

  @Column({ allowNull: false })
  declare price: number

  @Column({ allowNull: false })
  declare size: number

  @Column({ allowNull: false })
  declare bedrooms: number

  @Column({ allowNull: false })
  declare rooms: number

  @Column({ allowNull: false })
  declare bathrooms: number

  @Column({ allowNull: false })
  declare parking: number

  @Column({ allowNull: false })
  declare pavement: number

  @Column({ allowNull: false })
  declare neighborhood: string

  @Column({ allowNull: false })
  declare city: string

  @Column({ allowNull: false })
  declare description: string

  @Column({ allowNull: false })
  declare buy_or_rent: string

  @Column({ allowNull: false })
  declare cabinets: boolean

  @Column({ allowNull: false })
  declare intercom: boolean

  @Column({ allowNull: false })
  declare recreation_area: boolean

  @Column({ allowNull: false })
  declare private_area: boolean

  @Column({ allowNull: false })
  declare elevator: boolean

  @Column({ allowNull: false })
  declare physical_doorman: boolean

  @Column({ allowNull: false })
  declare electronic_gate: boolean

  @Column({ allowNull: false })
  declare suite: number

  @Column({ allowNull: false })
  declare balcony: boolean

  @Column(DataType.ARRAY(DataType.STRING))
  declare photos: string[]
}
