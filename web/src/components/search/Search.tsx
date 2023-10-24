import './Search.css'
import { SetStateAction, useState } from 'react'
import Button from '../button/Button.tsx'
import { FilterOptions } from '../../types/FilterOptions.ts'

export default function Search({ propFunctions }) {
  const [destinacao, setDestinacao] = useState('')
  const [tipoImovel, setTipoImovel] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [quartos, setQuartos] = useState('')
  const [valor, setValor] = useState('')
  const [salas, setSalas] = useState('')
  const [garagens, setGaragens] = useState('')
  const [banheiros, setBanheiros] = useState('')
  const [opcionais, setOpcionais] = useState('')

  const handleDestinacaoChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setDestinacao(event.target.value)
  }

  const handleTipoImovelChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTipoImovel(event.target.value)
  }

  const handleCidadeChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setCidade(event.target.value)
  }

  const handleBairroChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setBairro(event.target.value)
  }

  const handleQuartosChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setQuartos(event.target.value)
  }

  const handleValorChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setValor(event.target.value)
  }

  const handleSalasChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSalas(event.target.value)
  }

  const handleGaragensChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setGaragens(event.target.value)
  }

  const handleBanheirosChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setBanheiros(event.target.value)
  }

  const handleOpcionaisChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setOpcionais(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const filterOptions: FilterOptions = {}

    if (destinacao !== '') {
      filterOptions.buy_or_rent = destinacao
    }
    if (tipoImovel !== '') {
      filterOptions.type = tipoImovel
    }
    if (cidade !== '') {
      filterOptions.city = cidade
    }
    if (bairro !== '') {
      filterOptions.neighborhood = bairro
    }
    if (quartos !== '') {
      filterOptions.bedrooms = parseInt(quartos)
    }
    if (valor !== '') {
      filterOptions.price = parseInt(valor)
    }
    if (salas !== '') {
      filterOptions.rooms = parseInt(salas)
    }

    propFunctions.getProperties(filterOptions)
  }

  const cleanOptions = () => {
    setDestinacao('')
    setTipoImovel('')
    setCidade('')
    setBairro('')
    setQuartos('')
    setValor('')
    setSalas('')
    setGaragens('')
    setBanheiros('')
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <section>
          <span>
            <p>Destinação</p>
            <select
              className='select-custom'
              value={destinacao}
              onChange={handleDestinacaoChange}
            >
              <option value={''}>Todas opções</option>
              <option value={'buy'}>Comprar</option>
              <option value={'rent'}>Alugar</option>
            </select>
          </span>
          <span>
            <p>Tipo Imóvel</p>
            <select
              className='select-custom'
              value={tipoImovel}
              onChange={handleTipoImovelChange}
            >
              <option value=''>Todas opções</option>
              <option value={'Apartment'}>Apartamento</option>
              <option value={'House'}>Casa</option>
            </select>
          </span>
          <span>
            <p>Cidade</p>
            <select
              className='select-custom'
              value={cidade}
              onChange={handleCidadeChange}
              required
            >
              <option
                value=''
                disabled
              >
                Escolha uma opção
              </option>
              <option value='Metropolis'>Metropolis</option>
            </select>
          </span>
          <span>
            <p>Bairro</p>
            <select
              className='select-custom'
              value={bairro}
              onChange={handleBairroChange}
            >
              <option value=''>Todas opções</option>
              <option value='Suburbia'>Suburbia</option>
              <option value='Downtown'>Downtown</option>
              <option value='Luxury Estates'>Luxury Estates</option>
            </select>
          </span>
          <span>
            <p>Quartos</p>
            <select
              className='select-custom'
              value={quartos}
              onChange={handleQuartosChange}
            >
              <option value=''>Todas opções</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </span>
          <span>
            <p>Valor</p>
            <select
              className='select-custom'
              value={valor}
              onChange={handleValorChange}
            >
              <option value=''>Todas opções</option>
              <option value={150000}>150000</option>
              <option value={250000}>250000</option>
              <option value={2000}>2000</option>
            </select>
          </span>
          <span>
            <p>Salas</p>
            <select
              className='select-custom'
              value={salas}
              onChange={handleSalasChange}
            >
              <option value=''>Todas opções</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </span>
          <span>
            <p>Garagens</p>
            <select
              className='select-custom'
              value={garagens}
              onChange={handleGaragensChange}
            >
              <option value=''>Todas opções</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </span>
          <span>
            <p>Banheiros</p>
            <select
              className='select-custom'
              value={banheiros}
              onChange={handleBanheirosChange}
            >
              <option value=''>Todas opções</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </span>
          <span>
            <p>Opcionais</p>
            <select
              className='select-custom'
              value={opcionais}
              onChange={handleOpcionaisChange}
            >
              <option value=''>Todas opções</option>
            </select>
          </span>
          <span>
            <Button
              text='Limpar filtros'
              fontSize='1rem'
              height='4rem'
              width='10rem'
              onClick={{ f: cleanOptions, p: {} }}
            />
            <Button
              type='submit'
              text='Buscar'
              fontSize='1rem'
              height='4rem'
              width='10rem'
            />
          </span>
        </section>
      </form>
    </div>
  )
}
