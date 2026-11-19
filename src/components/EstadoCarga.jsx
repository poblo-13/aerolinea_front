
function EstadoCarga({ mensaje = 'Cargando información...' }) {
    return (
        <div
            role="status"
            aria-live="polite"
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-viajes-light px-6 py-5"
        >
            <span
                aria-hidden="true"
                className="h-6 w-6 shrink-0 animate-spin rounded-full border-3 border-viajes-blue/20 border-t-viajes-blue motion-reduce:animate-none"
            />

            <p className="font-medium text-viajes-blue">
                {mensaje}
            </p>
        </div>
    )
}

export default EstadoCarga
