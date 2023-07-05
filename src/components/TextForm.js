import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick= ()=>{
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleOnChange= (e)=>{
    // console.log("Upper case was clicked")
    setText(e.target.value)
    
  }

  const handleLowerClick= ()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }
  return (
    <>
   <div className='container'>
   <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea  className="form-control" value={text} placeholder='Enter Text here' onChange={handleOnChange}id="myBox" rows="12"></textarea>
    </div>
    
  <button className='btn btn-primary ' onClick={handleUpClick}>uppercase</button>
  <button className='btn btn-primary mx-3' onClick={handleLowerClick}>lowercase</button>
  </div>
  <div className='container my-3'>
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length} words {text.length} chars</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
