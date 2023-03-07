



const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


function enviarEmail(event) {
  event.preventDefault();

  var nome = document.getElementById("nome").value;
  var numero = document.getElementById("numero").value;
  var email = document.getElementById("email").value;
  var horario = document.getElementById("horario").value;

  var isValid = true; // adiciona uma variável para verificar se todos os campos são válidos

 
  if (isValid) {
    // recarrega a página apenas se todos os campos forem válidos
    var link =
      "mailto:belizarioclementino@hotmail.com" +
      "?subject=Reserva Palco SECTI" +
      "&body=Nome:  " +
      nome +
      "%0D%0A %0D%0A" +
      "Número:  " +
      numero +
      "%0D%0A %0D%0A" +
      "E-mail:   " +
      email +
      "%0D%0A %0D%0A" +
      "Horário:  " +
      horario +
      "%0D%0A %0D%0A" +
      "Motivo: " +
      document.getElementById('msg').value;

    window.location.href = link;
    return true;
}
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
    } else if (numeroSemMascara.length === 10) {
      numeroComMascara +=
        numeroSemMascara.substring(2, 6) + "-" + numeroSemMascara.substring(6);
    } else {
      numeroComMascara += numeroSemMascara.substring(2);
    }

    numeroInput.value = numeroComMascara;
  } else {
    // Remove o sinal "-" se ele foi adicionado anteriormente
    numeroInput.value = numeroInput.value.replace("-", "");
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
// Selecione o elemento checkbox do HTML
// Selecione o elemento checkbox do HTML
const toggleSwitch = document.querySelector(".toggle-checkbox");

// Se o usuário já selecionou o tema escuro, ative-o imediatamente
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark-mode");
  document.body.classList.add("dark-mode");
  document.querySelector(".formulario1").classList.add("dark-mod");
  toggleSwitch.checked = true;
}

// Adicione um event listener ao checkbox para detectar quando ele é clicado
toggleSwitch.addEventListener("change", function (event) {
  // Se o checkbox está marcado, mude para o tema escuro, caso contrário, mude para o tema padrão
  if (event.target.checked) {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    document.querySelector(".formulario1").classList.add("dark-mod");
    // Salve a preferência do usuário para o tema escuro no Local Storage
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark-mode");
    document.body.classList.remove("dark-mode");
    document.querySelector(".formulario1").classList.remove("dark-mod");
    // Salve a preferência do usuário para o tema padrão no Local Storage
    localStorage.setItem("theme", "default");
  }
});

