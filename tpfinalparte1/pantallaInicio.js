function pantallaInicio() {
  //Boton

  rectMode(CENTER);
  fill(255);
  rect(width / 2, height * 0.65, 200, 60, 10);

  //texto del boton
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("INICIAR", width / 2, height * 0.65);
}

function mousePressed() {
  if (pantallaActual === 0) {
    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > height * 0.65 - 30 &&
      mouseY < height * 0.65 + 30 //verifica posicion
    ) {
      pantallaActual = 1; //avanza a la siguiente
     
    }
  }
}
