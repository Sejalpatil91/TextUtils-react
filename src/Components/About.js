import React, { useState } from 'react'

export default function About(props) {

    //const [myStyle, setMyStyle] = useState( {
        //color:'black',
        //backgroundColor: 'white'
    //})

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    }
    
    
   
  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2 className='my-3'>About Us</h2>
            
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id='headingOne'>
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Analyze Your Text: Transform, Optimize, and Enhance Effortlessly
                        </strong> TextUtils provides a powerful and easy-to-use platform for analyzing and modifying your text in seconds. Whether you need to count words and characters, convert text to different cases, remove extra spaces, or copy formatted text with ease, TextUtils has got you covered. Our tool helps you clean, structure, and optimize your content efficiently, making it perfect for students, professionals, and content creators. With real-time text analysis and a seamless user experience, TextUtils simplifies your writing process, ensuring clarity and precision in every word. Try it today and enhance your text like never before! 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id='headingTwo'>
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby='headingTwo' data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Free to Use: Unlimited Text Analysis at No Cost!</strong> TextUtils is a completely free and user-friendly text analysis tool designed for everyone. Whether you're a student, writer, developer, or professional, you can use all its features without any restrictions or hidden charges. No sign-ups, no downloads—just open the app and start analyzing, modifying, and optimizing your text instantly. Enjoy unlimited access to features like word and character count, case conversion, extra space removal, and much more—all at zero cost. Experience hassle-free text processing with TextUtils, your go-to free text utility!
                    </div>
                    </div>
                </div>
                <div className="accordion-item" id='headingThree'>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby='headingThree' data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Browser Compatible: Access TextUtils Anytime, Anywhere!</strong> TextUtils is a fully web-based application that works seamlessly across all modern browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. No need to install any software—simply open TextUtils in your browser and start analyzing and modifying your text instantly. Whether you're using a desktop, laptop, tablet, or mobile device, TextUtils ensures a smooth and responsive experience. With its lightweight design and fast performance, you can access powerful text-processing features from anywhere, making it a convenient tool for students, professionals, and writers on the go!
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}
