import React, {useRef} from 'react'

export default function FileUploaded ({onFileSelect}) {
        const fileInput = useRef(null)
    
        const handleFileInput = (e) => {
            // handle validations
            console.log(e.target.files[0].size)
        }
    
        return (
            <div className="file-uploader">
                <input type="file" onChange={handleFileInput}/>
                <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/>
            </div>
        )
    
}