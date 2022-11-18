var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");
  var aluno = obtemalunoDoForm(form);
  var erros = validaaluno(aluno);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }
  adicionaalunoNaTabela(aluno);
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function adicionaalunoNaTabela(aluno) {
  var alunoTr = montaTr(aluno);
  var tabela = document.querySelector("#tabela-alunos");
  tabela.appendChild(alunoTr);
}

function obtemalunoDoForm(form) {
  var aluno = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    idade: form.idade.value,
    sexo: form.sexo.value,
    imc: calculaImc(form.peso.value, form.altura.value),
    kcal: calculaKcal(
      form.peso.value,
      form.altura.value,
      form.sexo.value,
      form.idade.value
    ),
    pesoIdeal: pesoIdeal(calculaImc(form.peso.value, form.altura.value)),
  };
  return aluno;
}

function montaTr(aluno) {
  var alunoTr = document.createElement("tr");
  alunoTr.classList.add("aluno");

  alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
  alunoTr.appendChild(montaTd(aluno.peso, "info-peso"));
  alunoTr.appendChild(montaTd(aluno.altura, "info-altura"));
  alunoTr.appendChild(montaTd(aluno.idade, "info-idade"));
  alunoTr.appendChild(montaTd(aluno.sexo, "info-sexo"));
  alunoTr.appendChild(montaTd(aluno.pesoIdeal, "info-peso-ideal"));
  alunoTr.appendChild(montaTd(aluno.imc, "info-imc"));
  alunoTr.appendChild(montaTd(aluno.kcal, "info-kcal"));
  return alunoTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaaluno(aluno) {
  var erros = [];
  if (aluno.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (aluno.idade.length == 0) {
    erros.push("A idade não pode ser em branco");
  }

  if (aluno.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }

  if (aluno.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }

  if (!validaPeso(aluno.peso)) {
    erros.push("Peso é inválido");
  }

  if (!validaAltura(aluno.altura)) {
    erros.push("Altura é inválida");
  }
  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
