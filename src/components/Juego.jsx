export const Juego = ({ articulo, agregarProducto }) => {
    return (
        <div className="tarjeta-container">
            <figure className="images-container">
                <img src={articulo.imagen} alt={articulo.nombre} />
                <figcaption>{articulo.nombre}</figcaption>
            </figure>
            <div className="precio">${articulo.precio}</div>
            <button onClick={() => agregarProducto(articulo)}>Añadir al carrito</button>
        </div>
    )
}
