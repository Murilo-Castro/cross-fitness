var campoDeFiltro = document.querySelector("#filtrar-aluno");

campoDeFiltro.addEventListener("input", function () {
  console.log(this.value);
  var alunos = document.querySelectorAll(".aluno");

  if (this.value.length > 0) {
    for (i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      var tdNome = aluno.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressaoBusca = new RegExp(this.value, "i");

      if (!expressaoBusca.test(nome)) {
        aluno.classList.add("invisivel");
      } else {
        aluno.classList.remove("invisivel");
      }
    }
  } else {
    for (i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      aluno.classList.remove("invisivel");
    }
  }
});
