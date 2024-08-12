
const bimg = document.getElementById("bimg")
const botones = document.getElementById("botones")
const botones2 = document.getElementById("botones2")
const container = document.getElementById("container")
let contenido = document.createElement("div")
const contar = document.getElementById("contar")
const carrito = document.getElementById("carrito")

const pedidos = JSON.parse(localStorage.getItem("pedidos"))||[]

contador = 0

carrito.addEventListener("click", function () {

    location.href = "pedido.html"
    
})


botones.addEventListener("click", function () {
    
    alert("Tu selección se agrego a tu carrito")
    
})

botones2.addEventListener("click", function () {
    
    alert("Tu selección se agrego a tu carrito")
    
})

contar.addEventListener("click", function () {

    contar++

    contador.innetHTML = contar

})



localStorage.setItem("pedidos", JSON.stringify(pedidos))||[]





