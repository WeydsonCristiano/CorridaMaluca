// https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
// https://www.w3schools.com/jsref/event_onload.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt

let botaoCorrida = document.getElementById("start-race-btn");
let carro1 = document.querySelector(".car1");
let carro2 = document.querySelector(".car2");
let carro3 = document.querySelector(".car3");
let carro4 = document.querySelector(".car4");
let carro5 = document.querySelector(".car5");

function resetCars() {
  carro1.style.marginLeft = "1px";
  carro2.style.marginLeft = "1px";
  carro3.style.marginLeft = "1px";
  carro4.style.marginLeft = "1px";
  carro5.style.marginLeft = "1px";
}

resetCars();
botaoCorrida.addEventListener("click", function () {
  carro1.style.marginLeft =
    parseInt(carro1.style.marginLeft) + Math.random() * 300 + "px";
  carro2.style.marginLeft =
    parseInt(carro2.style.marginLeft) + Math.random() * 300 + "px";
  carro3.style.marginLeft =
    parseInt(carro2.style.marginLeft) + Math.random() * 300 + "px";
  carro4.style.marginLeft =
    parseInt(carro2.style.marginLeft) + Math.random() * 300 + "px";
  carro5.style.marginLeft =
    parseInt(carro2.style.marginLeft) + Math.random() * 300 + "px";
  if (parseInt(carro1.style.marginLeft) > window.innerWidth) {
    alert("Mclaren-650s venceu!!!");
    resetCars();
  }
  if (parseInt(carro2.style.marginLeft) > window.innerWidth) {
    alert("Lamborguine-Galardo venceu!!!");
    resetCars();
  }
  if (parseInt(carro3.style.marginLeft) > window.innerWidth) {
    alert("Ferrari-599x venceu!!!");
    resetCars();
  }
  if (parseInt(carro4.style.marginLeft) > window.innerWidth) {
    alert("Porche-911 venceu!!!");
    resetCars();
  }
  if (parseInt(carro5.style.marginLeft) > window.innerWidth) {
    alert("Toyota-Supra venceu!!!");
    resetCars();
  }
});
botaoCorrida.addEventListener("mouseover", function (event) {
  console.log(event);
});
