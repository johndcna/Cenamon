
import { useState } from "react";
import Navbar from "./Navbar.js";

export default function Store() {
    const [cart, setCart] = useState([]);

    function handleProductDelete(id) {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
    }

    function handleProductAdd(newProduct) {
        // check if item exists
        const existingProduct = cart.find(
            (product) => product.id === newProduct.id
        );
        if (existingProduct) {
            // increase quantity
            const updatedCart = cart.map((product) => {
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });
            setCart(updatedCart);
        } else {
            // product is new to the cart
            setCart([
                ...cart,
                {
                    ...newProduct,
                    quantity: 1,
                },
            ]);
        }
    }

    return (
        <>
            {<Navbar cart={cart} />}
            <div className="container">
      
            </div>
        </>
    );
}