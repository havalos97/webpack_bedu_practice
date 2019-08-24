import Title from "./Title.js"
import Input from "./Input.js"
import Button from "./Button.js"
import Ul from "./Ul.js"
import renderlist from "./renderlist.js"
import appendChildren from "./appendChildren.js"

const contenedor = document.createElement("div");
let txt_input = Input("1", "number");
txt_input.autofocus = "autofocus";
txt_input.min = "1";
let ul_container = Ul();
const btn_generar = Button("Generar", "click", () => {
	ul_container.innerHTML = "";
	ul_container = appendChildren(ul_container, renderlist(txt_input.value));
	txt_input.focus();
});

contenedor.appendChild(Title("Serie de Fibonacci:"));
contenedor.appendChild(txt_input);
contenedor.appendChild(btn_generar);
contenedor.appendChild(ul_container);
document.body.appendChild(contenedor);
