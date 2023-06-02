import { Juegos } from "./Juegos";
import { portafolio } from "../utils/portafolio";

export const PaginaProductos = () => {
    return(
        <>
            <Juegos portafolio={portafolio} />
        </>
    ); 
};
