import "./app-style.sass"
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"

function App() {

  const [nameColor, setNameColor] = useState()
  const [hexadecimalColor, setHexadecimalColor] = useState()
  const [allCardColors, setAllCardColors] = useState([])

  function registerNewCard(event){
    event.preventDefault()

    const newCardColor = {
      name: nameColor,
      hexadecimal: hexadecimalColor
    }

    setAllCardColors([...allCardColors, newCardColor])
  }


  return (
    <div className="App">
     <form onSubmit={event => registerNewCard(event)}>
      <div className="container-form">
        <h1>Adicionar nova cor</h1>
        <div className="input-content">
          <div className="inout-name-color">
            <label htmlFor="">Nome</label>
            <input type="text"
              placeholder="Nome da cor"
              onChange={event => setNameColor(event.target.value)}
            />
          </div>
          <div className="input-hexadecimal-color">
            <label htmlFor="">Cor</label>
            <input type="text"
              placeholder="Insira sua cor no formato Hexadecimal"
              onChange={event => setHexadecimalColor("#" + event.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          >
          Adicionar
        </button>
      </div>
     </form>
     <section className="container-all-cards">
      {
        allCardColors.map(
          component => {
            return (
              <Card
                data={component}
              />
            )
          }
        )
      }
     </section>
    </div>
  )
}

export default App
