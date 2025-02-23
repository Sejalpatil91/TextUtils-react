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
        document.getSelection().removeAllRanges();
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
            <textarea className="form-control" value={ text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handelUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handelLoClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handelClearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleDownload}>Download Text</button>

    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>

    </>
  )
}
