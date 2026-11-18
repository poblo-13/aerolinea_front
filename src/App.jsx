
import { BrowserRouter, Route, Routes } from 'react-router'
import Encabezado from './components/Encabezado'
import Inicio from './pages/Inicio'
import Destinos from './pages/Destinos'
import DetalleDestino from './pages/DetalleDestino'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-viajes-white text-viajes-dark">
        <Encabezado />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route
            path="/destinos/:destinoId"
            element={<DetalleDestino />}
          />
          <Route
            path="*"
            element={
              <main className="mx-auto max-w-6xl px-5 py-12">
                <h1 className="text-2xl font-bold">
                  Página no encontrada
                </h1>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
