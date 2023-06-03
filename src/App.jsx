import { useState } from 'react'
import Formu from './componentes/Formu'
import Card from './componentes/Card'


function App() {
  
  const [palabra1,setPalabra1] = useState("")
  const [palabra2,setPalabra2] = useState("")

  function handleOnSubmit(palabra1,palabra2) {
    
    if(palabra1.trim().length <3){
      console.error("LA PALABRA 1 DEBE SER DE MINIMO 3 CARACTERES")
    }
    else(
      setPalabra1(palabra1.trim())
    )
  
    if(palabra2.trim().length <6){
      console.log(palabra2.trim().length)
      console.error("LA PALABRA 2 DEBE SER DE MINIMO 6 CARACTERES")
    }
    else(
      setPalabra2(palabra2.trim())
    )
    
    
  }
  

  return (
    <>
      <Formu cambio={handleOnSubmit}/>

      {(palabra1 && palabra2)? <Card  palabra1={palabra1} palabra2={palabra2} />: null }  
      
    
    </>
  )
}

export default App
