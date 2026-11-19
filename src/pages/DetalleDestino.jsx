
import { Link, useParams } from 'react-router'
import { useQuery } from '@apollo/client/react'
import { OBTENER_OPCIONES_DESTINO } from '../graphql/consultas'
import TarjetaVuelo from '../components/TarjetaVuelo'
import TarjetaHotel from '../components/TarjetaHotel'
import EstadoCarga from '../components/EstadoCarga'
import EstadoError from '../components/EstadoError'

function DetalleDestino() {
    const { destinoId } = useParams()

    const { loading, error, data, refetch } = useQuery(
        OBTENER_OPCIONES_DESTINO,
        {
            variables: { destinoId },
            fetchPolicy: 'cache-first',
            notifyOnNetworkStatusChange: true,
        },
    )

    const actualizando = loading && Boolean(data?.opcionesDestino)

    function actualizarOpciones() {
        refetch().catch(() => {
            // Apollo actualiza el estado de error de la consulta.
        })
    }

    // Estado de carga inicial
    if (loading && !data?.opcionesDestino) {
        return (
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
                <h1 className="text-3xl font-bold text-viajes-blue sm:text-4xl">
                    Opciones de viaje
                </h1>

                <div className="mt-6">
                    <EstadoCarga mensaje="Consultando vuelos y hoteles..." />
                </div>
            </main>
        )
    }

    // Error o destino sin información
    if (!data?.opcionesDestino) {
        return (
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
                <h1 className="mb-6 text-2xl font-bold text-viajes-blue">
                    Destino no disponible
                </h1>

                <EstadoError
                    mensaje={
                        error?.message ||
                        'No encontramos información para este destino.'
                    }
                    onReintentar={actualizarOpciones}
                />

                <Link
                    to="/destinos"
                    className="mt-6 inline-block font-semibold text-viajes-blue hover:underline"
                >
                    Volver a destinos
                </Link>
            </main>
        )
    }

    // Datos obtenidos desde GraphQL
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

                <button
                    type="button"
                    disabled={actualizando}
                    onClick={actualizarOpciones}
                    className="mt-6 rounded-lg bg-viajes-blue px-5 py-3 font-semibold text-white transition-colors hover:bg-[#245184] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viajes-amber disabled:cursor-wait disabled:opacity-60"
                >
                    {actualizando
                        ? 'Actualizando opciones...'
                        : 'Actualizar opciones'}
                </button>

                {error && (
                    <div className="mt-5">
                        <EstadoError
                            mensaje={`No se pudieron actualizar las opciones: ${error.message}`}
                            onReintentar={actualizarOpciones}
                        />
                    </div>
                )}
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
                                <TarjetaVuelo
                                    key={vuelo.id}
                                    vuelo={vuelo}
                                />
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
                                <TarjetaHotel
                                    key={hotel.id}
                                    hotel={hotel}
                                />
                            ))
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default DetalleDestino
