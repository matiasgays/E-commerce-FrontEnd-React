import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {

  const mensaje = "ItemListContainer";

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={mensaje}/>
    </>
  );
}

export default App;
