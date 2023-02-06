const button = document.getElementById("button-random-color");
const cor1 = document.querySelectorAll(".color")[1];
const cor2 = document.querySelectorAll(".color")[2];
const cor3 = document.querySelectorAll(".color")[3];

    button.addEventListener("click", function() {
        cor1.style.backgroundColor = getRandomColor();
        cor2.style.backgroundColor = getRandomColor();
        cor3.style.backgroundColor = getRandomColor();
        localStorage.setItem("colorPalette", JSON.stringify([cor1.style.backgroundColor, cor2.style.backgroundColor, cor3.style.backgroundColor]));
     });

     if (localStorage.getItem("colorPalette")) {
        const colorPalette = JSON.parse(localStorage.getItem("colorPalette"));
            cor1.style.backgroundColor = colorPalette[0];
            cor2.style.backgroundColor = colorPalette[1];
            cor3.style.backgroundColor = colorPalette[2];
        } else {
            cor1.style.backgroundColor = getRandomColor();
            cor2.style.backgroundColor = getRandomColor();
            cor3.style.backgroundColor = getRandomColor();
        }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let cor = "#";
        for (let index = 0; index < 6; index += 1) {
            cor += letters[Math.floor(Math.random() * 16)];
         }
        return cor;
    }

//Teste criar div com javascript (Não deu certo)
/*     const pixelBoard = document.getElementById("pixel-board");

    for (let index = 0; index < 25; index += 1) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.backgroundColor = "white";
      pixelBoard.appendChild(pixel);
    } */