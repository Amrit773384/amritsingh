function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
};
// var progressbar = document.getElementById("progressbar")
// progressbar.addEventListener("animationend",function(){
//     while(document.readyState!="complete"){
//         sleep(10);
//     }
//     progressbar.style.width = "100%";    
// })
// progressbar.addEventListener("transitionend",function(){
//     progressbar.style.display = "none";
//     console.log("done transisioned on progressbbar")
// })

// $(document).ready(function(){
//     document.getElementById("loadinggif").style.display = "none";
//     $('#headerdiv').ripples({
//         dropRadius:20,
//         pertubance:0.03,
//     })

// })
function hideNav() {
    document.getElementById("small-nav1").classList.add("hide-nav")
}

function showNav() {
    document.getElementById("small-nav1").classList.remove("hide-nav")
}
window.addEventListener("resize", function () {
    document.title = window.innerWidth + "x" + window.innerHeight;
})
