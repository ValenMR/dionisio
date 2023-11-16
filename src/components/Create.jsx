import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { collection, addDoc } from 'firebase/firestore'

import { db } from '../firabaseConfig/firebase'

const Create = () => {
  //form donde vamos a hacer el alta de productos.   

  const [ description, setDescription ] = useState('')
  const [ stock, setStock ] = useState('')
  const navigate = useNavigate()

  const productsCollection = collection(db, "products")

  //función para almacenar
  const store = async (e) => {
    e.preventDefault()
    await addDoc( productsCollection, { description: description, stock: stock } )
    navigate('/') //que vaya a la ruta raiz que nos lleva al componente show
    //console.log(e) //para ver de donde sale ese evento
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Create Product</h1>

                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input
                            value={description}
                            onChange={ (e) => setDescription(e.target.value)}
                            type='text'
                            className='form-control' 
                        />

                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Stock</label>
                        <input
                            value={stock}
                            onChange={ (e) => setStock(e.target.value)}
                            type='text'
                            className='form-control' 
                        />

                    </div>
                    <button type='submit' className='btn btn-primary'>Store</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Create