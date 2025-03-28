let first = null;
const ul = document.querySelector("ul");
const selectedItem = document.getElementById("difficulty"); 
const options = selectedItem.options;
console.log(options);
function Difficulty(){
    if(options == "0"){
        Generate(12);
    }
    else if(options == "1"){
        Generate(18);
    }
    else if(options == "2"){
        Generate(24);
    }
    
}
function StartGame(){
    Difficulty();
    
}

function Generate(value){
    ul.innerHTML="";
    for (let i = 0; i < value; i++) {
        ul.innerHTML+=`<li><img src="./image/letöltés.webp"></li>`
        
    }
    
}

window.document.onload(Generate(5));
//const input = document.querySelector("input");
// input.addEventListener("click",StartGame());
// function swapMovies(li1, li2) {
//     const firstNumber = li1.innerText.split(". ")[0]; // "1"
//     const firstName = li1.innerText.split(". ")[1]; // "Vasember"

//     const secondNumber = li2.innerText.split(". ")[0]; // "2"
//     const secondName = li2.innerText.split(". ")[1]; // "Thor"
    
//     li1.innerText = `${firstNumber}. ${secondName}`;
//     li2.innerText = `${secondNumber}. ${firstName}`;

//     li1.classList.add("swap");
//     li2.classList.add("swap");
// }

// // Delegálás
// // this: akihez az eseménykezelő tartozik (addEventListener) => <ul>
// // e.target: akivel az esemény történt! => <li>
// function handleClick(e) {
//     const li = e.target;
//     if (li.matches("ul li")) {
//         // console.log(li);
//         if (!first) {
//             first = li;
//             first.classList.add("selected");
//         } else {
//             swapMovies(first, li);
//             first = null;
//         }
//     }
// }
// ul.addEventListener("click", handleClick);
// // elem.matches(selector): igaz, ha az elem illeszkedik a szelektorra

// function afterAnimation(e) {
//     console.log(e.animationName);
//     const li = e.target;
//     li.classList.remove("swap", "selected");
// }
// ul.addEventListener("animationend", afterAnimation)