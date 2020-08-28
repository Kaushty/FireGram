import React, { useState, useEffect } from 'react' 
import { projectStorage } from '../firebase/config'

const useStorage = (file) => {
    // Effect to store data to firebase
    const [ progress, setProgress ] = useState(0)
    const [ url, setUrl ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fileRef = projectStorage.ref(file.name)

        fileRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await fileRef.getDownloadURL();
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage