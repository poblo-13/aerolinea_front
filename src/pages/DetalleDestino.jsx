
import { Link, useParams } from 'react-router'
import { useQuery } from '@apollo/client/react'
import { OBTENER_OPCIONES_DESTINO } from '../graphql/consultas'
import TarjetaVuelo from '../components/TarjetaVuelo'
import TarjetaHotel from '../components/TarjetaHotel'

function DetalleDestino() {
    const { destinoId } = useParams()

    const { loading, error, data } = useQuery(
        OBTENER_OPCIONES_DESTINO,
        {
            variables: { destinoId },
        },
    )

    // Estado de carga
    if (loading) {
        return (
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
                <h1 className="text-3xl font-bold text-viajes-blue sm:text-4xl">
                    Opciones de viaje
                </h1>

                <p role="status" className="mt-5 text-viajes-muted">
                    Consultando vuelos y hoteles...
                </p>
            </main>
        )
    }

    // Manejo de errores
    if (error || !data?.opcionesDestino) {
        return (
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
                <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                    <h1 className="text-2xl font-bold text-viajes-dark">
                        Destino no disponible
                    </h1>

                    <p role="alert" className="mt-3 text-red-700">
                        {error?.message ||
                            'No encontramos información para este destino.'}
                    </p>

                    <Link
                        to="/destinos"
                        className="mt-6 inline-block font-semibold text-viajes-blue underline"
                    >
                        Volver a destinos
                    </Link>
                </div>
            </main>
        )
    }

    // Los datos ya están disponibles
    const opciones = data.opcionesDestino

    return (
        <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="mb-10">
                <Link
                    to="/destinos"
                    className="text-sm font-semibold text-viajes-blue hover:underline"
                >
                    Volver a destinos
                </Link>

                <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-widest text-viajes-blue">
                    Planifica tu viaje
                </p>

                <h1 className="text-3xl font-bold text-viajes-blue sm:text-4xl">
                    Tu viaje a {opciones.ciudad}
                </h1>

                <p className="mt-2 font-medium text-viajes-muted">
                    {opciones.pais}
                </p>

                <p className="mt-4 text-viajes-muted">
                    Consulta vuelos y alojamientos disponibles para tu destino.
                </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
                <section aria-labelledby="titulo-vuelos">
                    <h2
                        id="titulo-vuelos"
                        className="mb-6 border-l-4 border-viajes-amber pl-4 text-2xl font-bold text-viajes-blue"
                    >
                        Vuelos disponibles
                    </h2>

                    <div className="grid gap-5">
                        {opciones.vuelos.length === 0 ? (
                            <p className="text-viajes-muted">
                                No hay vuelos disponibles para este destino.
                            </p>
                        ) : (
                            opciones.vuelos.map((vuelo) => (
                                <TarjetaVuelo key={vuelo.id} vuelo={vuelo} />
                            ))
                        )}
                    </div>
                </section>

                <section aria-labelledby="titulo-hoteles">
                    <h2
                        id="titulo-hoteles"
                        className="mb-6 border-l-4 border-viajes-amber pl-4 text-2xl font-bold text-viajes-blue"
                    >
                        Hoteles disponibles
                    </h2>

                    <div className="grid gap-5">
                        {opciones.hoteles.length === 0 ? (
                            <p className="text-viajes-muted">
                                No hay hoteles disponibles para este destino.
                            </p>
                        ) : (
                            opciones.hoteles.map((hotel) => (
                                <TarjetaHotel key={hotel.id} hotel={hotel} />
                            ))
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default DetalleDestino
