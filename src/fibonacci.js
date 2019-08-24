function fibonacci(index) {
	let x = 1, y = 0, tmp;
	while (index >= 0) {
		tmp = x;
		x += y;
		y = tmp;
		index--;
	}
	return y;
}

export default fibonacci;
