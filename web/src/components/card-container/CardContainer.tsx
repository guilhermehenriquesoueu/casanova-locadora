import './CardContainer.css'
import { PropertyTypes } from '../../types/PropertyTypes'
import Card from '../card/Card'
import { useMyContext } from '../../context/ContextApi'

export default function CardContainer() {
  const { properties } = useMyContext()

  return (
    <div className='card-container'>
      {properties.map((property: PropertyTypes) => {
        return (
          <Card
            key={property._id}
            properties={property}
          />
        )
      })}
    </div>
  )
}
