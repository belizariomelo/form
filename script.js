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
const numeroInput = document.getElementById("numero");

numeroInput.addEventListener("input", function () {
  const numero = numeroInput.value;

  const dddsValidos = [
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "21",
    "22",
    "24",
    "27",
    "28",
    "31",
    "32",
    "33",
    "34",
    "35",
    "37",
    "38",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "51",
    "53",
    "54",
    "55",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "71",
    "73",
    "74",
    "75",
    "77",
    "79",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
  ];

  const numeroSemMascara = numero.replace(/[\(\)\s\-]/g, "");

  if (dddsValidos.includes(numeroSemMascara.substring(0, 2))) {
    let numeroComMascara = "(" + numeroSemMascara.substring(0, 2) + ") ";

    if (numeroSemMascara.length === 11) {
      numeroComMascara +=
        numeroSemMascara.substring(2, 7) + "-" + numeroSemMascara.substring(7);
    } else {
      numeroComMascara +=
        numeroSemMascara.substring(2, 6) + "-" + numeroSemMascara.substring(6);
    }

    numeroInput.value = numeroComMascara;
  }
});
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="tel"], input[type="email"], select'
);

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("input-focus");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.classList.remove("input-focus");
    }
  });
});
