import "bootstrap";
import "./style.css";

window.onload = function() {
  //Arrays
  var suiteArray = ["&#9830", "&#9824", "&#9827", "&#9829"];
  var numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var cardsNumbers = [];

  // botones
  const drawButton = document.getElementById("draw");
  const sortButton = document.getElementById("sort");
  let cardsUbication = document.querySelector("#cards");

  // evento onClick del boton draw
  drawButton.addEventListener("click", function() {
    //captura del valor del input
    cardsNumbers = [];
    var cardsAmount = document.getElementById("input1").value;
    cardsUbication.innerHTML = " ";

    for (let i = 0; i < cardsAmount; i++) {
      //Generador de las cartas en el HTML
      let division = document.createElement("DIV");
      division.innerHTML =
        "<div class='Suit1'></div><div class='number'></div><div class='Suit2'></div>";
      division.classList.add("card");
      cardsUbication.appendChild(division);

      //funciones randoms
      var randomSuit = Math.floor(Math.random() * 4);
      var randomNumber = Math.floor(Math.random() * 13);
      //actualizacion del array cardsNumber (funcion push)
      cardsNumbers.push(randomNumber);

      //ubicacion de los simbolos y numeros de las cartas
      var suitUbication1 = document.getElementsByClassName("Suit1");
      var numberUbication = document.getElementsByClassName("number");
      var suitUbication2 = document.getElementsByClassName("Suit2");

      // ifs de asignacion
      if (randomSuit == 0) {
        var suit1 = suiteArray[randomSuit];
        suitUbication1[i].innerHTML = suit1;
        var num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        var suit2 = suiteArray[randomSuit];
        suitUbication2[i].innerHTML = suit2;
        suitUbication1[i].style.color = "red";
        suitUbication2[i].style.color = "red";
        numberUbication[i].style.color = "red";
      } else if (randomSuit == 1) {
        suit1 = suiteArray[randomSuit];
        suitUbication1[i].innerHTML = suit1;
        num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        suit2 = suiteArray[randomSuit];
        suitUbication2[i].innerHTML = suit2;
      } else if (randomSuit == 2) {
        suit1 = suiteArray[randomSuit];
        suitUbication1[i].innerHTML = suit1;
        num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        suit2 = suiteArray[randomSuit];
        suitUbication2[i].innerHTML = suit2;
      } else if (randomSuit == 3) {
        suit1 = suiteArray[randomSuit];
        suitUbication1[i].innerHTML = suit1;
        num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        suit2 = suiteArray[randomSuit];
        suitUbication2[i].innerHTML = suit2;
        suitUbication1[i].style.color = "red";
        suitUbication2[i].style.color = "red";
        numberUbication[i].style.color = "red";
      }
    }
  });

  // evento onClick de sort
  sortButton.addEventListener("click", function() {
    bubble(cardsNumbers);
  });

  // funcion que ejecuta el algoritmo burbuja(Bubble Sort)
  function bubble(arr) {
    let len = arr.length - 1;
    while (len > 0) {
      for (let i = 0; i <= len; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;

          // constructor de cartas ordenadas
          let temp2 = cardsUbication.children[i + 1].innerHTML;
          cardsUbication.children[i + 1].innerHTML =
            cardsUbication.children[i].innerHTML;
          cardsUbication.children[i].innerHTML = temp2;
        }
      }
      len--;
    }
  }
};
