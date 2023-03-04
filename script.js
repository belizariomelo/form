function enviarEmail() {
  var nome = document.getElementById("nome").value;
  var numero = document.getElementById("numero").value;
  var email = document.getElementById("email").value;
  var horario = document.getElementById("horario").value;

  var link =
    "mailto:belizarioclementino@hotmail.com" +
    "?subject=Novo Formulário Enviado" +
    "&body=Nome: " +
    nome +
    "%0D%0A" +
    "Número: " +
    numero +
    "%0D%0A" +
    "E-mail: " +
    email +
    "%0D%0A" +
    "Horário: " +
    horario;

  window.location.href = link;
  return true;
}
