
import { gql } from '@apollo/client'

export const OBTENER_OPCIONES_DESTINO = gql`
  query ObtenerOpcionesDestino($destinoId: ID!) {
    opcionesDestino(destinoId: $destinoId) {
      destinoId
      ciudad
      pais
      vuelos {
        id
        aerolinea
        origen
        fechaSalida
        precio
        asientosDisponibles
      }
      hoteles {
        id
        nombre
        estrellas
        fechaEntrada
        fechaSalida
        precioPorNoche
        habitacionesDisponibles
      }
    }
  }
`
