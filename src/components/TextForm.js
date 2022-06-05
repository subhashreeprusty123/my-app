import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //   console.log("uppercase was Clicked"+ text);
          let newText=text.toUpperCase();
          setText(newText);
          props.showAlert("Converted to Uppercase","success");
    }
    const handleOnClick = ()=>{
          let new_Text=text.toLowerCase();
          setText(new_Text);
          props.showAlert("Converted to Lowercase","success");
    }
    const handleOverClick = ()=>{
          let clearText='';
          setText(clearText);
          props.showAlert("All text was cleared","success");
    }
    const trimOnClick = ()=>{
          let trimText=text.trimEnd();
          setText(trimText);
          props.showAlert("Triming done at end","success");
    }
    const replaceOnClick = ()=>{
          let replaceText=text.replace("i am","you are");
          setText(replaceText);
          props.showAlert("All (i,am) are replaced with (you,are)","success");
    }
    const handleCopy = ()=>{
        // console.log("i am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");
  }
  const handleExtraSpaces=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extraspaces removed","success");
  }
    const handleOnChange = (event)=>{
        // console.log("change occured");
        setText(event.target.value);
        
    }
    const [text,setText] = useState('');//react hooks(imp)(using state here)
    // text="set this";//wrong way to change the state
    // setText("new text");//correct way to change the state
  return (
      <>
    <div className="container" style={{color:props.mode ==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==="light"?"white":"grey",
        color:props.mode ==="light"?"black":"white"}}
         id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleOverClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={trimOnClick}>trim Text</button>
      <button className="btn btn-primary mx-2" onClick={replaceOnClick}>replace Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==="light"?"black":"white"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview here"}</p>
    </div>
    </>
  )
}
