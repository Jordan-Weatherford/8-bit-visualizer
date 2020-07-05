import React, { useState, useEffect } from 'react'
import '../styles/Input.css'

const Input = props => {
    const [error, setError] = useState('')

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('')
            }, 1000)
        }
    })

    const handleUserInputChange = event => {
        // check for input errors
        if (!isNaN(event.target.value)) {
            if (event.target.value < 0 || event.target.value > 255) {
                setError('value must be a number between 0-255')
                return
            }

            props.handleUserInputChange(event.target.value)            
        } else {
            if (event.target.value.length > 1) {
                setError('1 char only per 8-bits')
                return
            }
         
            props.handleUserInputChange(event.target.value)
        }
        setError('')
    }

    return(
        <div className='InputWrapper'>
            <input name='UserInput' className="UserInput" value={props.userInput} onChange={handleUserInputChange} />
            { error && <span className='Error'>!</span> }
            
            <p><em>Enter a single character or a number between 0-255</em></p>
        </div>
    )
}

export default Input