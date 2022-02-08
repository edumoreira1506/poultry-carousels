import React, { useMemo, VFC } from 'react'

import PoultriesCarousel, { PoultriesCarouselProps } from '../PoultriesCarousel/PoultriesCarousel'
import { Poultry } from '../../hooks/useData'

import { StyledEmptyState } from './PoultryCarousels.styles'

interface PoultryCarouselsProps {
  forSale?: Poultry[];
  reproductives?: Poultry[];
  matrixes?: Poultry[];
  males?: Poultry[];
  females?: Poultry[];
  breederId: string;
  onViewPoultry?: PoultriesCarouselProps['onViewPoultry'];
  onEditPoultry?: PoultriesCarouselProps['onEditPoultry'];
}

const PoultryCarousels: VFC<PoultryCarouselsProps> = ({
  forSale = [],
  reproductives = [],
  matrixes = [],
  males = [],
  females = [],
  breederId,
  onViewPoultry,
  onEditPoultry
}: PoultryCarouselsProps) => {
  const hasForSale = useMemo(() => Boolean(forSale.length), [forSale.length])
  const hasReproductives = useMemo(() => Boolean(reproductives.length), [reproductives.length])
  const hasMatrixes = useMemo(() => Boolean(matrixes.length), [matrixes.length])
  const hasMales = useMemo(() => Boolean(males.length), [males.length])

  const showEmptyState = useMemo(() => !hasForSale && !hasReproductives && !hasMatrixes && !hasMales, [
    hasForSale,
    hasReproductives,
    hasMatrixes,
    hasMales
  ])

  if (showEmptyState) return <StyledEmptyState>Empty state</StyledEmptyState>

  return (
    <>
      {hasForSale && (
        <PoultriesCarousel
          breederId={breederId}
          title='À Venda'
          poultries={forSale}
          onViewPoultry={onViewPoultry}
          onEditPoultry={onEditPoultry}
        />
      )}
  
      {hasReproductives && (
        <PoultriesCarousel
          breederId={breederId}
          title='Reprodutores'
          poultries={reproductives}
          onViewPoultry={onViewPoultry}
          onEditPoultry={onEditPoultry}
        />
      )}
  
      {hasMatrixes && (
        <PoultriesCarousel
          breederId={breederId}
          title='Matrizes'
          poultries={matrixes}
          onViewPoultry={onViewPoultry}
          onEditPoultry={onEditPoultry}
        />
      )}
  
      {hasMales && (
        <PoultriesCarousel
          breederId={breederId}
          title='Frangos'
          poultries={males}
          onViewPoultry={onViewPoultry}
          onEditPoultry={onEditPoultry}
        />
      )}
  
      {Boolean(females.length) && (
        <PoultriesCarousel
          breederId={breederId}
          title='Frangas'
          poultries={females}
          onViewPoultry={onViewPoultry}
          onEditPoultry={onEditPoultry}
        />
      )}
    </>
  )
}

export default PoultryCarousels
