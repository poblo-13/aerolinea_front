
import { Globe2, Plane, Hotel } from 'lucide-react'

const iconos = {
    destinos: Globe2,
    vuelos: Plane,
    hoteles: Hotel,
}

function TarjetaInformativa({ icono, titulo, descripcion }) {
    const Icono = iconos[icono]

    return (
        <article className="card-ui flex h-full flex-col p-7">
            <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl bg-viajes-blue/10 text-viajes-blue">
                <Icono size={27} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h3 className="text-xl font-bold text-viajes-blue">
                {titulo}
            </h3>

            <p className="mt-3 flex-1 leading-relaxed text-viajes-muted">
                {descripcion}
            </p>

            <div
                aria-hidden="true"
                className="mt-7 h-1 w-12 rounded-full bg-viajes-amber"
            />
        </article>
    )
}

export default TarjetaInformativa
