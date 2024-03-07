const listaDeProductos = [
  {
    id: 1,
    name: "Original Blend 200g",
    price: 500
  },
  {
    id:2,
    name: "Original Blend 500g",
    price:900,
  },
  {
    id:3,
    name: "Special Blend 200g",
    price:700
  },
  {
    id:4,
    name: "Original Blend 500g",
    price: 1200
  }
]

const selectorProducto = document.getElementById('product')
const cantidad = document.getElementById('number')

let carrito = []

function add(){
  let valorUsuario = parseInt(selectorProducto.value)
  let cantidadUsuario = parseInt(cantidad.value)

  if(valorUsuario === 0){
    alert("Debe seleccionar un producto")
    return
  }

  let productoUsuario = listaDeProductos.find(p => p.id === valorUsuario)

  carrito.push({producto: productoUsuario, cant: cantidadUsuario})

  display()
}

function display(){
  let mensaje = "Carrito: \n"
  let subTotal = getSubTotal()
  carrito.forEach(v => mensaje += v.producto.id + " " + v.producto.name + "Precio: " + v.producto.price + " Cant: " + v.cant + "\n")
  mensaje += "\n Subtotal: " + subTotal
  alert(mensaje)
}

function getSubTotal(){
  let suma = 0

  for(i=0; i<carrito.length; i++){
    suma += carrito[i].producto.price * carrito[i].cant 
  }

  return suma
}

function calc(){
  let mensaje = "Total de la compra \n"
  let subTotal = getSubTotal()
  let envio = 0

  if(subTotal > 3000){
    envio = 0
  }else if(subTotal > 2000){
    envio = 250
  }else{
    envio = 500
  }

  carrito.forEach(v => mensaje += v.producto.id + " " + v.producto.name + "Precio: " + v.producto.price + " Cant: " + v.cant + "\n")
  mensaje += "\n Subtotal: " + subTotal
  mensaje += "\n Envio: " + envio
  mensaje += "\n Total: " + (envio + subTotal)

  alert(mensaje)
}