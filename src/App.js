import React from "react";
import NavBar from './Components/Header/NavBar';
import ItemListContainer from './Components/Containers/ItemListContainer'

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
