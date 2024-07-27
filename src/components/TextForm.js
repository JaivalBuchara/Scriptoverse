import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpclick = () => {
        let finaltext = text.toUpperCase()
        setText(finaltext)
        props.showAlert('CONVERTED TO UPPERCASE!', 'success')
    }
    const handleLoclick = () => {
        let finaltext = text.toLowerCase()
        setText(finaltext)
        props.showAlert('converted to lowercase!', 'success')
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Copied to clipboard ', 'success')
    }
    const Removeextraspace = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join([' ']))
        props.showAlert('Space Removed ', 'success')
    }
    const handleClearClick = (event) => {
        setText("")
        props.showAlert('Text cleared ', 'warning')
    }

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows={8}
                        value={text}
                        style={{backgroundColor: props.mode==='dark'?'#212529f7':'white',color: props.mode==='light'?'#212529f7':'white'}}
                        onChange={handleonChange}
                        />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoclick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-2" onClick={Removeextraspace}>
                    Remove Extra Space
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
                    Copy
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear
                </button>
            </div>
            <div className="container my-4">
                <h2>
                    Your Text Summary
                </h2>
                <p>
                    {text.split(" ").filter ((element)=>{return element.length!==0}).length} words,{text.length} characters
                </p>
                <p>
                    Time taken to read : {0.008 * text.split(" ").length} min 
                </p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Please enter text here"
}