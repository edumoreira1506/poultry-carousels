import React, { VFC } from 'react'

import PoultryCarousels from '../../components/PoultryCarousels/PoultryCarousels'
import useData from '../../hooks/useData'

export interface PoultryCarouselsContainerProps {
  breederId: string;
}

const PoultryCarouselsContainer: VFC<PoultryCarouselsContainerProps> = ({
  breederId,
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
    />
  )
}

export default PoultryCarouselsContainer
