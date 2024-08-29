// Función constructora
function Persona(nombre, dni, clave, cuenta) {
    this.nombre = nombre;
    this.dni = dni;
    this.clave = clave;
    this.cuenta = cuenta;
}

// 3 objetos con los que se podrá ingresar al menú
var persona1 = new Persona("Carlos Ramírez", "4321567", 9876, 500000);
var persona2 = new Persona("Laura Mendoza", "8765432", 2468, 2500);
var persona3 = new Persona("Alejandra Pérez", "6543219", 1357, 750000);

// Lista de objetos
var miLista = [persona1, persona2, persona3];

alert("Bienvenido a Banca en Línea");
var dni = prompt("Ingrese su identificador");
var clave = parseInt(prompt("Ingrese su clave"));

var accesoPermitido = false;
for (let i = 0; i < miLista.length; i++) {
    if (miLista[i].dni === dni && miLista[i].clave === clave) {
        accesoPermitido = true;
        alert("Bienvenido " + miLista[i].nombre);
        menu(miLista[i]);
        break; // Detener el bucle una vez que se encuentre el usuario
    }
}

if (!accesoPermitido) {
    alert("Usuario incorrecto");
}

function menu(usuario) {
    do {
        var opcion = parseInt(prompt("Seleccione que desea hacer: \n 1.- Ver saldo \n 2.- Realizar giro \n 3.- Realizar depósito \n 4.- Salir"));

        switch (opcion) {
            case 1:
                alert("Su saldo actual es: " + usuario.cuenta);
                break;
            case 2:
                var giro = parseInt(prompt("Su saldo actual es: " + usuario.cuenta + " \nIngrese el monto que desea girar"));

                if (giro > usuario.cuenta) {
                    alert("No se puede realizar la operación solicitada. Excede el saldo");
                } else if (giro <= 0) {
                    alert("Ingrese un monto válido para girar.");
                } else {
                    usuario.cuenta -= giro; // Reducir el saldo directamente
                    alert("Giro realizado. Su nuevo saldo es " + usuario.cuenta);
                }
                break;
            case 3:
                var deposito = parseInt(prompt("Su saldo actual es: " + usuario.cuenta + " \nIngrese el monto que desea depositar"));

                if (deposito <= 0) {
                    alert("Ingrese un monto válido para depositar.");
                } else {
                    usuario.cuenta += deposito; // Aumentar el saldo directamente
                    alert("Depósito realizado. Su nuevo saldo es " + usuario.cuenta);
                }
                break;
            case 4:
                alert("Gracias por preferirnos");
                return; // Salir de la función y del bucle
            default:
                alert("Selección errónea, intente de nuevo");
                break;
        }
    } while (opcion !== 4);
}

