
export async function obtenerDestinos(signal) {
    const respuesta = await fetch(
        `${import.meta.env.BASE_URL}api/destinos`,
        { signal },
    )

    if (!respuesta.ok) {
        throw new Error('No fue posible obtener los destinos.')
    }

    return respuesta.json()
}
