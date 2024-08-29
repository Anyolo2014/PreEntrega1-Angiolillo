function saludar (nombre){
	alert(
	"Bienvenido/a MUNDO PELOTA " + nombre + " a continuación podrás seleccionar productos de nuestra tienda.");
}

function opciones (producto){
	if (producto == "1") {
		alert("Elegiste Pelota de Fútbol");
	}
	else if (producto == "2") {
		alert("Elegiste Pelota de Basquet");
	}
	else if (producto == "3") {
		alert("Elegiste Pelota de Voley");
	}
	else if (producto == "4") {
		return false;
	}
return true;

}

function menu (){
	const producto = prompt (
		"Elija uno de nuestros productos \n1: Pelota de Fútbol \n2: Pelota de Basquet \n3: Pelota de Voley \n4: Terminar"
		)
	return producto
}

function comprarPelota (){
	const producto = menu ()
	if (opciones(producto)	){

		preguntaFinal = prompt (
			"Vuelva a elegir una opcion: \n1: Mostrar precio Final \n2: Volver al menú anterior \n3: Terminar"
		)	
		
		if (preguntaFinal === "1"){
			preciosFinales (producto);
		}
		else if (preguntaFinal === "2"){	
			if (!opciones(producto))
				return false;
		}
		else if (preguntaFinal === "3"){
			 return false;
			}
		
		return true;
	}
}

function preciosFinales (producto){
	if (producto == "1") {
		alert("El precio de la pelota de Fútbol es de $"+ precioPelotaFutbol *1.21 + " (IVA incluído)");
	}
	else if (producto == "2") {
		alert("El precio de la pelota de Basquet es de $"+ precioPelotaBasquet *1.21 + " (IVA incluído)");
	}
	else if (producto == "3") {
		alert("El precio de la pelota de Voley es de $"+ precioPelotaVoley *1.21 + " (IVA incluído)");
	}
	
}

let producto;
let precioPelotaFutbol = 20000;
let precioPelotaBasquet = 18000;
let precioPelotaVoley = 15000;
let nombre = "";
let opcion;

function empezarCompra (nombre){
	nombre = prompt("Ingrese su nombre:");
	
saludar (nombre)	
opcion= prompt ("Ingrese una opción: \n1: Comprar pelota \n2: Finalizar compra \n3: Terminar");

while (opcion !== "3"){
	if (opcion === "1"){
	if (!comprarPelota ())
		break;
	}
	if (opcion === "2"){	
	alert ("Compra finalizada");
	opcion= "3";
}
}

alert ("Gracias por visitar nuestro sitio");

}
