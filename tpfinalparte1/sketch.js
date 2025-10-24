//En este array vamos a poner las imagenes como figuran en la carpeta assets
//sugiero ir cargando de a una para no perdernos porque son 15 jaja
let imagenes = [
  "assets/Inicio.png",
  "assets/Escena 1.png",
  "assets/escena2.png",
];

let pantallaActual = 0; //esta variable "cuenta" las pantallas con el for de abajo

function preload() {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage(imagenes[i]);
  }
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(32);
}

function draw() {
  background(220);
  image(imagenes[pantallaActual], 0, 0, width, height);

  if (pantallaActual === 0) {
    pantallaInicio();
  } if(pantallaActual === 1) {
    mostrarTexto(_textos);
  }
}


