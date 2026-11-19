
import { formatearPrecio } from '../utils/formatearPrecio'

function TarjetaHotel({ hotel }) {
    const disponible = hotel.habitacionesDisponibles > 0
    return (
        <article className="card-ui overflow-hidden">
            <div className="border-b border-slate-100 bg-viajes-light px-6 py-5">
                <p className="mb-1 text-sm font-medium text-viajes-muted">
                    Alojamiento
                </p>

                <h3 className="text-xl font-bold text-viajes-blue">
                    {hotel.nombre}
                </h3>
            </div>

            <div className="space-y-4 p-6">
                <div>
                    <p className="text-sm text-viajes-muted">Fecha de entrada</p>
                    <p className="font-semibold text-viajes-dark">
                        {hotel.fechaEntrada}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-viajes-muted">Fecha de salida</p>
                    <p className="font-semibold text-viajes-dark">
                        {hotel.fechaSalida}
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <div>
                        <p className="text-sm text-viajes-muted">
                            Precio por noche
                        </p>
                        <p className="text-2xl font-bold text-viajes-blue">
                            {formatearPrecio(hotel.precioPorNoche)}
                        </p>
                    </div>

                    <span
                        className={`rounded-full px-3 py-2 text-xs font-semibold ${disponible
                                ? 'bg-green-50 text-green-800'
                                : 'bg-red-50 text-red-700'
                            }`}
                    >
                        {disponible
                            ? `${hotel.habitacionesDisponibles} habitaciones disponibles`
                            : 'Sin disponibilidad'}
                    </span>
                </div>
            </div>
        </article>
    )
}

export default TarjetaHotel
