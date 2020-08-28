import React from 'react'
import useStorage from '../Hooks/useStorage'

const ProgressBar = ({ progress }) => {
    return(
        <div style={{width: progress}}> Progress </div>
    )
}

export default ProgressBar