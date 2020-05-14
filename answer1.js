const myArray = [1,'2',4,591,392,391,2,5,10,'2','1',1,'1',20,20];

function orderRoom (arr){
	// Ordenar Arreglo
	let sortArr = arr.sort((prev,next) => prev-next);

	// Separa arreglo en 2 arreglos, string y numerico.
	let stringArr = sortArr.filter(item=>typeof(item)==='string');
	let numberArr = sortArr.filter(item=>typeof(item)==='number');
	
	stringArr=group(stringArr);
	numberArr=group(numberArr);
	
	return numberArr.concat(stringArr);
}

function group(arr){
	let auxArr = []; //Guarda elementos revisados
	let finalArr =[]; //Guarda el resultado final de la funcion
	
	arr.forEach(item=>{
		//Si el item no ha sido revisado antes, procede a filtrar.
		if (!(auxArr.includes(item))){
			let filtArr = arr.filter(num=>num===item);
			//Agrega el item al auxiliar, indica que ya fue revisado
			auxArr.push(item);
			//Si length === 1 lo guarda como valor, sino, como arreglo
			if(filtArr.length===1){
				finalArr.push(filtArr[0]);
			}else{
				finalArr.push(filtArr);
			}
		}
	});
	return finalArr;
}

orderRoom(myArray);