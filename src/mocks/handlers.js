
import { http, HttpResponse } from 'msw/http'
import { graphql } from 'msw/graphql'
import { delay } from 'msw/utils/delay'
import { viajesPorDestino } from './datosViajes'

const destinos = [
    {
        id: 'buenos-aires',
        ciudad: 'Buenos Aires',
        pais: 'Argentina',
        actividadesPopulares: [
            'Visitar el Obelisco',
            'Recorrer Caminito',
            'Conocer Puerto Madero',
        ],
    },
    {
        id: 'rio-de-janeiro',
        ciudad: 'Río de Janeiro',
        pais: 'Brasil',
        actividadesPopulares: [
            'Visitar el Cristo Redentor',
            'Conocer Copacabana',
            'Subir al Pan de Azúcar',
        ],
    },
    {
        id: 'lima',
        ciudad: 'Lima',
        pais: 'Perú',
        actividadesPopulares: [
            'Recorrer Miraflores',
            'Visitar el centro histórico',
            'Conocer Barranco',
        ],
    },
    {
        id: 'santiago',
        ciudad: 'Santiago',
        pais: 'Chile',
        actividadesPopulares: [
            'Visitar el Cerro San Cristóbal',
            'Recorrer el centro histórico',
            'Conocer el Cajón del Maipo',
        ],
    },
]

const apiGraphql = graphql.link(
    `${import.meta.env.BASE_URL}graphql`,
)

export const handlers = [
    // API REST: listado de destinos

    http.get(`${import.meta.env.BASE_URL}api/destinos`, async () => {
        await delay(500)

        return HttpResponse.json(destinos)
    }),


    // API GraphQL: vuelos y hoteles de un destino
    apiGraphql.query(
        'ObtenerOpcionesDestino',
        async ({ variables }) => {
            await delay(500)

            const { destinoId } = variables

            const destino = destinos.find(
                (item) => item.id === destinoId,
            )

            const opciones = viajesPorDestino[destinoId]

            if (!destino || !opciones) {
                return HttpResponse.json({
                    errors: [
                        {
                            message: 'No se encontraron opciones para este destino.',
                        },
                    ],
                })
            }


            return HttpResponse.json({
                data: {
                    opcionesDestino: {
                        destinoId,
                        ciudad: destino.ciudad,
                        pais: destino.pais,
                        ...opciones,
                    },
                },
            })

        },
    ),
]
