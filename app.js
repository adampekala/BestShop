const btn = document.querySelector(".nav_burger");

const nav = document.querySelector(".nav_menu");

btn.onclick = function () {
    nav.classList.toggle("is_show");
}

//todo

const btnQuantity = document.getElementById("quantity");
if (btnQuantity.value < 0) {
    console.log(btnQuantity.value);;
}

//todo klikanie w selekta

const btnSelect = document.querySelector(".calculator_form_select-Div");
const selectArrow = btnSelect.querySelector("#select-DivArrow");
const selectMenu = document.querySelector(".calculator_form_select-menu");
const optBasic = selectMenu.querySelector("#selectMenuBasic");
const optProfessional = selectMenu.querySelector("#selectMenuProfessional");
const optPremium = selectMenu.querySelector("#selectMenuPremium");

btnSelect.addEventListener("click", arrowRotation);


//rotacja strzałki oraz wysuwanie opcji wyboru

function arrowRotation() {
    selectArrow.classList.toggle("arrowDown");
    selectMenu.classList.toggle("d-none");
}

//wybór opcji
optBasic.addEventListener("click", basicChoice);
optProfessional.addEventListener("click", profChoice);
optPremium.addEventListener("click", premiumChoice);

function basicChoice (){
    console.log(btnSelect.target);
    btnSelect.firstChild.innerText = "Basic";
}
function profChoice (){
    console.log(btnSelect.target);
    btnSelect.firstChild.innerText = "Professional";
}
function premiumChoice (){
    console.log(btnSelect.target);
    btnSelect.firstChild.innerText = "Premium";
}





