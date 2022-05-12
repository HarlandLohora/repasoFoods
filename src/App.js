import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import comidas from "./foods.json"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Button } from "antd";

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(true)
  const [foods, setFoods] = useState(comidas)
  const [buscador, setBuscador] = useState("")

  //console.log(useState('hola'))

  //comidas.map()

  function agregarNuevaComida(comida) {
    //console.log("Agregame esta comida :)", comida)
    const nuevoArray = [...foods, comida]

    setFoods(nuevoArray)
  }


  function filtrarComidas(event) {
    setBuscador(event.target.value)

    const comidaFiltrada = []

    foods.map(food => {
      if (food.name.includes(event.target.value)) {
        console.log("simon")
        comidaFiltrada.push(food)
      }
    })
    setFoods(comidaFiltrada)
  }

  return (
    <div className="App">
      {mostrarFormulario && <AddFoodForm agregarNuevaComida={agregarNuevaComida} />}
      <Button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        {mostrarFormulario ? "Hide form" : "Add new food"}
      </Button>
      <input
        placeholder="Buscar comida"
        value={buscador}
        onChange={filtrarComidas} />
      <div className='Comidas'>
        {foods.map((comida, index) => {
          return <FoodBox alimento={comida} key={index} />
        })}
      </div>
    </div>
  );
}

export default App;
