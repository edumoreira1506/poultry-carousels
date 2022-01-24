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
  onViewPoultry: ({ breederId, poultryId }: { breederId: string, poultryId: string }) => void;
}

const PoultryCarousels: VFC<PoultryCarouselsProps> = ({
  forSale = [],
  reproductives = [],
  matrixes = [],
  males = [],
  females = [],
  breederId,
  onViewPoultry
}: PoultryCarouselsProps) => (
  <>
    {Boolean(forSale.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='À Venda'
        poultries={forSale}
        onViewPoultry={onViewPoultry}
      />
    )}

    {Boolean(reproductives.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Reprodutores'
        poultries={reproductives}
        onViewPoultry={onViewPoultry}
      />
    )}

    {Boolean(matrixes.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Matrizes'
        poultries={matrixes}
        onViewPoultry={onViewPoultry}
      />
    )}

    {Boolean(males.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Frangos'
        poultries={males}
        onViewPoultry={onViewPoultry}
      />
    )}

    {Boolean(females.length) && (
      <PoultriesCarousel
        breederId={breederId}
        title='Frangas'
        poultries={females}
        onViewPoultry={onViewPoultry}
      />
    )}
  </>
)

export default PoultryCarousels
