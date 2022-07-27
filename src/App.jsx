import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import data from "./helper/Vehiculos.json";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
      return (
            <>
                  <Navbar />

                  <ItemListContainer data={data} />

                  <ItemCount/>


            </>
      );
}

export default App;
