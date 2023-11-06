let header = document.getElementsByClassName("header")[0];
header.innerHTML = `
    <a class="main-logo" href="index.html"><img src="images/main-logo.png" alt="Loreal" style="height: 4vh"></a>
    <a class="header-button" href="rest-form.html">Форма для отзыва</a>
    <a class="header-button" href="form-another.html">Форма для новых блюд</a>
    <a class="header-button" href="info-page.html">Инфостраница</a>
    <a class="header-button" href="service.html#top">Услуги</a>
    <a href="https://www.novikovgroup.ru/"><img src="images/logo.png" alt="Loreal" style="height: 4vh"></a>
`
let path = window.location.pathname;
let page = path.split("/").pop();
if (page == 'index.html') {
    let homeButton = document.getElementsByClassName("main-logo")[0];
    homeButton.classList.add("current");
} else if (page == 'rest-form.html') {
    let formButton = document.getElementsByClassName("header-button")[0];
    formButton.classList.add("current");
} else if (page == 'form-another.html') {
    let formButton = document.getElementsByClassName("header-button")[1];
    formButton.classList.add("current");
} else if (page == 'info-page.html') {
    let infoButton = document.getElementsByClassName("header-button")[2];
    infoButton.classList.add("current");
} else if (page == 'service.html') {
    let serviceButton = document.getElementsByClassName("header-button")[3];
    serviceButton.classList.add("current");
}

let footer = document.getElementsByClassName("footer")[0]
footer.innerHTML = `
<p>Мы вам доверяем настолько, что можете посмотреть наши документы: <a href="passport.html">click</a></p>
Проекты наших программистов: <a href="algo.html">algo</a>`
