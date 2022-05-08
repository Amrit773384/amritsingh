function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i= 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
};

function hideNav() {
    document.getElementById("small-nav1").classList.add("hide-nav")
}

function showNav() {
    document.getElementById("small-nav1").classList.remove("hide-nav")
}
window.addEventListener("resize", function () {
    document.title = window.innerWidth + "x" + window.innerHeight;
});

window.addEventListener("scroll",function(){
    let nav = document.getElementById("uniq-navbar");
    nav.classList.toggle("nav-active",window.scrollY > 200);
});

function redirect(pageName){
    window.location.pathname = pageName;
};
