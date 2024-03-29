const btn = document.querySelector(".nav_burger");

const nav = document.querySelector(".nav_menu");

btn.onclick = function () {
    nav.classList.toggle("is_show");
    btn.classList.toggle("is_show")
}

//todo pojawianie się wyników

let package = 0;
let accounting = 0;
let rental = 0;

const total = document.getElementById("sumCalc");

const quantityBtn = document.getElementById("quantity");
const quantityOutput = document.getElementById("quantityCalc");
const quantityOutputLastSpan = quantityOutput.lastElementChild;
const quantityOutputMiddleSpan = quantityOutputLastSpan.previousElementSibling;
const monthsBtn = document.getElementById("months");
const monthsOutput = document.getElementById("monthsCalc");
const monthsOutputLastSpan = monthsOutput.lastElementChild;
const monthsOutputMiddleSpan = monthsOutputLastSpan.previousElementSibling;

quantityBtn.addEventListener("change", showQuantity);
monthsBtn.addEventListener("change", showMonths);

function showQuantity (){
    quantityOutput.classList.remove("d-none");
    quantityOutputMiddleSpan.innerText = `${quantityBtn.value}  * $1.5`;
    quantityOutputLastSpan.innerText = `$${quantityBtn.value * 1.5}`;
    total.lastElementChild.innerText = `$${(quantityBtn.value * 1.5) + (monthsBtn.value * 0.25) + package + accounting + rental}`;
}
function showMonths (){
    monthsOutput.classList.remove("d-none");
    monthsOutputMiddleSpan.innerText = `${monthsBtn.value}  * $0.25`;
    monthsOutputLastSpan.innerText = `$${monthsBtn.value * 0.25}`;
    total.lastElementChild.innerText = `$${(quantityBtn.value * 1.5) + (monthsBtn.value * 0.25) + package + accounting + rental}`;
}


//SELECT: DZIAŁANIE

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

//Działanie selectOutput po wybraniu pakietu
const selectOutput = document.getElementById("packageCalc");
const selectOutputCentralSpan = selectOutput.querySelector(".calculator_package-name")
const selectOutputLastSpan = selectOutputCentralSpan.nextElementSibling;
selectMenu.addEventListener("click", showPackage);
function showPackage () {
    selectOutput.classList.remove("d-none");
    if(btnSelect.firstChild.innerText === "Basic"){
        selectOutputCentralSpan.innerText = "BASIC";
        package = 10;
        selectOutputLastSpan.innerText = "$10";
        total.lastElementChild.innerText = `$${(quantityBtn.value * 1.5) + (monthsBtn.value * 0.25) + package + accounting + rental}`;
    }
    if(btnSelect.firstChild.innerText === "Professional"){
        selectOutputCentralSpan.innerText = "PROFESSIONAL";
        package = 20;
        selectOutputLastSpan.innerText = "$20";
        total.lastElementChild.innerText = `$${(quantityBtn.value * 1.5) + (monthsBtn.value * 0.25) + package + accounting + rental}`;
    }
    if(btnSelect.firstChild.innerText === "Premium"){
        selectOutputCentralSpan.innerText = "PREMIUM";
        package = 50;
        selectOutputLastSpan.innerText = "$50";
        total.lastElementChild.innerText = `$${(quantityBtn.value * 1.5) + (monthsBtn.value * 0.25) + package + accounting + rental}`;
    }
}

//TODO połączenie wyborów z wysuwanego menu z selectem

//TODO działanie checkbox's

const checkAccounting = document.getElementById("accounting");
// const checkAccountingParent = checkAccounting.parentElement;

const checkRental = document.getElementById("rental");
const checkAccountingOutput = document.getElementById("accountingCalc");
const checkRentalOutput = document.getElementById("rentaCalc");

checkAccounting.addEventListener("click", showAccountingOutput);

function showAccountingOutput () {
    checkAccountingOutput.classList.toggle("d-none");
    if(checkAccountingOutput.lastElementChild.innerText !== "$35") {
        checkAccountingOutput.lastElementChild.innerText = "$35";
        accounting = 35;
    }
    else {
        checkAccountingOutput.lastElementChild.innerText = "$0";
        accounting = 0;
    }
    total.lastElementChild.innerText = `$${(quantityBtn.value * 1.5) + (monthsBtn.value * 0.25) + package + accounting + rental}`;
}

checkRental.addEventListener("click", showRentalOutput);

function showRentalOutput () {
    checkRentalOutput.classList.toggle("d-none");
    if(checkRentalOutput.lastElementChild.innerText !== "$5") {
        checkRentalOutput.lastElementChild.innerText = "$5";
        rental = 5;
    }
    else {
        checkRentalOutput.lastElementChild.innerText = "$0";
        rental = 0;
    }
    total.lastElementChild.innerText = `$${(quantityBtn.value * 1.5) + (monthsBtn.value * 0.25) + package + accounting + rental}`;

}

//TODO kalkulator

console.log(quantityOutputLastSpan.innerText);
console.log(monthsOutputLastSpan.innerText);
console.log(selectOutputLastSpan.innerText);
console.log(checkRentalOutput.lastElementChild.innerText);
console.log(checkAccountingOutput.lastElementChild.innerText);



console.log(total);



