var alunos = document.querySelectorAll(".aluno");

for (i = 0; i < alunos.length; i++) {
  var aluno = alunos[i];

  var tdPeso = aluno.querySelector(".info-peso");
  var tdAltura = aluno.querySelector(".info-altura");
  var tdSexo = aluno.querySelector(".info-sexo");
  var tdKcal = aluno.querySelector(".info-kcal");
  var tdIdade = aluno.querySelector("info-idade");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var sexo = tdSexo.textContent;
  var idade = tdIdade.textContent;

  var kCal = calculaKcal(peso, altura, sexo, idade);
  tdKcal.textContent = kCal;
}

function calculaKcal(peso, altura, sexo, idade) {
  var kCal = 0;
  if (sexo == "masculino" || sexo == "Masculino") {
    kCal = 66 + 13.7 * peso + 5.0 * altura - 6.8 * idade;
  }
  if (sexo == "feminino" || sexo == "Feminino") {
    kCal = 665 + 9.6 * peso + 1.8 * altura - 4.7 * idade;
  }
  return kCal.toFixed(2);
}
