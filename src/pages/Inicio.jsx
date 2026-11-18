
import { Link } from 'react-router'

function Inicio() {
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

                        <Link
                            to="/destinos"
                            className="mt-8 inline-block rounded-lg bg-viajes-amber px-6 py-3 font-semibold text-viajes-dark transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-viajes-amber"
                        >
                            Explorar destinos
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold text-viajes-blue sm:text-3xl">
                        Planifica tu próxima aventura
                    </h2>

                    <p className="mt-3 leading-relaxed text-viajes-muted">
                        Encuentra información útil para descubrir destinos y
                        comparar alternativas de viaje en un mismo lugar.
                    </p>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <article className="rounded-xl border border-slate-200 bg-white p-6">
                        <h3 className="text-xl font-semibold text-viajes-blue">
                            Destinos
                        </h3>

                        <p className="mt-3 leading-relaxed text-viajes-muted">
                            Explora diferentes ciudades, conoce sus países y
                            descubre sus actividades más populares.
                        </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white p-6">
                        <h3 className="text-xl font-semibold text-viajes-blue">
                            Vuelos
                        </h3>

                        <p className="mt-3 leading-relaxed text-viajes-muted">
                            Consulta alternativas de vuelos, fechas de salida,
                            precios y asientos disponibles.
                        </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-white p-6">
                        <h3 className="text-xl font-semibold text-viajes-blue">
                            Hoteles
                        </h3>

                        <p className="mt-3 leading-relaxed text-viajes-muted">
                            Descubre opciones de alojamiento, tarifas por noche
                            y habitaciones disponibles para tu viaje.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Inicio
