const appendChildren = (parent, children) => {
	[...children].forEach((child, index) => {
		parent.appendChild(child);
	});
	return parent;
}

export default appendChildren;
