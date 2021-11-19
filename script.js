alert ("Bienvenido/a a Mateá")
let ingresar = prompt ("¿Usted desea entrar a Mateá? Por favor, responder en minúsculas.");
if ((ingresar !== "") && (ingresar === "no")) {
    alert ("¡Esperamos verte pronto!");
}
else if ((ingresar === "si") || (ingresar === "sí")) {
    alert ("¡Disfrutá de nuestros productos!");
}
else {
    alert ("Algo ha salido mal. Por favor, resfrecá la pantalla y volvé a intentarlo.");
}

class Yerba {
    constructor(data) {
        this.marca = data.marca;
        this.precio = parseFloat(data.precio);
        this.stock = 10;
        this.id = Yerba.ID;
        Yerba.ID++;
    }

    static ID = 1

    sumaIva() {
        return this.precio = this.precio * 1.21;
    }

    vender() {
        if (this.stock === 0) {
            console.log ("Nos quedamos sin stock del producto seleccionado")
        } else{
            console.log("Vendido")
            this.stock--;
        }
    }

    reponer() {
        this.stock += 10;
    }
}

let almacen = [
    new Yerba( { marca: "rosamonte", precio: 154 }),
    new Yerba( { marca: "amanda", precio: 173 }),
    new Yerba( { marca: "chamigo", precio: 194 }),
    new Yerba( { marca: "cruz de malta", precio: 212 }),
    new Yerba( { marca: "taragui", precio: 247 }),
    new Yerba( { marca: "mañanita", precio: 250 }),
    new Yerba( { marca: "unión", precio: 254 }),
    new Yerba( { marca: "cbsé", precio: 256 }),
    new Yerba( { marca: "playadito", precio: 302 }),
    new Yerba( { marca: "la merced", precio: 382 }),
]

let carrito = [];

let index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].sumaIva())

index = almacen.findIndex(item => item.id === 3) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 2) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 2) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 5) 
carrito.push(almacen[index].reponer())

index = almacen.findIndex(item => item.id === 8) 
carrito.push(almacen[index].reponer())

index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].reponer())

index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].reponer())

const buscarAmanda = almacen.find(item => item.id === 2); 
console.log(buscarAmanda);

const buscarRosamonte = almacen.find(item => item.id === 1); 
console.log(buscarRosamonte);

const aumentos = almacen.map(item => item.precio += 45);
console.log(aumentos);

const baratos = almacen.filter(item => item.precio < 250); 
console.log(baratos);