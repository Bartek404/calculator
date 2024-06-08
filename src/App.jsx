import './App.css'
import { useState } from 'react'
import { Button } from './components/Button/Button'

function App() {
	const [display, setDisplay] = useState('0')
	const [operand, setOperand] = useState(null)
	const [operator, setOperator] = useState(null)
	const [comma, setComma] = useState(false)

	function handleButtonClick(e) {
		const buttonValue = e.target.innerText
		if (display === '0') {
			setDisplay(buttonValue)
		} else {
			setDisplay(display + buttonValue)
		}
	}

	function handleOperatorButton(e) {
		const operation = e.target.innerText
		setOperand(parseFloat(display))
		setOperator(operation)
		setDisplay('0')
		setComma(false)
	}

	const handleCalculateButton = () => {
		const number = parseFloat(display)
		switch (operator) {
			case '+':
				setDisplay((operand + number).toString())
				break
			case '-':
				setDisplay((operand - number).toString())
				break
			case '*':
				setDisplay((operand * number).toString())
				break
			case '/':
				setDisplay((operand / number).toString())
				break
		}
		setOperand(null)
		setOperator(null)
		setComma(false)
	}

	function handleClearButton() {
		setDisplay('0')
		setOperand(null)
		setOperator(null)
	}

	function handleCommaButton() {
		setComma(true)
		comma === true ? '' : setDisplay(display + '.')
	}

	const buttons = [
		{ button: 0, class: 'btn__0', fn: handleButtonClick },
		{ button: 1, class: 'btn__1', fn: handleButtonClick },
		{ button: 2, class: 'btn__2', fn: handleButtonClick },
		{ button: 3, class: 'btn__3', fn: handleButtonClick },
		{ button: 4, class: 'btn__4', fn: handleButtonClick },
		{ button: 5, class: 'btn__5', fn: handleButtonClick },
		{ button: 6, class: 'btn__6', fn: handleButtonClick },
		{ button: 7, class: 'btn__7', fn: handleButtonClick },
		{ button: 8, class: 'btn__8', fn: handleButtonClick },
		{ button: 9, class: 'btn__9', fn: handleButtonClick },

		{ button: '+', class: 'btn__plus', fn: handleOperatorButton },
		{ button: '-', class: 'btn__minus', fn: handleOperatorButton },
		{ button: '/', class: 'btn__divide', fn: handleOperatorButton },
		{ button: '*', class: 'btn__multiply', fn: handleOperatorButton },

		{ button: '=', class: 'btn__enter', fn: handleCalculateButton },
		{ button: 'C', class: 'btn__clear', fn: handleClearButton },
		{ button: ',', class: 'btn__comma', fn: handleCommaButton },
	]

	return (
		<div className='body'>
			<div className='display'>
				<p className='display__number'>{display}</p>
			</div>

			<div className='btns__area'>
				{buttons.map(button => (
					<Button key={button.button} btn={button.class} onClick={button.fn}>
						{button.button}
					</Button>
				))}
			</div>
		</div>
	)
}

export default App
