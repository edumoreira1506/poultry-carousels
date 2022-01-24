import React, { useCallback, useMemo, useState, VFC } from 'react'
import { ImageGallery, PoultriesCarousel as UIPoultriesCarousel, Modal } from '@cig-platform/ui'

import { StyledCarousel, StyledContainer, StyledTitle } from './PoultriesCarousel.styles'
import { createImageUrl } from '../../utils/url'
import { MARKETPLACE_URL } from '../../constants/url'
import { Poultry } from '../../hooks/useData'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-image-gallery/styles/css/image-gallery.css'

type PoultriesCarouselProps = {
  poultries?: Poultry[];
  title: string;
  breederId: string;
}

const PoultriesCarousel: VFC<PoultriesCarouselProps> = ({
  poultries = [],
  title,
  breederId
}: PoultriesCarouselProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalImages, setModalImages] = useState<{ original: string; thumbnail: string; }[]>([])

  if (!poultries.length) return null

  const handleCloseModal = useCallback(() => setIsOpenModal(false), [])

  const handleViewPoultry = useCallback((poultryId: string) => {
    window.location.assign(`${MARKETPLACE_URL}breeders/${breederId}/poultries/${poultryId}`)
  }, [breederId])

  const formattedPoultries = useMemo(() => poultries.map((poultry) => ({
    ...poultry,
    mainImage: createImageUrl({ folder: 'poultries', subfolder: 'images', filename: poultry?.mainImage }) ?? ''
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
          onViewPoultry={handleViewPoultry}
        />
      </StyledCarousel>
    </StyledContainer>
  )
}

export default PoultriesCarousel