import React, { useState } from 'react'
import '../styles/App.css'

// custom components
import Output from './Output'
import Input from './Input'
import Footer from './Footer'

function App() {
	const [userInput, setUserInput] = useState('')
	const [bits, setBits] = useState([0, 0, 0, 0, 0, 0, 0, 0])
	const values = [128, 64, 32, 16, 8, 4, 2, 1]


	const handleUserInputChange = value => {
		let val

		if (isNaN(value)) {
			console.log(111)
			val = value.charCodeAt(0)
		} else {
			console.log(222)
			val = value
		}

		let newBits = [0, 0, 0, 0, 0, 0, 0, 0]

		for (let i = 0; i < values.length; i++) {
			if (val >= values[i]) {
				newBits[i] = 1
				val -= values[i]
			}
		}

		setBits(newBits)
		setUserInput(value)
	}

	return (
		<div className="AppWrapper">
			<h1 className="Title">8-bit Visualizer</h1>
			<h4 className="SubTitle">developed by <span className="Red">Jordan Weatherford</span></h4>
			<Output bits={bits} values={values}/>
			<Input userInput={userInput} handleUserInputChange={handleUserInputChange} />
			<Footer />
		</div>
	)
}

export default App
