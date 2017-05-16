import React from 'react'

function EyesOnMe(props){
  return (
    <div>
      <button onFocus={focus} onBlur={blur} />
    </div>
  )
}

function blur() {
  console.log("Hey! Eyes on me!")
}

function focus() {
 console.log("Good!")
}

export default EyesOnMe
