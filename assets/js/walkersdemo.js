// refs : https://github.com/wesbos/hot-tips/blob/main/fun-windows/scripts.ts
// 	  https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex

const windowId = `window-${getWindowId()}`;
const eyeColor = hslToHex(Math.floor(Math.random()*360),50,100);
let windowDetails = {
			x : window.screenX,
			y : window.screenY,
			width : window.outerWidth,
			height : window.outerHeight,
		}
let currWindow = null;
function hslToHex(h, s, l) {
	l /= 100;
	const a = s * Math.min(l, 1 - l) / 100;
	const f = n => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}

function getWindows(){
	return Object.entries(window.localStorage)
		.filter(([key])=> key.startsWith('window-'))
		.map(([key,value])=>[key,JSON.parse(value)]);
}

function getWindowId(){
	let windows = Object.keys(window.localStorage)
		.filter((key)=> key.startsWith('window-'))
		.map((key)=> parseInt(key.replace('window-','')))
		.sort((a,b)=>a-b);
	return	windows.at(-1) + 1 || 1
}

function getCurrentWindow(){
	let currWindow = null;
	if(window.localStorage.getItem('currWindow')==null || "null"){
		currWindow = { 'windowId' : windowId};
		window.localStorage.setItem('currWindow',JSON.stringify(currWindow));
	}else{
		currWindow = JSON.parse(window.localStorage.getItem('currWindow'));
	}
	return currWindow;
}

function setCurrentWindow(windowID){
	currWindow.windowId = windowID;
	window.localStorage.setItem('currWindow',JSON.stringify(currWindow));
}
function initWindow(){
	window.localStorage.setItem(windowId,JSON.stringify(windowDetails));
	currWindow = getCurrentWindow();
}

function closeWindow(){
	if(getCurrentWindow().windowId == windowId){
		const openWindows = getWindows();
		if(openWindows.length!=0) setCurrentWindow(openWindows[0][0].windowId);
		window.localStorage.removeItem(windowId);
		
	}
}

function updateWindowDetails(){
	if(document.hasFocus()){
	 windowDetails = {
			x : window.screenX,
			y : window.screenY,
			width : window.outerWidth,
			height : window.outerHeight,
		}
	
	window.localStorage.setItem(windowId,JSON.stringify(windowDetails));
	setCurrentWindow(windowId);
	}else{
		currWindow = getCurrentWindow();
	}
	console.log("window",currWindow.windowId);
}

document.addEventListener('DOMContentLoaded',()=>{
	initWindow();
	setInterval(updateWindowDetails(),10);
});
