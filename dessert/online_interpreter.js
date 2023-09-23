import * as interpreter from "./src/interpreter.js"
const env_store = document.getElementById("env-store");
const env_isVB = document.getElementById("env-isVB");
const env_VB = document.getElementById("env-VB");
const env_opr = document.getElementById("env-opr");
const env_oprR = document.getElementById("env-oprR");
const env_oprL = document.getElementById("env-oprL");
const console = document.getElementById("prg-input-console");
const prg_input = document.getElementById("program-input");
interpreter.env.outlet.print = function(s){
	insert_into_console(s);
}

interpreter.env.outlet.error = function(s){
	insert_into_console(s);
}

prg_input.addEventListener("keydown",function(e){
	if(e.code == "Enter")
		input_prg(prg_input.innerText);
}
);

function input_prg(val){
	insert_into_console(val);
	interpreter.env.inlet.input(val);
	update_env();

}

function insert_into_console(s){

	console.innerHTML+= `<br><p>${s}</p>`;
}

function update_env(){
	env_store.innerText = make_env_store();
	env_isVB.innerText = `inVB : ${interpreter.env.isInVisualBlock}`;		
	env_VB.innerText = `VB : ${interpreter.env.visualBlock}`;		
	env_opr.innerText = `inVB : ${interpreter.env.opr}`;		
	env_oprL.innerText = `oprL : ${interpreter.env.oprL}`;		
	env_oprR.innerText = `oprR : ${interpreter.env.oprR}`;		
}

function make_env_store(){
	let store_str = "[ ";
	interpreter.env.store.forEach((b)=>store_str += b+" ");
	store_str+="]\n ";
	for(let i=0;i<2*interpreter.env.ptr + 1;i++){
		store_str+=" ";
	}
	store_str+="^";
}

