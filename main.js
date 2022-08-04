let hor = document.getElementById('horas')
let min = document.getElementById('minutos')
let seg = document.getElementById('segundos')
let mseg = document.getElementById('centesimos')
var a = b = c = d = 0


// CONTAGEM
function centesimos() {
  if (a < 100) {
    if (a < 10) {
      mseg.innerHTML = '0' + a
      a++
    } else {
    mseg.innerHTML = a
    a ++ }
  } else {
    a = 1
  } 
  if (a == 100) {
    a = 0
    b++
  } if (b < 10) {
    seg.innerHTML = '0' + b
  } else {
    seg.innerHTML = b
  }
  if (b == 60) {
    b = 0 
    c++
  } if (c < 10) {
    min.innerHTML = '0' + c + ':'
  } else {
    min.innerHTML = c + ':'
  }
  if (c == 60) {
    c = 0
    d++
  } if (d < 10) {
    hor.innerHTML = '0' + d + ':'
  } else {
    hor.innerHTML = d + ':'
  }
}
// CONTAGEM


// BOTÕES
function iniciar() {
  document.getElementById('iniciar').disabled = true
  document.getElementById('pausar').disabled = false
  intervalo = setInterval(centesimos,10)
  var iniciar = document.getElementById('iniciar')
  var pausar = document.getElementById('pausar')
  iniciar.style.background = "white"
  iniciar.style.color = "lightcoral"
  pausar.style.background = "lightcoral"
  pausar.style.color = "white"
}


function pausar() {
  document.getElementById('pausar').disabled = true
  document.getElementById('iniciar').disabled = false
  clearInterval(intervalo)
  var iniciar = document.getElementById('iniciar')
  var pausar = document.getElementById('pausar')
  pausar.style.background = "white"
  pausar.style.color = "lightcoral"
  iniciar.style.background = "lightcoral"
  iniciar.style.color = "white"
}

function reset() {
  document.getElementById('iniciar').disabled = false
  document.getElementById('pausar').disabled = false
  a = b = c = d = 0
  centesimos.innerHTML = "00"
  segundos.innerHTML = "00"
  minutos.innerHTML = "00:"
  horas.innerHTML = "00:" 
  var iniciar = document.getElementById('iniciar')
  var pausar = document.getElementById('pausar')
  pausar.style.background = "lightcoral"
  pausar.style.color = "white"
  iniciar.style.background = "lightcoral"
  iniciar.style.color = "white"
}
// BOTÕES