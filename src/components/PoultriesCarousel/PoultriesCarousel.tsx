import React, { useCallback, useMemo, VFC } from 'react'
import { PoultriesCarousel as UIPoultriesCarousel } from '@cig-platform/ui'

import { StyledCarousel, StyledContainer, StyledTitle } from './PoultriesCarousel.styles'
import { createImageUrl } from '../../utils/url'
import { Poultry } from '../../hooks/useData'
import { POULTRY_PLACEHOLDER_IMAGE_URL } from '../../constants/url'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export type PoultriesCarouselProps = {
  poultries?: Poultry[];
  title: string;
  breederId: string;
  onViewPoultry?: ({ breederId, poultryId }: { breederId: string, poultryId: string }) => void;
  onEditPoultry?: ({ breederId, poultryId }: { breederId: string, poultryId: string }) => void;
  onFinishSlides?: () => void;
}

const PoultriesCarousel: VFC<PoultriesCarouselProps> = ({
  poultries = [],
  title,
  breederId,
  onViewPoultry,
  onEditPoultry,
  onFinishSlides
}: PoultriesCarouselProps) => {
  if (!poultries.length) return null

  const handleViewPoultry = useCallback((poultryId: string) => {
    onViewPoultry?.({ breederId, poultryId })
  }, [breederId, onViewPoultry])

  const handleEditPoultry = useCallback((poultryId: string) => {
    onEditPoultry?.({ breederId, poultryId })
  }, [breederId, onEditPoultry])

  const formattedPoultries = useMemo(() => poultries.map((poultry) => ({
    ...poultry,
    mainImage: poultry?.mainImage ? createImageUrl({ folder: 'poultries', subfolder: 'images', filename: poultry?.mainImage }) : undefined
  })), [poultries])

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCarousel>
        <UIPoultriesCarousel
          poultries={formattedPoultries}
          onViewPoultry={onViewPoultry ? handleViewPoultry : undefined}
          onEditPoultry={onEditPoultry ? handleEditPoultry : undefined}
          fallbackImage={POULTRY_PLACEHOLDER_IMAGE_URL}
          onFinishSlides={onFinishSlides}
        />
      </StyledCarousel>
    </StyledContainer>
  )
}

export default PoultriesCarousel
