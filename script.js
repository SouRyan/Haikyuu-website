document.getElementById("menu1").onclick = () => {
    document.getElementById("menu").style.right = "0px";
    document.getElementById("menu1").style.right = "-500px";

}
document.getElementById("fechar").onclick = () => {
    document.getElementById("menu").style.right = "-500px";
    document.getElementById("menu1").style.right = "0px";
}

const imgs = document.querySelector("#img");
const img = document.querySelectorAll("#img .imgas");

let idx = 0;

function carrossel() {
    idx++;

    if (idx >= img.length) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`;
}

setInterval(carrossel, 3000);
