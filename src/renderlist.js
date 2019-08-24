import Li from "./Li.js"
import fibonacci from "./fibonacci.js"

const renderlist = (limit) => {
	let li_list = [];
	for (var i=0; i < limit; i++) {
		var li_element = Li(fibonacci(i));
		li_list.push(li_element);
	}
	return li_list;
}

export default renderlist;
