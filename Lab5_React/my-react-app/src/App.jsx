import { useState } from 'react'
import { ClickButton } from './Components/ClickButton'
import { ClickButtonV2 } from './Components/ClickButtonV2'
import { Button } from './Components/Button'
import { Exo1_4 } from './Components/Exo1_4'
import { DisplayTab } from './Components/DisplayTab'
import { DisplayTabV2 } from './Components/DisplayTabV2'
import { AuthForm } from './Components/AuthForm'
import { FormAddDiv } from './Components/FormAddDiv'

function App() {

  return (
    <>
    <Exo1 />
    <Exo2 />
    <Exo3 />
    <Exo4 />
    </>
  )
}

export default App

function Exo1 () {
  return (
    <>
       <div>
      <h3>Exo 1 1&2</h3>
      <ClickButton />
      <ClickButtonV2 />
      </div>
      <hr />
      <div>
      <div>
      <h3>Exo 1 3</h3>
       <Button id={1}/>
       <Button id={2}/>
       <Button id={3}/>
      </div>
      </div>
      <hr />
      <div>
        <h3>Exo1 4</h3>
        <Exo1_4 />
      </div>
  
    </>
  )
}

function Exo2() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <>
      <div>
        <h3>Exo2</h3>
      <DisplayTab tab={tab} />
      <DisplayTabV2 tab={tab}/>
      </div>
    </>
  )
}

function Exo3() {
  return (
    <> 
    <h3>Exo3</h3>
    <AuthForm />
    </>
   
  )
}

function Exo4() {
  return (
    <>
      <h3>Exo4</h3>
        <FormAddDiv />
    </>
  )
}