let rus = true;
let button = document.getElementById("button")

function translate() {
    if (rus) {
        document.getElementById("block1").innerHTML = "FMS OF RUSSIA IN MOSCOW<br>BY DISTRICT X";
        document.getElementById("block4").innerText = "Kirilyuk";
        document.getElementById("block5").innerText = "Polina";
        document.getElementById("block6").innerText = "Nikolaevna";
        document.getElementById("block7").innerText = "woman";
        document.getElementById("block9").innerText = "Moscow";
    } else {
        document.getElementById("block1").innerHTML = "УФСМ РОССИИ ПО ГОР. МОСКВЕ<br>ПО РАЙОНУ Х";
        document.getElementById("block4").innerText = "Кирилюк";
        document.getElementById("block5").innerText = "Полина";
        document.getElementById("block6").innerText = "Николаевна";
        document.getElementById("block7").innerText = "жен.";
        document.getElementById("block9").innerText = "гор. Москва";
    };
    rus = ! rus;
}
button.onclick = translate