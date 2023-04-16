/* Psaseo de Mascotas
Perros o gatos 
hasta 3 cliente
Preguntar e informar
*/

const CANT_MAX_MASCOTAS = 3;

let cantPerros = prompt("Cuantos Perros desea que paseemos?");
let cantGatos  = prompt("Cuantos Gatos desea que paseemos?");
/* Mejora para prevenir errores por no ingresar un número o Enter*/
if (cantPerros.trim() != "") {cantPerros = parseInt(cantPerros)} else {cantPerros = 0};
if (cantGatos.trim()  != "") {cantGatos  = parseInt(cantGatos)}  else {cantGatos = 0};

if ((cantPerros + cantGatos) == 0) {
    document.write("Paseamos Perros y Gatos. Muchas gracias por su consulta!");
}
else if ((cantPerros + cantGatos) <= CANT_MAX_MASCOTAS){
    document.write("Con gusto pasearemos sus Mascotas: ");
    if (cantPerros > 0) {document.write (cantPerros+ ".- Perro/s ")};
    if (cantGatos  > 0) {document.write (cantGatos+ ".- Gato/s ")};
}
else{ 
    document.write("Lo siento sólo podemos pasear "+CANT_MAX_MASCOTAS+" Mascotas por cliente");
}; 

