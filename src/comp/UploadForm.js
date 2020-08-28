import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState(null)

    const types = [ 'image/jpeg', 'image/png']
    const errorText = 'Please enter a valid image file'

    const handlePictureSubmit = (e) => {
        const selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError(null)
        }else {
            setFile(null)
            setError(errorText)
            console.log('Please select a valid image')
        }
    }

    return (
        <form>
            <label>
                <input type='file' onChange={handlePictureSubmit} />
                <span> + </span>
            </label>
            <ProgressBar />
            <div className='output'>
                { error && (<div className='error' >{error}</div>)}
                { file && (<div>{ file.name }</div>)}
            </div>
        </form>
    )
}

export default UploadForm