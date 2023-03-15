console.log("page loading...");

// index     0  1   2
var likes = [9,12,9];
var spans = [document.querySelector("#number1"),
document.querySelector("#number2"),
document.querySelector("#number3")];

function like(id) {
    likes[id]++;
    spans[id].innerHTML= likes[id] +"like(s)"

}