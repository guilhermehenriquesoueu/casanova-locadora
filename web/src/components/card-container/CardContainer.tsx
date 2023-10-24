import './CardContainer.css'
import { PropertyTypes } from '../../types/PropertyTypes'
import Card from '../card/Card'

export default function CardContainer({ properties }) {
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
