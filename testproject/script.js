window.addEventListener('load', ()=>{
var cadena;
var parrafo=[];
var rebote=[];
var x = [0];
var y = [];
var y0=200;

document.getElementById('sub').addEventListener('click', ()=>{
  var cad;
  cad = document.getElementById('cad').value;
  var l = cad.length;
  var inv = [];
  while (l > 0) {
    l--;
    inv.push(cad.charAt(l));
  }
  var alr = inv.join("");
  console.log(alr);
   var par = createP(alr);
  parrafo.push(par);
  x.push(0);
  y0+=20;
  y.push(y0);
  rebote.push(true);
}

  }
