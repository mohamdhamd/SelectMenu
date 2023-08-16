let selectFiled = document.getElementById("selectFiled");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");
let options = document.getElementsByClassName("options");


// for (option of options){
//     option.onclick=()=>{
//         // selectText.innerHTML=this.textContent;
//         console.log(this)
//     }
// }
selectFiled.onclick = function () {
    // list.style.animation ="showList .3s linear";
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

let listArr = Array.from(options);
// console.log(listArr)
listArr.forEach(element => {
    element.onclick = function () {
        selectText.innerHTML = this.innerHTML;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
});