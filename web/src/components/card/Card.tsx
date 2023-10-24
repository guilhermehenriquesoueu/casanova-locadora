import './Card.css'
import {
  FaBath,
  FaBed,
  FaCarAlt,
  FaCrown,
  FaRegBuilding,
  FaRulerCombined
} from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { BiCabinet } from 'react-icons/bi'
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import { LuToyBrick } from 'react-icons/lu'
import { MdPrivacyTip } from 'react-icons/md'
import { GiElevator, GiGate, GiPoliceOfficerHead } from 'react-icons/gi'
import { PropertyTypes } from '../../types/PropertyTypes'
import Button from '../button/Button'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Card({ properties }: { properties: PropertyTypes }) {
  function formatPrice(number: number | undefined) {
    if (typeof number !== 'number') {
      return 'Preço inválido'
    }

    const price = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

    return price
  }

  function openModal() {
    const modal = document.querySelector(`#modal-${properties._id}`)
    modal?.classList.add('is-active')
  }

  function closeModal() {
    const modal = document.querySelector(`#modal-${properties._id}`)
    modal?.classList.remove('is-active')
  }

  return (
    <>
      <div className='card-item'>
        <div className='card-cover'>
          <img
            src={`http://localhost:3000${properties._photos?.[0]}`}
            alt='property'
          />
        </div>

        <div className='card-description'>
          <section>
            <p className='address'>
              {properties._neighborhood}, {properties._city}
            </p>
            <p className='type'>
              {properties._type} {properties._buy_or_rent}
            </p>
            <p className='price'>{formatPrice(properties._price)}</p>
          </section>

          <section>
            <span className='bedrooms'>
              <FaBed size={18} />
              {properties._bedrooms} quartos
            </span>
            <span className='bathrooms'>
              <FaBath size={18} />
              {properties._bathrooms} banheiros
            </span>
            <span className='bedrooms'>
              <FaCrown size={18} />
              {properties._suite} suite
            </span>
            <span className='bathrooms'>
              <FaCarAlt size={18} />
              {properties._parking} vagas
            </span>
          </section>
        </div>

        <Button
          text='Mais Detalhes'
          width='150px'
          height='50px'
          onClick={{ f: openModal, p: {} }}
        />
      </div>

      <div
        id={`modal-${properties._id}`}
        className='modal card-modal'
      >
        <p>{properties._price}</p>
        <div
          className='modal-background'
          onClick={closeModal}
        ></div>

        <div className='modal-content'>
          <div className='box'>
            <Carousel showThumbs={false}>
              {properties._photos?.map((photo) => (
                <div key={photo}>
                  <img
                    src={`http://localhost:3000${photo}`}
                    alt='property'
                  />
                </div>
              ))}
            </Carousel>

            <div className='description'>
              <span className='address'>
                {properties._neighborhood}, {properties._city}
              </span>
              <span className='type'>
                {properties._type} {properties._buy_or_rent}
              </span>
              <span className='price'>{formatPrice(properties._price)}</span>
              <span>{properties._description}</span>
            </div>

            <div className='optionals'>
              <span>
                <FaRulerCombined /> {properties._size} m2
              </span>
              <span>
                <FaBed /> {properties._bedrooms} quarto(s)
              </span>
              {properties._suite && (
                <span>
                  <FaCrown /> {properties._suite} suite(s)
                </span>
              )}
              <span>
                <FiMonitor /> {properties._rooms} sala(s)
              </span>
              <span>
                <FaBath /> {properties._bathrooms} banheiro(s)
              </span>
              <span>
                <FaCarAlt /> {properties._parking} vagas
              </span>
              <span>
                <FaRegBuilding /> {properties._pavement} pavimento(s)
              </span>
              {properties._cabinets && (
                <span>
                  <BiCabinet /> armário(s)
                </span>
              )}
              {properties._intercom && (
                <span>
                  <BsFillTelephoneFill /> Interfone
                </span>
              )}
              {properties._recreation_area && (
                <span>
                  <LuToyBrick /> area(s) de recreação
                </span>
              )}
              {properties._private_area && (
                <span>
                  <MdPrivacyTip /> area(s) privativa
                </span>
              )}
              {properties._elevator && (
                <span>
                  <GiElevator /> elevadore(s)
                </span>
              )}
              {properties._physical_doorman && (
                <span>
                  <GiPoliceOfficerHead /> porteiro
                </span>
              )}
              {properties._electronic_gate && (
                <span>
                  <GiGate /> portão eletrônico
                </span>
              )}
            </div>

            <div className='contacts'>
              <p>Agende sua visita: </p>
              <Button
                icon={<BsWhatsapp size={18} />}
                text='Whatsapp'
                backgroundColor='#25D366'
                color='#ffffff'
                width='150px'
                height='50px'
              />
            </div>
          </div>
        </div>

        <button
          className='modal-close is-large'
          aria-label='close'
          onClick={closeModal}
        ></button>
      </div>
    </>
  )
}
