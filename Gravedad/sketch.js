var merc, ven, tie, mar, jup, sat, ur, nep, escala, masa;

function setup() {
  //Selección identificadores
  merc = select("#mercurio");
  ven = select("#venus");
  tie = select("#tierra");
  mar = select("#marte");
  jup = select("#jupiter");
  sat = select("#saturno");
  ur = select("#urano");
  nep = select("#neptuno");
  esc = select("#escala");
  m = select("#masa");
  //Click del ratón
  merc.mousePressed(mercurio);
  ven.mousePressed(venus);
  tie.mousePressed(tierra);
  mar.mousePressed(marte);
  jup.mousePressed(jupiter);
  sat.mousePressed(saturno);
  ur.mousePressed(urano);
  nep.mousePressed(neptuno);



}
//Funciones indviduales de cada planeta para redigirir al js y pasarle parámetros
function mercurio() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("planeta", "mercurio");
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}

function venus() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  localStorage.setItem("planeta", "venus");
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}

function tierra() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  localStorage.setItem("planeta", "tierra");
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}

function marte() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  localStorage.setItem("planeta", "marte");
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}

function jupiter() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  localStorage.setItem("planeta", "jupiter");
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}

function saturno() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  localStorage.setItem("planeta", "saturno");
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}

function urano() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  localStorage.setItem("planeta", "urano");
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}

function neptuno() {
  masa = Number(m.value());
  escala = Number(esc.value());
  localStorage.setItem("masa", masa);
  localStorage.setItem("escala", escala);
  localStorage.setItem("planeta", "neptuno");
  window.open("https://editor.p5js.org/angel.montesgabaldon2001@gmail.com/present/OWA6PoJF9", "_self");
}