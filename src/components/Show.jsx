import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//vamos a impotar lo necesario para trabajar con la base de datos de firestore
import {collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'

//importar la conexión a la base de datos
import { db } from '../firabaseConfig/firebase'

//esto es solo para cuando realicemos la función para eliminar un documento
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)

export const Show = () => {
  
  //1 - configurar los hooks
  const [products, setProducts] = useState( [] )
  
  //2 - referenciamos a la DB firestore
  const productsCollection = collection(db, "products")

  //3 - Función para mostrar TODOS los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection)
    //onsole.log(data.docs)
    setProducts(
        data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
    )
    //console.log(products)
  }
  //4 - Función para eliminar un doc
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id)
    await deleteDoc(productDoc)
    getProducts()
  }
  //5 - Función de confirmación para sweer alert
  const confirmDelete = (id) => {
    MySwal.fire({
        title: "¿Eliminar el producto?",
        text: "No podrás volver atrás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            //nuestra función
            deleteProduct(id)
            Swal.fire({
                title: "Eliminado!",
                text: "La fila ha sido eliminada",
                icon: "success"
            });
        }
      });
  }

  //6 - usamos useEffect
  useEffect( () => {
    getProducts()
    //eslint-disable-next-line
  }, [] )
  
  //7 - devolvemos vista de nuestro componente 
  //algo de bootstrap
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                    <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Crear</Link>
                </div>
                
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        { products.map( (product) => (
                            <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to = {'/edit/${product.id}'} className='btn btn-light'><i className='fa-solid fa-pencil'></i>Editar</Link>
                                    <button onClick={ () => { confirmDelete(product.id) } } className='btn btn-danger'><i className="fa-solid fa-trash-can"></i>Borrar</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    
  )
}
