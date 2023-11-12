import './App.css';
import React from 'react';

//importar nuestros componentes
import { Show } from './components/Show';
import Edit from './components/Edit';
import Create from './components/Create';

//importar lo necesario para el enrutador
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      </BrowserRouter>
      
      <Show />
    </div>
    
  );
}

export default App;
