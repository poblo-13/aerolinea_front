
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from './graphql/apolloClient'
import './index.css'
import App from './App.jsx'
import { API_ENDPOINTS } from './config/api'


async function iniciarMocks() {
  const habilitarMocks =
    import.meta.env.DEV ||
    import.meta.env.VITE_ENABLE_MSW === 'true'

  if (habilitarMocks) {
    const { worker } = await import('./mocks/browser')

    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: API_ENDPOINTS.worker,
      },
    })
  }
}

iniciarMocks().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </StrictMode>,
  )
})
