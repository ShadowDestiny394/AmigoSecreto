const amigos = []

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo")
  const nombre = inputAmigo.value.trim()

  console.log("Valor ingresado:", nombre);
  
  if (nombre === "") {
    alert("Por favor, ingresa un nombre.")
    return false
  }

  if (!esNombreValido(nombre)) {
    alert("Por favor, ingresa un nombre válido (solo letras y espacios).")
    return false
  }

  amigos.push(nombre)
  actualizarListaAmigos()
  inputAmigo.value = ""
}

function esNombreValido(nombre) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
  return regex.test(nombre)
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos")
  listaAmigos.innerHTML = ""
  amigos.forEach((amigo) => {
    const li = document.createElement("li")
    li.textContent = amigo
    listaAmigos.appendChild(li)
  })
}


function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Se necesitan al menos 2 amigos para realizar el sorteo.")
    return
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length)
  const amigoSorteado = amigos[indiceAleatorio]

  const resultado = document.getElementById("resultado")
  resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`
}




