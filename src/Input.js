const Input = (value, type) => {
	const element = document.createElement("input");
	element.value = value
	element.type = type
	return element;
}

export default Input;
