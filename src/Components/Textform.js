import React, { useState } from 'react'

export default function Textform(props) {
  const ConvertUpperCase = () => {
    let newtext = text.toUpperCase()
    settext(newtext)
    console.log("Text converted Successfully! ")
  }

  const ConvertLowerCase = () => {
    let newtext = text.toLowerCase()
    settext(newtext)
    console.log("Text converted Successfully! ")
  }

  const texthandler = (event) => {
    settext(event.target.value)
  }

  const [text, settext] = useState("Enter your text here!")
  return (
    <>
      <div className="container">
        <div className="form-group">
          <h1>{props.heading}</h1>
          <textarea class="form-control" value={text} id="exampleFormControlTextarea1" rows="10" onChange={texthandler}></textarea><br />
          <button className='btn btn-secondary' onClick={ConvertUpperCase}>Click for Uppercase</button><br /><br />
          <button className='btn btn-primary' onClick={ConvertLowerCase}>Click for Lowercase</button>

        </div>
      </div>

      <div className="container my-3">
          <h1>Your Text summary here! </h1>
          <p>Your Text has words + {text.split(" ").length}</p>
          <p>Your Text has letters + {text.length}</p>
      </div>
    </>

  )
}
