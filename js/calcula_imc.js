var alunos = document.querySelectorAll(".aluno");

for (i = 0; i < alunos.length; i++) {
  var aluno = alunos[i];
  var tdPeso = aluno.querySelector(".info-peso");
  var tdAltura = aluno.querySelector(".info-altura");
  var tdImc = aluno.querySelector(".info-imc");
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var pesoEhValido = validaPeso(peso);
  var alturaEhvalida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdImc.textContent = "Peso Inválido!";
    pesoEhValido = false;
    aluno.classList.add("aluno-invalido");
  }

  if (!alturaEhvalida) {
    console.log("Altura inválida!");
    tdImc.textContent = "Altura Inválida!";
    alturaEhvalida = false;
    aluno.classList.add("aluno-invalido");
  }

  if (pesoEhValido && alturaEhvalida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
    console.log(tdImc.textContent);
  }
}

function calculaImc(peso, altura) {
  var alturaMetro = altura / 100;
  var imc = 0;
  imc = peso / (alturaMetro * alturaMetro);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 250) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 300) {
    return true;
  } else {
    return false;
  }
}

function pesoIdeal(imc) {
  if (imc < 18.5) return "Abaixo do Peso";
  if (imc > 18.5 && imc < 24.9) return "Peso Normal";
  if (imc > 25 && imc < 29.9) return "Sobrepeso";
  if (imc > 30 && imc < 34.9) return "Obesidade Grau I";
  if (imc > 35 && imc < 39.9) return "Obesidade grau II";
  if (imc > 40) return "Obesidade grau III";
}
