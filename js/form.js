
var form = document.getElementById("big-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function send_data() {
    let name = document.getElementById("first_name").value;
    let summ = document.querySelector('input[name="summ"]:checked').value;
    let date = document.getElementById("date").value;
    let mail = document.getElementById("mail").value;
    let phone_number = document.getElementById("phone_number").value;
    let check = document.getElementById("check");
    let datetime = new Date()
    check.innerText += "Что передали на сервер:\nИмя: " + name + "\nПочта:" + mail + "\nТелефон:" + phone_number + "\nСумма: " + summ + "\nСегодняшняя дата:" + datetime + "\nДата: " + date
};
form.addEventListener('submit', send_data)