import React,{useState} from 'react'


function TxtArea(props) {

  const handleUpClick =()=>{
    // console.log("Uppercase was clicked."+text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleDownClick =()=>{
    
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleRevClick =()=>{
    
    let newText = text.split('').reverse().join('');
    setText(newText);
  }

  const handleOnChange = (event )=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text,setText] = useState('');

  // text = "new teext";// wrong way to change the state of the state
  // setText("new text");//correct way to change the state of the state

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-floating">
  <textarea className="form-control my-4 w-50"  rows="10" placeholder="Leave a comment here" id="floatingTextarea" value={text } onChange={handleOnChange}></textarea>
 
  </div>
  <button type="button" className="btn btn-secondary mx-2 my-2" onClick={handleUpClick} >UpperClass</button>
  <button type="button" className="btn btn-info mx-2 my-2" onClick={handleDownClick}>LowerClass</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleRevClick}>Reverse</button>
  {/* <button type="button" className="btn btn-info mx-2 my-2" onClick={handleDownClick}>LowerClass</button> */}
    </div>
    <div className="container my-3">
      <h1>Summary of the text:</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08*text.split('').length} Minutes to read</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )
}

export default TxtArea