import React from 'react'
import '../styles/Output.css'

const Output = props => {
    return(
        <div className='OutputWrapper'>
            { props.bits.map((bit, i) => 
                <span className='Bits' key={i}>
                    {bit}
                    <span className='ColumnValue'>{props.values[i]}</span>
                </span>)}
        </div>
    )
}

export default Output