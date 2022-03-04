import { IPoultry, IPoultryImage } from '@cig-platform/types'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import ContentSearchClient from '../clients/ContentSearchClient'

export interface Poultry extends IPoultry {
  mainImage: string;
  images: IPoultryImage[];
}

interface DataPagination {
  forSale: number;
  reproductives: number;
  matrixes: number;
  males: number;
  females: number;
}

interface Data {
  forSale: Poultry[];
  reproductives: Poultry[];
  matrixes: Poultry[];
  males: Poultry[];
  females: Poultry[];
  pagination: Partial<DataPagination>
}

const EMPTY_DATA_PAGINATION = {
  forSale: 0,
  reproductives: 0,
  matrixes: 0,
  males: 0,
  females: 0,
}

export default function useData(breederId: string) {
  const [pagination, setPagination] = useState<DataPagination>(EMPTY_DATA_PAGINATION)
  const [totalPagination, setTotalPagination] = useState(EMPTY_DATA_PAGINATION)
  const [accumuledData, setAccumuledData] = useState<Omit<Data, 'pagination'>>({
    forSale: [],
    reproductives: [],
    females: [],
    males: [],
    matrixes: [],
  })

  const data = useQuery<Data>(
    ['getPoultryData', breederId],
    () => ContentSearchClient.getBreederPoultries(breederId, pagination)
  )

  const handlePaginate = useCallback((type: string) => {
    const totalPaginationOfType = (totalPagination as any)?.[type] ?? 0
    const currentPaginationOfType = (pagination as any)?.[type] ?? 0

    if (currentPaginationOfType < totalPaginationOfType - 1 && !data.isLoading) {
      setPagination(prevPagination => ({
        ...prevPagination,
        [type]: currentPaginationOfType + 1
      }))
    }
  }, [totalPagination, pagination, data.isLoading])

  useEffect(() => {
    if (data?.data) {
      setAccumuledData(prevAccumuledData => ({
        females: [...prevAccumuledData.females, ...data.data.females],
        forSale: [...prevAccumuledData.forSale, ...data.data.forSale],
        matrixes: [...prevAccumuledData.matrixes, ...data.data.matrixes],
        males: [...prevAccumuledData.males, ...data.data.males],
        reproductives: [...prevAccumuledData.reproductives, ...data.data.reproductives],
      }))
    }
  }, [data?.data])

  useEffect(() => {
    if (data?.data?.pagination) {
      setTotalPagination(data.data.pagination as any)
    }
  }, [data?.data?.pagination])

  const formattedData = useMemo(() => ({
    data: { ...accumuledData, pagination: data?.data?.pagination },
    isLoading: data.isLoading,
    onPaginate: handlePaginate
  }), [data?.data, data?.isLoading, handlePaginate])

  return formattedData
}
