import React, { VFC } from 'react'

import PoultriesCarousel from '../PoultriesCarousel/PoultriesCarousel'
import { Poultry } from '../../hooks/useData'

interface PoultryCarouselsProps {
  forSale?: Poultry[];
  reproductives?: Poultry[];
  matrixes?: Poultry[];
  males?: Poultry[];
  females?: Poultry[];
  breederId: string;
}

const PoultryCarousels: VFC<PoultryCarouselsProps> = ({
  forSale = [],
  reproductives = [],
  matrixes = [],
  males = [],
  females = [],
  breederId
}: PoultryCarouselsProps) => (
  <>
    {Boolean(forSale.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='À Venda'
        poultries={forSale}
      />
    )}

    {Boolean(reproductives.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Reprodutores'
        poultries={reproductives}
      />
    )}

    {Boolean(matrixes.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Matrizes'
        poultries={matrixes}
      />
    )}

    {Boolean(males.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Frangos'
        poultries={males}
      />
    )}

    {Boolean(females.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Frangas'
        poultries={females}
      />
    )}
  </>
)

export default PoultryCarousels
