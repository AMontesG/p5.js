//Variables globales
var alto, ancho, color1, color2, x, y, N_h, N_w, C_1, C_2, rect, rebote, cambio, color;

function setup() {
  createCanvas(400, 400);
  N_h = select("#h");
  N_w = select("#w");
  C_1 = select("#c1");
  C_2 = select("#c2");
  x = 0;
  color = (C_1.value());

}

function mousePressed() {
  if (((mouseX > x) && (mouseX < x + ancho)) && ((mouseY > y) && (mouseY < y + alto)))
    if (color == color1)
      color = color2;
    else
      color = color1;
}

function draw() {
  background(0, 0, 0);
  noStroke();
  alto = Number(N_h.value());
  ancho = Number(N_w.value());
  color1 = (C_1.value());
  color2 = (C_2.value());
  y = 200;
  if (x >= 400 - ancho)
    rebote = false;
  if (x == 0)
    rebote = true;
  if (rebote)
    x++;
  else
    x--;
  rect(x, y, ancho, alto);
  fill(color);

}