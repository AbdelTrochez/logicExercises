const myArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const target = 6;

function orderRoom (arr, target){
	// Elimina elementos repetidos
	let unique = arr.filter((value, index, self)=>self.indexOf(value) === index);
	let sortArr = unique.sort((prev,next) => prev-next);// Ordenar Arreglo
	let auxArr = []; //Guarda elementos revisados
	let finalArr =[]; //Guarda el resultado final de la funcion

	for(i=0;i<sortArr.length;i++){
		for(x=i;x<sortArr.length;x++){
			if(target===sortArr[i]+sortArr[x+1]){
				auxArr.push(sortArr[i]);
				auxArr.push(sortArr[x+1]);
				finalArr.push(auxArr);
				auxArr=[];
			}
		}
	}
	return finalArr;
}

orderRoom(myArray, target);