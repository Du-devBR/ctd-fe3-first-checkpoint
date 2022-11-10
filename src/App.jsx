import "./app-style.sass"
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"

export function App() {

  const [nameColor, setNameColor] = useState('')
  const [hexadecimalColor, setHexadecimalColor] = useState('')
  const [allCardColors, setAllCardColors] = useState([])
  const [validationInput, setValidationInput] = useState(false)

  function registerNewCard(event){
    event.preventDefault()

    const newCardColor = {
      name: nameColor,
      hexadecimal: "#"+hexadecimalColor
    }

    if(hexadecimalColor === '' || nameColor === ''){
      setValidationInput(true)
    }else{
      setAllCardColors([...allCardColors, newCardColor])
      setNameColor('')
      setHexadecimalColor('')
      setValidationInput(false)
    }
  }

  function removeValidation(){
    setValidationInput(false)
  }



  return (
    <div className="App">
      <form action=""
        className={validationInput ? 'background-error' : '' }
        onSubmit={event => registerNewCard(event)}
        >
        <div className="container-form">
          <h1 className="title-form">Adicionar nova cor</h1>
          <div className="input-content">
            <div className="input-name-color">
              <label htmlFor="">Nome</label>
              <input type="text"
                placeholder="Nome da cor"
                onChange={event => setNameColor(event.target.value)}
                value={nameColor}
              />
            </div>
            <div className="input-hexadecimal-color">
              <label htmlFor="">Cor</label>
              <input type="text"
                placeholder="Insira sua cor no formato Hexadecimal"
                onChange={event => setHexadecimalColor(event.target.value)}
                value={hexadecimalColor}
                pattern='[a-fA-F0-9]+'
                minLength={3}
                maxLength={6}
                onKeyDown={removeValidation}
              />
            </div>
          </div>
          <button
            className="button-submit"
            type="submit"
            >
            Adicionar
          </button>
        </div>
        <span className="message-error">Por favor, verifique os dados inseridos no formulário</span>
      </form>
     <section className="all-cards">
      <h2 className="title-section-cores">Cores favoritas</h2>
      <ul className="container-all-cards">
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
      </ul>
     </section>
    </div>
  )
}



//ETAPAS

//validações - quaee
//required input - quae
//estilização formulario - ok
