import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selected, setSelected }) => {

    const handleImageClick = (e) => {
        if( e.target.classList.contains('backdrop')){
            setSelected(null)
        }
        return
    }

    return (
        <motion.div className='backdrop' onClick={handleImageClick}
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
        >
            <motion.img src={selected} alt='enlarged-img' 
                initial = {{ scale: 0 }}
                animate = {{ scale: 1 }}
            />
        </motion.div>
    )
}

export default Modal