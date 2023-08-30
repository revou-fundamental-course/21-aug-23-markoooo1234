function replaceName(){
    let name = prompt("Siapakah Nama Anda ?", "");
    document.getElementById("name").innerHTML = name;
}

replaceName();

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if(n >  imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }

    imgList[slideIndex-1].style.display = "block";

}

setInterval(() =>{
    plusDivs(1);
}, 5000 )

function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if(name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak Boleh ada yang Kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;

}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}



