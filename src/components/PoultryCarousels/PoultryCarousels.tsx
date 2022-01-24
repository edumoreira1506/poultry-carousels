import React, { VFC } from 'react'

import PoultriesCarousel, { PoultriesCarouselProps } from '../PoultriesCarousel/PoultriesCarousel'
import { Poultry } from '../../hooks/useData'

interface PoultryCarouselsProps {
  forSale?: Poultry[];
  reproductives?: Poultry[];
  matrixes?: Poultry[];
  males?: Poultry[];
  females?: Poultry[];
  breederId: string;
  onViewPoultry: PoultriesCarouselProps['onViewPoultry'];
  onEditPoultry: PoultriesCarouselProps['onEditPoultry'];
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
}: PoultryCarouselsProps) => (
  <>
    {Boolean(forSale.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='À Venda'
        poultries={forSale}
        onViewPoultry={onViewPoultry}
        onEditPoultry={onEditPoultry}
      />
    )}

    {Boolean(reproductives.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Reprodutores'
        poultries={reproductives}
        onViewPoultry={onViewPoultry}
        onEditPoultry={onEditPoultry}
      />
    )}

    {Boolean(matrixes.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Matrizes'
        poultries={matrixes}
        onViewPoultry={onViewPoultry}
        onEditPoultry={onEditPoultry}
      />
    )}

    {Boolean(males.length) && (
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

export default PoultryCarousels
