const Button = (content, evento, funcionEvento) => {
	const element = document.createElement("button");
	element.innerHTML = content;
	element.addEventListener(evento, funcionEvento);
	return element;
}

export default Button;
