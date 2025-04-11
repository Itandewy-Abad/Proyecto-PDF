import React from 'react'
import ProductCard from './ProductCard'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const Products = () => {
    const downloadPDF = () => {
        const doc = new jsPDF()

        // Obtiene la fecha actual y la formatea
        const today = new Date()
        const formattedDate = today.toLocaleDateString('es-MX')

        doc.setFontSize(18)
        doc.setTextColor('#e11d48')

        doc.text('Reporte - ' + formattedDate, 14, 20)

        autoTable(doc, {
            startY: 30,
            head: [['Categoria', 'Producto', 'Precio']],
            body: products.map((product) => {
                return [product.category, product.name, "$" + product.price]
            })
        })
    }

  return (
    <section className='flex flex-col w-full items-end'>
        <button
            onClick={ downloadPDF }
        >Descargar PDF
        </button>
    </section>
)
}

export default Products