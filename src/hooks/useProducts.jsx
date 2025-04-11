import { useEffect } from "react"
import { useProductContext } from "../context/ProductContext"

const useProducts = ()=>{
    const { products, fetchProducts } = useProductsContext()

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return products
}

export default useProducts

// Vamos a crear una interfaz, ya sea en una tabla, en componentes (cards), etc.
// del context jalamos todo, las categorías