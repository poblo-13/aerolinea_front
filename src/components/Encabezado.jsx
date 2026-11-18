
import { NavLink } from 'react-router'

function Encabezado() {
    const estiloEnlace = ({ isActive }) =>
        `border-b-2 pb-1 text-sm font-medium transition-colors sm:text-base ${isActive
            ? 'border-viajes-amber text-white'
            : 'border-transparent text-white/80 hover:text-white'
        }`

    return (
        <header className="bg-viajes-blue text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <NavLink
                    to="/"
                    className="text-xl font-bold tracking-tight text-white sm:text-2xl"
                >
                    FLY SOUTH
                </NavLink>

                <nav
                    aria-label="Navegación principal"
                    className="flex items-center gap-7"
                >
                    <NavLink to="/" end className={estiloEnlace}>
                        Inicio
                    </NavLink>

                    <NavLink to="/destinos" className={estiloEnlace}>
                        Destinos
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Encabezado
