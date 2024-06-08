import './Button.css'
export function Button({ children, onClick, btn }) {
	return (
		<button className={`btn ${btn}`} onClick={onClick}>
			{children}
		</button>
	)
}
