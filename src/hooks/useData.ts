import { IPoultry, IPoultryImage } from '@cig-platform/types'
import { useQuery } from 'react-query'

import ContentSearchClient from '../clients/ContentSearchClient'

export interface Poultry extends IPoultry {
  mainImage: string;
  images: IPoultryImage[];
}

interface Data {
  forSale: Poultry[];
  reproductives: Poultry[];
  matrixes: Poultry[];
  males: Poultry[];
  females: Poultry[];
}

export default function useData(breederId: string) {
  return useQuery<Data>(
    ['getPoultryData', breederId],
    () => ContentSearchClient.getBreederPoultries(breederId)
  )
}
