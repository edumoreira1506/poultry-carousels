import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import PoultryCarouselsContainer, { PoultryCarouselsContainerProps } from './containers/PoultryCarouselsContainer/PoultryCarouselsContainer'

const queryClient = new QueryClient()

type Params = {
  breederId: string;
}

type Callbacks = {
  onViewPoultry: PoultryCarouselsContainerProps['onViewPoultry'];
  onEditPoultry: PoultryCarouselsContainerProps['onEditPoultry'];
}

(window as any).renderPoultryPage = (
  containerId: string,
  params: Params,
  callbacks: Callbacks
) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.render(
      <QueryClientProvider client={queryClient}>
        <PoultryCarouselsContainer
          breederId={params.breederId}
          onViewPoultry={callbacks.onViewPoultry}
          onEditPoultry={callbacks.onEditPoultry}
        />
      </QueryClientProvider>,
      targetDocument,
    )
  }
};

(window as any).unmountPoultryPage = (containerId: string) => {
  const targetDocument = document.getElementById(containerId)

  if (targetDocument) {
    ReactDOM.unmountComponentAtNode(targetDocument)
  }
}
