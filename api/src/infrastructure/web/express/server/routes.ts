import { Router, Request, Response } from 'express'
import multer from 'multer'
import PropertyEntity from '../../../../domain/property/entity/property.entity'
import path from 'path'
import { v4 as uuid } from 'uuid'
import PropertyRepository from '../../../property/sequelize/repository/PropertyRepository'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../server/uploads'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, uuid() + ext)
  }
})

const upload = multer({ storage: storage })

const router = Router()

router.post(
  '/properties/search',
  async (req: Request, res: Response): Promise<void> => {
    let filterOptions = {}
    if (Object.keys(req.body.filterOptions).length > 0) {
      filterOptions = req.body.filterOptions
    }
    const propertyRepository = new PropertyRepository()
    const properties = await propertyRepository.findAll(filterOptions)
    res.status(200).json(properties)
  }
)

router.post(
  '/properties',
  upload.array('photos', 5),
  async (req: Request, res: Response): Promise<void> => {
    const photos = req.files
    let photosPaths: string[] = []
    const propertyAttributes = JSON.parse(req.body.property)

    if (Array.isArray(photos)) {
      photosPaths = photos.map((photo) => {
        return `/uploads/${photo.filename}`
      })
    }

    const propertyRepository = new PropertyRepository()

    const property = new PropertyEntity(
      '',
      propertyAttributes.type,
      propertyAttributes.price,
      propertyAttributes.size,
      propertyAttributes.bedrooms,
      propertyAttributes.rooms,
      propertyAttributes.bathrooms,
      propertyAttributes.parking,
      propertyAttributes.pavement,
      propertyAttributes.neighborhood,
      propertyAttributes.city,
      propertyAttributes.description,
      propertyAttributes.buy_or_rent,
      propertyAttributes.cabinets,
      propertyAttributes.intercom,
      propertyAttributes.recreation_area,
      propertyAttributes.private_area,
      propertyAttributes.elevator,
      propertyAttributes.physical_doorman,
      propertyAttributes.electronic_gate,
      propertyAttributes.suite,
      propertyAttributes.balcony,
      photosPaths
    )

    await propertyRepository.create(property)

    res.status(200).end()
  }
)

router.put('/properties', async (req: Request, res: Response) => {
  const property = req.body
  const propertyRepository = new PropertyRepository()
  await propertyRepository.update(property)

  res.status(200).end()
})

export default router
