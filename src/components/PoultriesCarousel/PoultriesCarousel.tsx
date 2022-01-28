import React, { useCallback, useMemo, useState, VFC } from 'react'
import { ImageGallery, PoultriesCarousel as UIPoultriesCarousel, Modal } from '@cig-platform/ui'

import { StyledCarousel, StyledContainer, StyledTitle } from './PoultriesCarousel.styles'
import { createImageUrl } from '../../utils/url'
import { Poultry } from '../../hooks/useData'
import { POULTRY_PLACEHOLDER_IMAGE_URL } from '../../constants/url'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-image-gallery/styles/css/image-gallery.css'

export type PoultriesCarouselProps = {
  poultries?: Poultry[];
  title: string;
  breederId: string;
  onViewPoultry?: ({ breederId, poultryId }: { breederId: string, poultryId: string }) => void;
  onEditPoultry?: ({ breederId, poultryId }: { breederId: string, poultryId: string }) => void;
}

const PoultriesCarousel: VFC<PoultriesCarouselProps> = ({
  poultries = [],
  title,
  breederId,
  onViewPoultry,
  onEditPoultry
}: PoultriesCarouselProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalImages, setModalImages] = useState<{ original: string; thumbnail: string; }[]>([])

  if (!poultries.length) return null

  const handleCloseModal = useCallback(() => setIsOpenModal(false), [])

  const handleViewPoultry = useCallback((poultryId: string) => {
    onViewPoultry?.({ breederId, poultryId })
  }, [breederId, onViewPoultry])

  const handleEditPoultry = useCallback((poultryId: string) => {
    onEditPoultry?.({ breederId, poultryId })
  }, [breederId, onEditPoultry])

  const formattedPoultries = useMemo(() => poultries.map((poultry) => ({
    ...poultry,
    mainImage: poultry?.mainImage && createImageUrl({ folder: 'poultries', subfolder: 'images', filename: poultry?.mainImage })
  })), [poultries])

  const handleClickImage = useCallback((poultryId: string) => {
    const poultry = formattedPoultries.find(p => p.id === poultryId)
    const files = [
      poultry?.mainImage,
      ...(poultry?.images?.map((poultryImage: { imageUrl: string }) =>
        createImageUrl({ folder: 'poultries', filename: poultryImage.imageUrl, subfolder: 'images' })
      ) ?? [])
    ].filter(Boolean).map((image) => ({
      thumbnail: image ?? '',
      original: image ?? ''
    }))

    setModalImages(files)
    setIsOpenModal(true)
  }, [formattedPoultries])
  console.log({ formattedPoultries })
  return (
    <StyledContainer>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <ImageGallery items={modalImages} />
      </Modal>
    
      <StyledTitle>{title}</StyledTitle>
      <StyledCarousel>
        <UIPoultriesCarousel
          onClickImage={handleClickImage}
          poultries={formattedPoultries}
          onViewPoultry={onViewPoultry ? handleViewPoultry : undefined}
          onEditPoultry={onEditPoultry ? handleEditPoultry : undefined}
          fallbackImage={POULTRY_PLACEHOLDER_IMAGE_URL}
        />
      </StyledCarousel>
    </StyledContainer>
  )
}

export default PoultriesCarousel
