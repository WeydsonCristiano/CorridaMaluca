// https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
// https://www.w3schools.com/jsref/event_onload.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt

let botaoCorrida = document.getElementById("start-race-btn");
let carro1 = document.querySelector(".car1");
let carro2 = document.querySelector(".car2");

function resetCars() {
  carro1.style.marginLeft = "1px";
  carro2.style.marginLeft = "1px";
}

resetCars();
botaoCorrida.addEventListener("click", function () {
  carro1.style.marginLeft =
    parseInt(carro1.style.marginLeft) + Math.random() * 300 + "px";
  carro2.style.marginLeft =
    parseInt(carro2.style.marginLeft) + Math.random() * 300 + "px";
  if (parseInt(carro1.style.marginLeft) > window.innerWidth) {
    alert("Porche911 venceu!!!");
    resetCars();
  }
  if (parseInt(carro2.style.marginLeft) > window.innerWidth) {
    alert("Bmw320 venceu!!!",);
    resetCars();
  }
});
botaoCorrida.addEventListener("mouseover", function (event) {
  console.log(event);
});
