import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import PoultryCarouselsContainer from './containers/PoultryCarouselsContainer/PoultryCarouselsContainer'

const queryClient = new QueryClient()

type Params = {
  breederId: string;
}

type Callbacks = {
  onViewPoultry: ({ breederId, poultryId }: { breederId: string, poultryId: string }) => void;
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
