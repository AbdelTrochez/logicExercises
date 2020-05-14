const colorHex = '#FF8A65'
const colorRGB = '255, 138, 101'

function colorConversion(color){
	// Si el valor tiene # es hexadecimal, sino, es RGB
	if (color.includes('#')){
		// Elimina el #
		color=color.slice(1);
		return hexToRgb(color);
	}else{
		// Separa el valor en 3 partes
		let r = parseInt(color.substr(0,3));
		let g = parseInt(color.substr(5,3));
		let b = parseInt(color.substr(10,3));
		return rgbToHex(r,g,b);
	}
}

// Hex a RGB
function hexToRgb(color) {
	var bigint = parseInt(color, 16);
	var r = (bigint >> 16) & 255;
	var g = (bigint >> 8) & 255;
	var b = bigint & 255;
	return r + "," + g + "," + b;
}

// Convierte cada componente del RGB en hexadecimal
function toHex(c) {
  	var hex = c.toString(16);
  	return hex.length == 1 ? "0" + hex : hex;
}
//Convierte RGB en Hexadecimal, envia cada componente a la funcion toHex()
let rgbToHex = (r, g, b)=>"#" + toHex(r) + toHex(g) + toHex(b);

// colorConversion(colorRGB);
colorConversion(colorHex);