function areaCirculo() {
  //calculate
  var form = document.getElementById("circulo");
  var out = form.elements["resp_circulo"];
  var radius = parseInt(form.elements["radio_circulo"].value);

  out.value = 2 * Math.PI * radius;
}

function areaCuadrado() {
    //calculate
    var form = document.getElementById("cuadrado");
    var out = form.elements["resp_cuadrado"];
    var lado = parseInt(form.elements["lado_cuadrado"].value);
  
    out.value = lado**2;
  }

  
  function areaRectagulo() {
    //calculate
    var form = document.getElementById("rectangulo");
    var out = form.elements["resp_rectangulo"];
    var h = parseInt(form.elements["h_rectangulo"].value);
    var b = parseInt(form.elements["b_rectangulo"].value);
  
    out.value = b * h;
  }

  
  function areaTriangulo() {
    //calculate
    var form = document.getElementById("triangulo");
    var out = form.elements["resp_triangulo"];
    var h = parseInt(form.elements["h_triangulo"].value);
    var b = parseInt(form.elements["b_triangulo"].value);
  
    out.value = b * h/2;
  }
  