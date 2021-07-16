// Write our JavaScript in here
// This is an annoying pop-up box, just to make sure js has been linked to html.
//alert("Hello form app.js");

var pics = [
    "imgs/Random_Cat_1.jfif",   //0
    "imgs/Random_Cat_2.jfif",   //1
    "imgs/Random_Cat_3.jfif",   //2
    "imgs/Random_Cat_4.jfif",   //3
    "imgs/Random_Cat_5.jfif",   //4
    "imgs/Random_Cat_6.png",    //5
    "imgs/Random_Cat_7.jfif"    //6
    // Gone too far             //7
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function () {
    // Bring us back to 0 if we've gone too far (>=7)
    if (counter === 7) {
        counter = 0;
    }
    // Normal part of the function: increase picture position by 1
    img.src = pics[counter];
    counter = counter + 1;
});
