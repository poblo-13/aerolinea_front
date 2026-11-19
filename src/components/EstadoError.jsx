
import BotonReintentar from './BotonReintentar'

function EstadoError({ mensaje, onReintentar }) {
    return (
        <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-6"
        >
            <p className="font-medium text-red-700">
                {mensaje}
            </p>

            {onReintentar && (
                <BotonReintentar onClick={onReintentar} />
            )}
        </div>
    )
}

export default EstadoError
