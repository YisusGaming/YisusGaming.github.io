import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Principal</NavLink>
                </li>
                <li>Proyectos en Desarrollo</li>
                <li>Información sobre Proyectos</li>
                <li>Contacto</li>
                <li>Blog</li>
            </ul>
        </nav>
    );
}
