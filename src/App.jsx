
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Link,
} from 'react-router'

import Encabezado from './components/Encabezado'
import Inicio from './pages/Inicio'
import Destinos from './pages/Destinos'
import DetalleDestino from './pages/DetalleDestino'

const Router = import.meta.env.PROD
  ? HashRouter
  : BrowserRouter

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-viajes-white text-viajes-dark">
        <Encabezado />

        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route
            path="/destinos"
            element={<Destinos />}
          />

          <Route
            path="/destinos/:destinoId"
            element={<DetalleDestino />}
          />

          <Route
            path="*"
            element={
              <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
                <h1 className="text-2xl font-bold text-viajes-blue">
                  Página no encontrada
                </h1>

                <Link
                  to="/"
                  className="mt-4 inline-block font-semibold text-viajes-blue underline"
                >
                  Volver al inicio
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
