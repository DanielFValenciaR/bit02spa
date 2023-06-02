export const Cart = ({totalJuegosDigitales, totalProductosxPlataforma, total, limpiarCarrito, manejarPago}) => {
    return (
        <>
            <section className="carrito-container">
                <div>Juegos Digitales: {totalJuegosDigitales}</div>
                <div>Productos por juego digital: {totalProductosxPlataforma}</div>
                <div>Total: {total}</div>
                {total > 0 && (
                    <>
                        <button onClick={manejarPago} className="boton-comprar">Comprar ahora</button>
                        <button onClick={limpiarCarrito}>Limpiar carrito</button>
                    </>
                )}
            </section>
        </>
    )
}
