import { useState, useEffect } from "react";
import { Juego } from "./Juego";
import { Cart } from "./Cart";

export const Juegos = ({ portafolio }) => {
    const [cart, setCart] = useState([]);
    const [productos, setProductos] = useState([]);
    const [total, setTotal] = useState(0);
    const [pagar, setPagar] = useState(null);

    useEffect(() => {
        const cartActual = JSON.parse(localStorage.getItem("miCarrito"));
        if (cartActual && cartActual.length > 0) {
            setCart([...cartActual]);
        } 

        const productosActuales = JSON.parse(localStorage.getItem("misProductos"));
        if (productosActuales && productosActuales.length > 0) {
            setProductos([...productosActuales]);
        } 
    }, [])
    

    useEffect(() => {
        localStorage.setItem("miCarrito", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("misProductos", JSON.stringify(productos));
        obtenerTotal();
    }, [productos]);
    
    
    const agregarProducto = (producto) => {
        setCart([...cart, producto])
        actualizarProductos(producto);
    };

    const actualizarProductos = (producto) => {
        if (productos.length === 0) {
            const primerProducto = {...producto, cantidad: 1};
            setProductos([...productos, primerProducto]);
        } else {
            const indice = productos.findIndex((p)=>p.id === producto.id);
            if (indice === -1) {
                const nuevoProducto = {...producto, cantidad: 1}
                setProductos([...productos, nuevoProducto])
            } else {
                const arreglo = [...productos];
                const productoActualizado = productos[indice];
                productoActualizado.cantidad += 1;
                arreglo.splice(indice, 1, productoActualizado);
                setProductos([...arreglo]);
            }
        }
    };

    const obtenerTotal = () => {
        let suma = 0;
        for (const i in productos) {
            const producto = productos[i];
            suma += producto.precio * producto.cantidad;
        }
        setTotal(suma);
    };

    const limpiarCarrito = () => {
        setCart([]);
        setProductos([]);
        setTotal(0);
        setPagar(null);
    };

    const manejarPago = () => {
        if (productos.length === 0) {
            alert("Carrito vacío, agregue productos")
        } else {
            // const resumen = productos.map()
            const gracias = (<div className="resumen-pagar"><div>GRACIAS POR TU COMPRA!! <br/> Te enviaremos tu código digital </div></div>);
            const detalles = (
                <div className="resumen-pagar">
                    <div>RESUMEN:</div>
                    <div>Total Juegos Digitales: {cart.length}</div>
                    <div>Total Productos por juego digital: {productos.length}</div>
                    <div><strong>Total: ${total}</strong></div>
                    <button onClick={() => {
                        setCart([]);
                        setProductos([]);
                        setTotal(0);
                        setPagar(gracias);
                    }}>Pagar</button>
                    <button onClick={() => setPagar(null)}>Cancelar</button>
                    <button onClick={limpiarCarrito}>Cancelar/LimpiarCarrito</button>
                </div>
            )
        setPagar(detalles);
        }
    };

    const articulos = portafolio.map((articulo) => 
        <Juego 
            key={articulo.id} 
            articulo={articulo} 
            agregarProducto={agregarProducto}
        />);

    return (
        <>
            <section className="contorno">
                <div className="titulo">Portafolio de nuestros mejores títulos</div>
                {pagar && <div className="pagar-container">{pagar}</div>}
                <Cart
                    totalJuegosDigitales={cart.length}
                    totalProductosxPlataforma={productos.length}
                    total={total}
                    limpiarCarrito={limpiarCarrito}
                    manejarPago={manejarPago}
                />
                <div className="tarjetas-container">{articulos}</div>
            </section>
        </>
        
    );
};
