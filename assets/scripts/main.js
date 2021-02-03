// main.js
let aud = new Audio("./assets/media/audio/air-horn.mp3");

function changeVolumeImg(value) {
    let volImg = document.getElementById("volume-image");
    if(value >= 67)
        volImg.src = "./assets/media/icons/volume-level-3.svg"
    else if(value >= 34)
        volImg.src = "./assets/media/icons/volume-level-2.svg"
    else if(value > 0)
        volImg.src = "./assets/media/icons/volume-level-1.svg"
    else {
        document.getElementById("honk-btn").disabled = true;
        volImg.src = "./assets/media/icons/volume-level-0.svg"
    }
}


//image controls
let air = document.getElementById("radio-air-horn");
air.onclick = function() {
    let img = document.getElementById("sound-image");
    img.src = "assets/media/images/air-horn.svg";
    let prevVol = aud.volume; //maintain current vol
    aud = new Audio("./assets/media/audio/air-horn.mp3");
    aud.volume = prevVol;
};

let car = document.getElementById("radio-car-horn");
car.onclick = function() {
    let img = document.getElementById("sound-image");
    img.src = "assets/media/images/car.svg";
    let prevVol = aud.volume; //maintain current vol
    aud = new Audio("./assets/media/audio/car-horn.mp3");
    aud.volume = prevVol;
};

let party = document.getElementById("radio-party-horn");
party.onclick = function() {
    let img = document.getElementById("sound-image");
    img.src = "assets/media/images/party-horn.svg";
    let prevVol = aud.volume; //maintain current vol
    aud = new Audio("./assets/media/audio/party-horn.mp3");
    aud.volume = prevVol;
};


//volume controls
let textVol = document.getElementById("volume-number");
textVol.oninput = function() {
    aud.volume = this.value / 100;
    document.getElementById("honk-btn").disabled = false;
    let slide = document.getElementById("volume-slider");
    slide.value = this.value;
    changeVolumeImg(this.value);
    aud.volume = this.value / 100;
};

let slider = document.getElementById("volume-slider");
slider.oninput = function() {
    aud.volume = this.value / 100;
    document.getElementById("honk-btn").disabled = false;
    let text = document.getElementById("volume-number");
    text.value = this.value;
    changeVolumeImg(this.value);
    aud.volume = this.value / 100;
};


//honk button
let btn = document.getElementById("honk-btn");
btn.onclick = function() {
    aud.play();
    return false;
};
