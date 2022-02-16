var perraAdderess = document.querySelectorAll(".information p");
function hidePerra(){
    for (let i = 0; i < perraAdderess.length; i++) {
        perraAdderess[i].style.display = "none";
    }
}
function showPerra(item){
    hidePerra();
    if (item.querySelector('p').style.display == "none") {
        item.querySelector('p').style.display = "block";
        item.querySelector('img').style.transform = "rotate(180deg)";
    }
    else{
        item.querySelector('p').style.display = "none";
    }
}