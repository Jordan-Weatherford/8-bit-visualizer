import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return(
        <div className="Footer">
            <p><em>This app was developed by</em> <strong style={{'color': 'red'}}>Jordan Weatherford </strong><em>to serve as a visual representation of how integers and characters are stored in 8-bit memory. I'm also available for hire!</em></p>
        </div>
    )
}

export default Footer