function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
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




setTimeout(function() {
    while(document.readyState!="complete"){
        sleep(100);
    }
    var loader = document.getElementById('loadinggif');
    loader.style.display= "none";
  }, 3000);