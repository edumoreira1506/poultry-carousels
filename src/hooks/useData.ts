import { IPoultry, IPoultryImage } from '@cig-platform/types'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useData as useDataFromDataHelper } from '@cig-platform/data-helper'

import ContentSearchClient from '../clients/ContentSearchClient'

export interface Poultry extends IPoultry {
  mainImage: string;
  images: IPoultryImage[];
  forSale: boolean;
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

  const data = useDataFromDataHelper<Data>(
    'getPoultryData',
    () => ContentSearchClient.getBreederPoultries(breederId, pagination),
    [breederId, ...Object.values(pagination).filter(Boolean)],
    {}
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
        females: [
          ...prevAccumuledData.females,
          ...data.data.females.filter(a =>
            prevAccumuledData.females.every(pA => pA.id !== a.id)
          )
        ],
        forSale: [
          ...prevAccumuledData.forSale,
          ...data.data.forSale.filter(a =>
            prevAccumuledData.forSale.every(pA => pA.id !== a.id)
          )
        ],
        matrixes: [
          ...prevAccumuledData.matrixes,
          ...data.data.matrixes.filter(a =>
            prevAccumuledData.matrixes.every(pA => pA.id !== a.id)
          )
        ],
        males: [
          ...prevAccumuledData.males,
          ...data.data.males.filter(a =>
            prevAccumuledData.males.every(pA => pA.id !== a.id)
          )
        ],
        reproductives: [
          ...prevAccumuledData.reproductives,
          ...data.data.reproductives.filter(a =>
            prevAccumuledData.reproductives.every(pA => pA.id !== a.id)
          )
        ],
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
  }), [data?.data, data?.isLoading, handlePaginate, accumuledData])

  return formattedData
}
