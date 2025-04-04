import { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const useProductContext = () => {
  return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:3000")
    const productsResponse = await data.json()
    setProducts(productsResponse)

    const uniqueCategories = [...Set(productsResponse.map((product) => product.category))] // Aquí estamos mandando un objeto de llave valor

    setCategories(uniqueCategories)

  }

  const datosCompartidos = {
    products,
    categories,
    fetchProducts
  }

  return (
    <ProductContext.Provider values = {datosCompartidos}>
      {children}
    </ProductContext.Provider>
  )
}
