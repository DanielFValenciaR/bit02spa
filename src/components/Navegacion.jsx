import { Link } from 'react-router-dom';

export const Navegacion = () => {
    return (
        <nav className='nav'>
            <Link to="/bit02spa" className='link-logo'>
                <figure className='logo-container'>
                    <img src="https://cdn.eneba.com/branding/v2/logoFull.svg" alt="Logo Eneba" className='logo' />
                </figure>
            </Link>
            <Link to="/bit02spa" className='link'>Inicio</Link>
            <Link to="/sobre-nosotros" className='link'>Sobre nosotros</Link>
            <Link to="/productos" className='link'>Productos</Link>
        </nav>
    );
};
