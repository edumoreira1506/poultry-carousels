import React, { VFC } from 'react'
import { PoultriesCarouselProps } from '../../components/PoultriesCarousel/PoultriesCarousel'

import PoultryCarousels from '../../components/PoultryCarousels/PoultryCarousels'
import useData from '../../hooks/useData'

export interface PoultryCarouselsContainerProps {
  breederId: string;
  onViewPoultry: PoultriesCarouselProps['onViewPoultry'];
  onEditPoultry: PoultriesCarouselProps['onEditPoultry'];
}

const PoultryCarouselsContainer: VFC<PoultryCarouselsContainerProps> = ({
  breederId,
  onViewPoultry,
}: PoultryCarouselsContainerProps) => {
  const { data, isLoading } = useData(breederId)

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
      onEditPoultry={onViewPoultry}
    />
  )
}

export default PoultryCarouselsContainer
