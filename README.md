
# FLY SOUTH — Agencia de viajes

Aplicación web desarrollada para la evaluación sumativa de la Semana 5 de Desarrollo Frontend II (PFY2202), Duoc UC.

FLY SOUTH permite explorar destinos turísticos y consultar alternativas de vuelos y hoteles mediante una API REST mock y una API GraphQL mock.

> Proyecto académico: los vuelos, hoteles, precios, fechas y disponibilidades son datos simulados. No se realizan reservas ni pagos reales.

## Funcionalidades

- Página de inicio con información de destinos obtenida dinámicamente desde REST.
- Listado de destinos, países y actividades populares.
- Consulta de vuelos y hoteles asociados a cada destino mediante GraphQL.
- Visualización de precios en pesos chilenos, fechas y disponibilidad.
- Navegación con React Router.
- Indicadores de carga, mensajes de error y botones para reintentar.
- Actualización manual de vuelos y hoteles con Apollo Client.
- Diseño responsivo para computadores y dispositivos móviles.
- Componentes reutilizables y animaciones visuales consistentes.

## Tecnologías utilizadas

- React y Vite
- JavaScript, HTML y CSS
- Tailwind CSS 4
- React Router
- Fetch API
- GraphQL y Apollo Client
- Mock Service Worker (MSW)
- Lucide React
- Oxlint

## Integración con APIs

### API REST mock

**Endpoint:** `GET /api/destinos`

Devuelve los destinos disponibles con:

- Identificador único
- Ciudad y país
- Actividades populares

### API GraphQL mock

**Endpoint:** `POST /graphql`

La consulta `ObtenerOpcionesDestino` recibe `destinoId` y devuelve los vuelos y hoteles correspondientes, incluyendo precios, fechas y disponibilidad.

Ambos servicios son simulados mediante MSW, sin necesidad de instalar un backend externo.

## Manejo de datos y errores

- MSW se inicia antes de montar React.
- Los endpoints se centralizan en `src/config/api.js`.
- REST utiliza una caché de 60 segundos.
- Las solicitudes REST simultáneas comparten una petición pendiente para evitar duplicados en StrictMode.
- Los componentes evitan actualizarse con respuestas de efectos que ya no están vigentes.
- Los errores REST conservan el código HTTP y el mensaje enviado por el backend mock.
- Apollo Client almacena resultados GraphQL mediante `cache-first`.
- El botón **Actualizar opciones** utiliza `refetch()` para consultar nuevamente vuelos y hoteles.
- Existen estados visuales para carga, errores y ausencia de resultados.

## Instalación

Requiere Node.js y npm compatibles con Vite.

Clonar el repositorio:

```bash
git clone https://github.com/poblo-13/aerolinea_front.git
```

Entrar a la carpeta:

```bash
cd aerolinea_front
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm run dev
```

Abrir la dirección indicada por Vite, normalmente:

`http://localhost:5173/`

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia la aplicación en desarrollo. |
| `npm run lint` | Analiza el código con Oxlint. |
| `npm run build` | Genera la versión de producción. |
| `npm run preview` | Permite revisar la compilación localmente. |

## Estructura principal

```text
src/
├── components/      # Componentes visuales reutilizables
├── config/          # Configuración compartida de las APIs
├── graphql/         # Cliente Apollo y consultas GraphQL
├── mocks/           # Handlers y datos simulados
├── pages/           # Inicio, Destinos y DetalleDestino
├── services/        # Servicio REST y caché
├── utils/           # Utilidades de formato
├── App.jsx          # Configuración de rutas
├── main.jsx         # Inicialización de MSW y React
└── index.css        # Tailwind y estilos compartidos
```

## Pruebas realizadas

Durante el desarrollo se comprobaron:

- Consultas REST y GraphQL de forma independiente.
- Correspondencia entre destinos, vuelos y hoteles.
- Manejo de errores y posibilidad de reintentar.
- Destinos inexistentes y opciones vacías.
- Indicadores de carga.
- Deduplicación de solicitudes REST en StrictMode.
- Expiración de la caché REST después de 60 segundos.
- Actualización de resultados GraphQL.
- Adaptación responsiva de las principales vistas.
- Ejecución de `npm run lint` y `npm run build`.

Antes de la entrega definitiva también se debe comprobar el funcionamiento en distintos navegadores y en GitHub Pages.

## Publicación

La aplicación utiliza la ruta base `/aerolinea_front/` en producción y HashRouter para facilitar la navegación en GitHub Pages.

El backend mock se habilita en producción mediante la variable:

`VITE_ENABLE_MSW=true`

**Repositorio:** https://github.com/poblo-13/aerolinea_front

---

**Autor:** Pablo Pilar  
**Asignatura:** Desarrollo Frontend II — PFY2202  
**Actividad:** Evaluación sumativa, Semana 5
