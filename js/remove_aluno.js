var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("remove-efect");
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 1000);
});
