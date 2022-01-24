import React, { VFC } from 'react'

import PoultryCarousels from '../../components/PoultryCarousels/PoultryCarousels'
import useData from '../../hooks/useData'

export interface PoultryCarouselsContainerProps {
  breederId: string;
}

const PoultryCarouselsContainer: VFC<PoultryCarouselsContainerProps> = ({
  breederId,
}: PoultryCarouselsContainerProps) => {
  const { isLoading } = useData(breederId)

  if (isLoading) return null

  return (
    <PoultryCarousels />
  )
}

export default PoultryCarouselsContainer
