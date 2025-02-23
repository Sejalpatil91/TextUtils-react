import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = ()=>{
        console.log("Uppercase was clicked" + text );
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!" ,"success")
    }

    const handelLoClick = ()=>{
        console.log("Lowercase was clicked" + text );
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!" ,"success")

    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!" ,"success")

    }

    const handelClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!" ,"success")
    }

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "textfile.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("Downloded successfully!" ,"success")

    };

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    

    const [text, setText] = useState('');

    return (
        <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={ text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handelUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handelLoClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handelClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleDownload}>Download Text</button>

    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>

    </>
  )
}
