
import { Link } from 'react-router'

function TarjetaDestino({ destino }) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="border-b border-slate-100 bg-viajes-light px-6 py-5">
                <p className="mb-1 text-sm font-medium text-viajes-muted">
                    {destino.pais}
                </p>

                <h2 className="text-2xl font-bold text-viajes-blue">
                    {destino.ciudad}
                </h2>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-4 font-semibold text-viajes-dark">
                    Actividades populares
                </h3>

                <ul className="mb-7 flex-1 space-y-3">
                    {destino.actividadesPopulares.map((actividad) => (
                        <li
                            key={actividad}
                            className="flex items-start gap-3 text-sm leading-relaxed text-viajes-muted"
                        >
                            <span
                                aria-hidden="true"
                                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-viajes-amber"
                            />

                            <span>{actividad}</span>
                        </li>
                    ))}
                </ul>

                <Link
                    to={`/destinos/${destino.id}`}
                    className="block rounded-lg bg-viajes-blue px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#245184] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viajes-blue"
                >
                    Ver vuelos y hoteles
                </Link>
            </div>
        </article>
    )
}

export default TarjetaDestino
