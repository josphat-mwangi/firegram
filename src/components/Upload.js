import React, { useState } from 'react'
import ProgressBar from "./ProgressBar";



const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types =['image/png', 'image/jpeg'];
    

    const formhandler = (e) =>{
        e.preventDefault();
        const selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
        
    }
    return (
        <div className="App">
        <form >
            <label>
                <span>+</span>
                <input type="file" className='input' onChange={formhandler} />
                
            </label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
        </div>
    );
}

export default Upload
