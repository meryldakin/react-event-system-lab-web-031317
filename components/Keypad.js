import React from 'react'

function Keypad(props){
  function input(){
    console.log("Entering password...")
  }
  return (
    <div>
      <input type="password" onKeyUp={input}/>
    </div>
  )
}

export default Keypad
