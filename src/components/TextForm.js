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

  const handleClear = ()=>{
      setText("")
  }

  const handleCopy = ()=>{
    let copyText  = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
   
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
  <button className='btn btn-primary mx-3' onClick={handleClear}>Clear Text</button>
  <button className='btn btn-primary mx-3' onClick={handleCopy}>Copy Text</button>
  </div>
  <div className='container my-3'>
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length} words {text.length} chars</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
    <hr></hr>
  <div className='container'>
    <h3> Contact me </h3>
    <li> <a href='https://www.linkedin.com/in/girish-tanna-401626205/'>LinkedIn</a></li>
    <li> <a href="mailto:tannagirish6@gmail.com">Gmail</a></li>
  </div>
  </>
  )
}
