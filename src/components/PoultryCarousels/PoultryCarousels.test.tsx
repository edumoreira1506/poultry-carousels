import React from 'react'
import { render, screen } from '@testing-library/react'

import PoultryCarousels from './PoultryCarousels'
import { poultryFactory } from '@cig-platform/factories'

const DEFAULT_PROPS = {
  onFinishSlides: jest.fn(),
  breederId: '',
}

describe('<PoultryCarousels />', () => {
  it('renders empty state', () => {
    render(<PoultryCarousels {...DEFAULT_PROPS} />)

    expect(screen.getByText('Não há aves registradas')).toBeInTheDocument()
    expect(screen.queryByText('À Venda')).not.toBeInTheDocument()
    expect(screen.queryByText('Reprodutores')).not.toBeInTheDocument()
    expect(screen.queryByText('Matrizes')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangos')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangas')).not.toBeInTheDocument()
  })

  it('renders for sale carousel', () => {
    const poultry = {
      ...poultryFactory(),
      mainImage: '',
      images: []
    }

    render(<PoultryCarousels {...DEFAULT_PROPS} forSale={[poultry]} />)

    expect(screen.queryByText('Não há aves registradas')).not.toBeInTheDocument()
    expect(screen.getByText('À Venda')).toBeInTheDocument()
    expect(screen.queryByText('Reprodutores')).not.toBeInTheDocument()
    expect(screen.queryByText('Matrizes')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangos')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangas')).not.toBeInTheDocument()
  })

  it('renders reproductives carousel', () => {
    const poultry = {
      ...poultryFactory(),
      mainImage: '',
      images: []
    }

    render(<PoultryCarousels {...DEFAULT_PROPS} reproductives={[poultry]} />)

    expect(screen.queryByText('Não há aves registradas')).not.toBeInTheDocument()
    expect(screen.queryByText('À Venda')).not.toBeInTheDocument()
    expect(screen.getByText('Reprodutores')).toBeInTheDocument()
    expect(screen.queryByText('Matrizes')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangos')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangas')).not.toBeInTheDocument()
  })

  it('renders matrixes carousel', () => {
    const poultry = {
      ...poultryFactory(),
      mainImage: '',
      images: []
    }

    render(<PoultryCarousels {...DEFAULT_PROPS} matrixes={[poultry]} />)

    expect(screen.queryByText('Não há aves registradas')).not.toBeInTheDocument()
    expect(screen.queryByText('À Venda')).not.toBeInTheDocument()
    expect(screen.queryByText('Reprodutores')).not.toBeInTheDocument()
    expect(screen.getByText('Matrizes')).toBeInTheDocument()
    expect(screen.queryByText('Frangos')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangas')).not.toBeInTheDocument()
  })


  it('renders males carousel', () => {
    const poultry = {
      ...poultryFactory(),
      mainImage: '',
      images: []
    }

    render(<PoultryCarousels {...DEFAULT_PROPS} males={[poultry]} />)

    expect(screen.queryByText('Não há aves registradas')).not.toBeInTheDocument()
    expect(screen.queryByText('À Venda')).not.toBeInTheDocument()
    expect(screen.queryByText('Reprodutores')).not.toBeInTheDocument()
    expect(screen.queryByText('Matrizes')).not.toBeInTheDocument()
    expect(screen.getByText('Frangos')).toBeInTheDocument()
    expect(screen.queryByText('Frangas')).not.toBeInTheDocument()
  })

  it('renders females carousel', () => {
    const poultry = {
      ...poultryFactory(),
      mainImage: '',
      images: []
    }

    render(<PoultryCarousels {...DEFAULT_PROPS} females={[poultry]} />)

    expect(screen.queryByText('Não há aves registradas')).not.toBeInTheDocument()
    expect(screen.queryByText('À Venda')).not.toBeInTheDocument()
    expect(screen.queryByText('Reprodutores')).not.toBeInTheDocument()
    expect(screen.queryByText('Matrizes')).not.toBeInTheDocument()
    expect(screen.queryByText('Frangos')).not.toBeInTheDocument()
    expect(screen.getByText('Frangas')).toBeInTheDocument()
  })
})
