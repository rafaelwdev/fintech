var menu = document.querySelectorAll("nav.menu a");
var menuMobile = document.querySelectorAll("nav.menu-mobile a");

var btnShowMenu = document.querySelector(".btn-menu");
var btnCloseMenu = document.querySelector(".btn-close-menu");

btnShowMenu.addEventListener("click", function () {
    document.querySelector(".menu-mobile").classList.remove("hide-menu-mobile")
})

btnCloseMenu.addEventListener("click", function () {
    document.querySelector(".menu-mobile").classList.add("hide-menu-mobile")
})

menu.forEach(function (e) {
    e.addEventListener("mouseover", menuHover)
    e.addEventListener("mouseout", menuOut)
    e.addEventListener("click", navegacao)
})

menuMobile.forEach(function (e) {
    e.addEventListener("click", navegacaoMobile)
})

function navegacaoMobile() {
    openPage(this.getAttribute("data-url") + ".html")
    document.querySelector(".menu-mobile").classList.add("hide-menu-mobile")
}

function menuHover() {
    this.children[0].setAttribute('src', this.getAttribute("data-src") + '-hover.svg')
}

function menuOut() {
    this.children[0].setAttribute('src', this.getAttribute("data-src") + '.svg')

    if (this.className == "active") {
        this.children[0].setAttribute('src', this.getAttribute("data-src") + '-hover.svg')
    }
}

function navegacao() {
    menu.forEach(function (e) {
        e.classList.remove("active");
        e.children[0].setAttribute('src', e.getAttribute("data-src") + '.svg')
    })
    this.classList.toggle("active");
    openPage(this.getAttribute("data-url") + ".html")
}

function openPage(page) {
    fetch(page)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.querySelector("section").innerHTML = html
        });
}
openPage("pages/dashboard.html")