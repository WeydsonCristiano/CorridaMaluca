let botaoCorrida = document.getElementById("start-race-btn");
let carro1 = document.querySelector(".car1");
let carro2 = document.querySelector(".car2");
let carro3 = document.querySelector(".car3");
let carro4 = document.querySelector(".car4");

function resetCars() {
carro1.style.marginLeft = "1px";
carro2.style.marginLeft = "1px";
carro3.style.marginLeft = "1px";
carro4.style.marginLeft = "1px";

}

resetCars();
botaoCorrida.addEventListener("click", function () {
carro1.style.marginLeft =
parseInt(carro1.style.marginLeft) + Math.random() * 200 + "px";
carro2.style.marginLeft =
parseInt(carro2.style.marginLeft) + Math.random() * 200 + "px";
carro3.style.marginLeft =
parseInt(carro3.style.marginLeft) + Math.random() * 200 + "px";
carro4.style.marginLeft =
parseInt(carro4.style.marginLeft) + Math.random() * 200 + "px";


if (parseInt(carro1.style.marginLeft) > window.innerWidth) {
alert("Ferrari-599x venceu!!!");
resetCars();
}
if (parseInt(carro2.style.marginLeft) > window.innerWidth) {
alert("Lamborguine-Galardo venceu!!!");
resetCars();
}
if (parseInt(carro3.style.marginLeft) > window.innerWidth) {
alert("Gallardo gtr venceu!!!");
resetCars();
}
if (parseInt(carro4.style.marginLeft) > window.innerWidth) {
    alert("Toyota Supra venceu!!!");
    resetCars();
    }
});

botaoCorrida.addEventListener("mouseover", function (event) {
console.log(event);
});
