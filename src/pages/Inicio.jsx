
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import TarjetaInformativa from '../components/TarjetaInformativa'
import { obtenerDestinos } from '../services/destinosApi'

const caracteristicas = [
    {
        icono: 'destinos',
        titulo: 'Explora destinos',
        descripcion:
            'Descubre ciudades, conoce sus países y encuentra actividades populares para disfrutar durante tu viaje.',
    },
    {
        icono: 'vuelos',
        titulo: 'Consulta vuelos',
        descripcion:
            'Revisa opciones de vuelos, fechas de salida, precios y asientos disponibles según el destino elegido.',
    },
    {
        icono: 'hoteles',
        titulo: 'Descubre hoteles',
        descripcion:
            'Encuentra alternativas de alojamiento y consulta sus tarifas, fechas y habitaciones disponibles.',
    },
]

function Inicio() {
    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        let vigente = true

        obtenerDestinos()
            .then((datos) => {
                if (vigente) {
                    setDestinos(datos)
                }
            })
            .catch(() => {
                // La página de Inicio puede mostrarse sin el texto dinámico.
                // Los errores de consulta se gestionan en la página Destinos.
            })

        return () => {
            vigente = false
        }
    }, [])

    return (
        <main>
            <section className="bg-viajes-light px-5 py-12 sm:px-8 sm:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="rounded-2xl bg-viajes-blue px-6 py-12 text-white sm:px-12 sm:py-16">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-viajes-amber">
                            Descubre nuevos destinos
                        </p>

                        <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            Tu próximo destino comienza aquí
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                            Explora destinos, descubre nuevas experiencias y consulta
                            opciones de vuelos y hoteles para planificar tu próximo viaje.
                        </p>

                        {destinos.length > 0 && (
                            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80">
                                Explora nuestras ciudades:{' '}
                                <span className="font-semibold text-white">
                                    {destinos.map((destino) => destino.ciudad).join(', ')}.
                                </span>
                            </p>
                        )}

                        <Link
                            to="/destinos"
                            className="mt-8 inline-block rounded-lg bg-viajes-amber px-6 py-3 font-semibold text-viajes-dark transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-viajes-amber"
                        >
                            Explorar destinos
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="mb-10 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-viajes-blue">
                        Planifica tu próxima aventura
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-viajes-blue sm:text-4xl">
                        Todo lo que necesitas para organizar tu viaje
                    </h2>

                    <p className="mt-4 leading-relaxed text-viajes-muted sm:text-lg">
                        Descubre destinos y consulta alternativas de vuelos y hoteles
                        para preparar tu próxima escapada.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {caracteristicas.map((caracteristica) => (
                        <TarjetaInformativa
                            key={caracteristica.icono}
                            {...caracteristica}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Inicio
