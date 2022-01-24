import { IPoultry } from '@cig-platform/types'
import { useQuery } from 'react-query'

import ContentSearchClient from '../clients/ContentSearchClient'

interface Data {
  forSale: IPoultry[];
  reproductives: IPoultry[];
  matrixes: IPoultry[];
  males: IPoultry[];
  females: IPoultry[];
}

export default function useData(breederId: string) {
  return useQuery<Data>(
    ['getPoultryData', breederId],
    () => ContentSearchClient.getBreederPoultries(breederId)
  )
}
