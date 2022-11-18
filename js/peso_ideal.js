function pesoIdeal(imc) {
  if (imc < 18.5) return "Abaixo do Peso";
  if (imc > 18.5 && imc < 24.9) return "Peso Normal";
  if (imc > 25 && imc < 29.9) return "Sobrepeso";
  if (imc > 30 && imc < 34.9) return "Obesidade Grau I";
  if (imc > 35 && imc < 39.9) return "Obesidade grau II";
  if (imc > 40) return "Obesidade grau III";
}
