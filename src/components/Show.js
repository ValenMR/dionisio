import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//vamos a impotar lo necesario para trabajar con la base de datos de firestore
import {collection, getDocs, getDoc, deleteDoc } from 'firebase/firestore'

//importar la conexión a la base de datos
import { db } from '../firabaseConfig/firebase'

//esto es solo para cuando realicemos la función para eliminar un documento
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const Show = () => {
  
  //1 - configurar los hooks
  
  //2 - referenciamos a la DB firestore

  //3 - Función para mostrar TODOS los docs

  //4 - Función para eliminar un doc

  //5 - Función de confirmación para sweer alert

  //6 - usamos useEffect

  //7 - devolvemos vista de nuestro componente 
  
  return (
    <div>Show</div>
  )
}
