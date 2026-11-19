
import { useEffect, useState } from 'react'
import TarjetaDestino from '../components/TarjetaDestino'
import EstadoCarga from '../components/EstadoCarga'
import EstadoError from '../components/EstadoError'
import { obtenerDestinos } from '../services/destinosApi'

function Destinos() {
    const [destinos, setDestinos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState('')
    const [intento, setIntento] = useState(0)

    useEffect(() => {
        let vigente = true

        async function cargarDestinos() {
            setCargando(true)
            setError('')

            try {
                const datos = await obtenerDestinos({
                    forzar: intento > 0,
                })

                if (vigente) {
                    setDestinos(datos)
                }
            } catch (err) {
                if (vigente) {
                    const mensaje = err.status
                        ? `Error HTTP ${err.status}: ${err.message}`
                        : err.message

                    setError(mensaje)
                }
            } finally {
                if (vigente) {
                    setCargando(false)
                }
            }
        }

        cargarDestinos()

        return () => {
            vigente = false
        }
    }, [intento])

    return (
        <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-viajes-blue">
                    Explora el mundo
                </p>

                <h1 className="text-3xl font-bold text-viajes-blue sm:text-4xl">
                    Destinos disponibles
                </h1>

                <p className="mt-4 max-w-2xl leading-relaxed text-viajes-muted">
                    Descubre ciudades, conoce sus actividades más populares y
                    encuentra opciones de vuelos y hoteles para tu próximo viaje.
                </p>
            </div>

            {cargando && (
                <EstadoCarga mensaje="Cargando destinos..." />
            )}

            {!cargando && error && (
                <EstadoError
                    mensaje={error}
                    onReintentar={() => setIntento((n) => n + 1)}
                />
            )}

            {!cargando && !error && destinos.length === 0 && (
                <p className="text-viajes-muted">
                    No hay destinos disponibles por ahora.
                </p>
            )}

            {!cargando && !error && destinos.length > 0 && (
                <section
                    aria-label="Listado de destinos"
                    className="grid gap-6 md:grid-cols-2"
                >
                    {destinos.map((destino) => (
                        <TarjetaDestino
                            key={destino.id}
                            destino={destino}
                        />
                    ))}
                </section>
            )}
        </main>
    )
}

export default Destinos
