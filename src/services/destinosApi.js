
import { API_ENDPOINTS } from '../config/api'

const DURACION_CACHE = 60 * 1000

let cacheDestinos = null
let expiracionCache = 0
let solicitudPendiente = null

export async function obtenerDestinos({ forzar = false } = {}) {
    const ahora = Date.now()

    // Reutilizar datos mientras la caché sea válida
    if (
        !forzar &&
        cacheDestinos !== null &&
        ahora < expiracionCache
    ) {
        return cacheDestinos
    }

    // Compartir una solicitud que ya está en curso
    if (solicitudPendiente) {
        return solicitudPendiente
    }

    const solicitud = (async () => {
        let respuesta

        try {
            respuesta = await fetch(API_ENDPOINTS.destinos)
        } catch {
            throw new Error(
                'No se pudo establecer conexión con el servicio de destinos.',
            )
        }

        if (!respuesta.ok) {
            const datosError = await respuesta.json().catch(() => null)

            const mensaje =
                typeof datosError?.message === 'string'
                    ? datosError.message
                    : 'No fue posible obtener los destinos.'

            const error = new Error(mensaje)
            error.status = respuesta.status

            throw error
        }

        const datos = await respuesta.json()

        if (!Array.isArray(datos)) {
            throw new Error(
                'El servicio devolvió un formato de destinos incorrecto.',
            )
        }

        cacheDestinos = datos
        expiracionCache = Date.now() + DURACION_CACHE

        return datos
    })()

    solicitudPendiente = solicitud

    try {
        return await solicitud
    } finally {
        if (solicitudPendiente === solicitud) {
            solicitudPendiente = null
        }
    }
}
