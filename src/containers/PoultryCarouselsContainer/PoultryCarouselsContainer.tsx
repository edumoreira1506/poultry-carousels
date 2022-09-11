import React, { VFC } from 'react'
import { PoultriesCarouselProps } from '../../components/PoultriesCarousel/PoultriesCarousel'

import PoultryCarousels, { PoultryCarouselsProps } from '../../components/PoultryCarousels/PoultryCarousels'
import useData from '../../hooks/useData'

export interface PoultryCarouselsContainerProps {
  breederId: string;
  onViewPoultry?: PoultriesCarouselProps['onViewPoultry'];
  onEditPoultry?: PoultriesCarouselProps['onEditPoultry'];
  linkComponent: PoultryCarouselsProps['linkComponent']
}

const PoultryCarouselsContainer: VFC<PoultryCarouselsContainerProps> = ({
  breederId,
  onViewPoultry,
  onEditPoultry,
  linkComponent
}: PoultryCarouselsContainerProps) => {
  const { data, isLoading, onPaginate } = useData(breederId)

  if (isLoading) return null

  return (
    <PoultryCarousels
      breederId={breederId}
      forSale={data?.forSale}
      reproductives={data?.reproductives}
      matrixes={data?.matrixes}
      males={data?.males}
      females={data?.females}
      onViewPoultry={onViewPoultry}
      onEditPoultry={onEditPoultry}
      onFinishSlides={onPaginate}
      linkComponent={linkComponent}
    />
  )
}

export default PoultryCarouselsContainer
