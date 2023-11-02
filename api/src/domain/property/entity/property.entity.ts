export default class PropertyEntity {
  private _id: string
  private _type: string
  private _price: number
  private _size: number
  private _bedrooms: number
  private _rooms: number
  private _bathrooms: number
  private _parking: number
  private _pavement: number
  private _neighborhood: string
  private _city: string
  private _description: string
  private _buy_or_rent: string
  private _cabinets: boolean
  private _intercom: boolean
  private _recreation_area: boolean
  private _private_area: boolean
  private _elevator: boolean
  private _physical_doorman: boolean
  private _electronic_gate: boolean
  private _suite: number
  private _balcony: boolean
  private _photos: string[]

  constructor(
    id: string,
    type: string,
    price: number,
    size: number,
    bedrooms: number,
    rooms: number,
    bathrooms: number,
    parking: number,
    pavement: number,
    neighborhood: string,
    city: string,
    description: string,
    buy_or_rent: string,
    cabinets: boolean,
    intercom: boolean,
    recreation_area: boolean,
    private_area: boolean,
    elevator: boolean,
    physical_doorman: boolean,
    electronic_gate: boolean,
    suite: number,
    balcony: boolean,
    photos: string[]
  ) {
    this._id = id
    this._type = type
    this._price = price
    this._size = size
    this._bedrooms = bedrooms
    this._rooms = rooms
    this._bathrooms = bathrooms
    this._parking = parking
    this._pavement = pavement
    this._neighborhood = neighborhood
    this._city = city
    this._description = description
    this._buy_or_rent = buy_or_rent
    this._cabinets = cabinets
    this._intercom = intercom
    this._recreation_area = recreation_area
    this._private_area = private_area
    this._elevator = elevator
    this._physical_doorman = physical_doorman
    this._electronic_gate = electronic_gate
    this._suite = suite
    this._balcony = balcony
    this._photos = photos
    this.validate()
  }

  validate() {
    if (this._type.length === 0) {
      throw new Error('Type is required')
    }

    if (this._price <= 0) {
      throw new Error('Price must be greater than 0')
    }

    if (this._size <= 0) {
      throw new Error('Size must be greater than 0')
    }

    if (this._bedrooms <= 0) {
      throw new Error('Bedrooms must be greater than 0')
    }

    if (this._rooms <= 0) {
      throw new Error('Rooms must be greater than 0')
    }

    if (this._bathrooms <= 0) {
      throw new Error('Bathrooms must be greater than 0')
    }

    if (this._parking <= 0) {
      throw new Error('Parking must be greater than 0')
    }

    if (this._pavement <= 0) {
      throw new Error('Pavement must be greater than 0')
    }

    if (this._neighborhood.length === 0) {
      throw new Error('Neighborhood is required')
    }

    if (this._city.length === 0) {
      throw new Error('City is required')
    }

    if (this._description.length === 0) {
      throw new Error('Description is required')
    }

    if (this._buy_or_rent.length === 0) {
      throw new Error('Buy or Rent is required')
    }

    if (this._photos.length === 0) {
      throw new Error('Photos is required')
    }
  }

  get id(): string {
    return this._id
  }

  get type(): string {
    return this._type
  }

  get price(): number {
    return this._price
  }

  get size(): number {
    return this._size
  }

  get bedrooms(): number {
    return this._bedrooms
  }

  get rooms(): number {
    return this._rooms
  }

  get bathrooms(): number {
    return this._bathrooms
  }

  get parking(): number {
    return this._parking
  }

  get pavement(): number {
    return this._pavement
  }

  get neighborhood(): string {
    return this._neighborhood
  }

  get city(): string {
    return this._city
  }

  get description(): string {
    return this._description
  }

  get buy_or_rent(): string {
    return this._buy_or_rent
  }

  get cabinets(): boolean {
    return this._cabinets
  }

  get intercom(): boolean {
    return this._intercom
  }

  get recreation_area(): boolean {
    return this._recreation_area
  }

  get private_area(): boolean {
    return this._private_area
  }

  get elevator(): boolean {
    return this._elevator
  }

  get physical_doorman(): boolean {
    return this._physical_doorman
  }

  get electronic_gate(): boolean {
    return this._electronic_gate
  }

  get suite(): number {
    return this._suite
  }

  get balcony(): boolean {
    return this._balcony
  }

  get photos(): string[] {
    return this._photos
  }
}
