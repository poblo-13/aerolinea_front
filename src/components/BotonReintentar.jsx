
function BotonReintentar({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="mt-4 rounded-lg bg-viajes-blue px-5 py-3 font-semibold text-white transition-colors hover:bg-[#245184] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viajes-amber"
        >
            Reintentar
        </button>
    )
}

export default BotonReintentar
