function calculateX() {
    let a = parseFloat(document.getElementById("a").value);
    let x;

    if (a > 100) {
        x = 0;
    } else if (a < 61) {
        x = a;
    } else {
        x = Math.pow(a, 4);
    }

    document.getElementById("result").innerHTML = "Значение x равно: " + x;
    send(a, x)
}

function send(a, x) {
    if (a) {
        let task_content = document.getElementById("task_content").innerText
        document.getElementsByName('formulation')[0].value = task_content;
        document.getElementById('result').value = x;
        document.getElementById("big-form").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}
function handleForm(event) { event.preventDefault(); } 
let form = document.getElementById("big-form");
let elem_send = document.getElementById("send");
form.addEventListener('submit', handleForm);
elem_send.addEventListener('click', calculateX);