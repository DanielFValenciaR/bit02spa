import xbox from "../assets/imagenes/xbox.jpg";
import play from "../assets/imagenes/play.jpg";
import nintendo from "../assets/imagenes/nintendo.jpg";
import pc from "../assets/imagenes/pc.jpg";

export const PaginaInicio = () => {
    return (
        <section className="inicio-container">
            <div className="h-container">
                <h1>¡Compra los mejores videojuegos digitales en un solo lugar!</h1>
                <h2>Tenemos videojuegos para todas las plataformas disponibles actualmente: </h2>
            </div>
            
            <ul className="list-container"> 
                <li>Xbox
                    <figure>
                        <img src={xbox} alt="xbox" />
                    </figure>
                </li>
                <li>PlayStation
                    <figure>
                        <img src={play} alt="play" />
                    </figure>
                </li>
                <li>Nintendo
                    <figure>
                        <img src={nintendo} alt="nintendo" />
                    </figure>
                </li>
                <li>PC
                    <figure>
                        <img src={pc} alt="pc" />
                    </figure>
                </li>
            </ul>
            
            <div className="como-container">
                <h2>¿Cómo comprar?</h2>
                <p>Si eres nuevo en ENEBA o no estás seguro de cómo empezar, ¡no te preocupes! Tenemos esta guía paso a paso para que aprendas a comprar rápidamente ese juego que tanto quieres.</p>
                <p>Primer paso, no necesitas ningún registro en nuestra web para comprar, tendrás acceso a todas las compras que has realizado desde un mismo lugar. Así de sencillo es ser parte de la familia ENEBA.</p>
                <p>¡Ya estás preparado para comprar tus juegos favoritos! Puedes navegar a través de la sección productos, seleccionar sobre diferentes rangos de precios, consultar los más populares, todo en ENEBA.</p>
                <p>Una vez que encuentres el juego o el bundle que te gustaría jugar, puedes comprarlo a través de la página del producto. Asegúrate de que el juego que vas a comprar es de la plataforma que quieres. Una vez elegida la oferta, haz clic en <u>Añadir al carrito</u> si deseas continuar navegando o en <u>Comprar ahora</u> y te le llevará inmediatamente al carrito.</p>
                <p>En la confirmación del pago puedes valorar tu pedido. Cuando el pago se efectué, ¡voila! Tendrás un código de activación de tu juego.</p>
            </div>
        </section>
    )
}
