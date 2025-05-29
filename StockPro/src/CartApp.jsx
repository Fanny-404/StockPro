import { useItemsCart } from "./hooks/useItemsCart"
import { CartRoutes } from "./routes/CartRoutes";
import { Carousel } from "./components/Carousel.jsx"; // Asegúrate de que esta ruta sea correcta

export const CartApp = () => {
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <Carousel /> 
            <div className="container my-4"> 
                <h3>Cart App</h3>
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    );
}