import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@cig-platform/data-helper'

import PoultryCarouselsContainer, { PoultryCarouselsContainerProps } from './containers/PoultryCarouselsContainer/PoultryCarouselsContainer'
import { Fragment, useMemo } from 'react'

type Params = {
  breederId: string;
  linkComponent?: PoultryCarouselsContainerProps['linkComponent']
}

type Callbacks = {
  onViewPoultry?: PoultryCarouselsContainerProps['onViewPoultry'];
  onEditPoultry?: PoultryCarouselsContainerProps['onEditPoultry'];
}

(window as any).renderBreederPoultriesPage = (
  containerId: string,
  params: Params,
  callbacks: Callbacks = {},
) => {
  const targetDocument = document.getElementById(containerId)

  const LinkComponent = useMemo(() => params?.linkComponent ?? Fragment, [])

  if (targetDocument) {
    ReactDOM.render(
      <QueryClientProvider client={queryClient}>
        <PoultryCarouselsContainer
          breederId={params.breederId}
          onViewPoultry={callbacks.onViewPoultry}
          onEditPoultry={callbacks.onEditPoultry}
          linkComponent={LinkComponent}
        />
      </QueryClientProvider>,
      targetDocument,
    )
  }
};

(window as any).unmountBreederPoultriesPage = (containerId: string) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.unmountComponentAtNode(targetDocument)
  }
}
