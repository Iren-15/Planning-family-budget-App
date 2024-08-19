const btnFirst = document.querySelector(".btn-first");
const btnSecond = document.querySelector(".btn-second");
const btnThird = document.querySelector(".btn-third");

document.querySelector(".input-income").focus();
btnFirst.addEventListener('click', showResultFirst);
btnSecond.addEventListener('click', showResultSecond);
btnThird.addEventListener('click', showResultThird);

document.querySelector(".input-income").addEventListener("keyup", newIncome);
function newIncome() {
    document.querySelector(".method-first").style.display = "none";
    document.querySelector(".method-second").style.display = "none";
    document.querySelector(".method-third").style.display = "none";
    document.querySelector(".btn-first").classList.remove("colorSelect");
    document.querySelector(".btn-second").classList.remove("colorSelect");
    document.querySelector(".btn-third").classList.remove("colorSelect");
}

function notNull() {
    document.querySelector(".input-income").focus();
    Swal.fire({
        icon: 'error',
        text: 'Введіть числове значення - суму ваших доходів на місяць в гривні',
      })
}

function showResultFirst() {
    let inputIncome = document.querySelector(".input-income").value;
    if (isNaN(inputIncome) || inputIncome === "") {
        notNull();
    }
    else if (document.querySelector(".method-first").style.display === "block") {
        document.querySelector(".method-first").style.display = "none";
        document.querySelector(".btn-first").classList.remove("colorSelect");
    }
    else {   
    document.querySelector(".method-first").style.display = "block";
    document.querySelector(".method-second").style.display = "none";
    document.querySelector(".method-third").style.display = "none";
    document.querySelector(".btn-first").classList.add("colorSelect");
    document.querySelector(".btn-second").classList.remove("colorSelect");
    document.querySelector(".btn-third").classList.remove("colorSelect");
    let first60 = document.querySelector(".select-first-60").value;
    document.querySelector(".first-60").textContent = (inputIncome * first60).toFixed(2);
    document.querySelector(".first-10-1").textContent = (inputIncome * 0.1).toFixed(2);
    document.querySelector(".first-10-2").textContent = (inputIncome * 0.1).toFixed(2);
    document.querySelector(".first-10-3").textContent = (inputIncome * 0.1).toFixed(2);
    document.querySelector(".first-10-4").textContent = (inputIncome * 0.1).toFixed(2);
    }
}

function showResultSecond() {
    let inputIncome = document.querySelector(".input-income").value;
    if (isNaN(inputIncome) || inputIncome === "") {
        notNull();
    }
    else if (document.querySelector(".method-second").style.display === "block") {
        document.querySelector(".method-second").style.display = "none";
        document.querySelector(".btn-second").classList.remove("colorSelect");
    }
    else {
    document.querySelector(".method-first").style.display = "none";
    document.querySelector(".method-second").style.display = "block";
    document.querySelector(".method-third").style.display = "none";
    document.querySelector(".btn-first").classList.remove("colorSelect");
    document.querySelector(".btn-second").classList.add("colorSelect");
    document.querySelector(".btn-third").classList.remove("colorSelect");
    let second40 = inputIncome * 0.4;
    let second20 = inputIncome * 0.2;
    let secondAt4 = (inputIncome - second40 - second20) / 4;
    document.querySelector(".second-40").textContent = second40.toFixed(2);
    document.querySelector(".second-20").textContent = second20.toFixed(2);
    document.querySelector(".second-at4-1").textContent = secondAt4.toFixed(2);
    document.querySelector(".second-at4-2").textContent = secondAt4.toFixed(2);
    document.querySelector(".second-at4-3").textContent = secondAt4.toFixed(2);
    document.querySelector(".second-at4-4").textContent = secondAt4.toFixed(2);
    }
} 

function showResultThird() {
    let inputIncome = document.querySelector(".input-income").value;
    if (isNaN(inputIncome) || inputIncome === "") {
        notNull();
    }
    else if (document.querySelector(".method-third").style.display === "block") {
        document.querySelector(".method-third").style.display = "none";
        document.querySelector(".btn-third").classList.remove("colorSelect");
    }
    else {
    document.querySelector(".method-first").style.display = "none";
    document.querySelector(".method-second").style.display = "none";
    document.querySelector(".method-third").style.display = "block";
    document.querySelector(".btn-first").classList.remove("colorSelect");
    document.querySelector(".btn-second").classList.remove("colorSelect");
    document.querySelector(".btn-third").classList.add("colorSelect");
    let third50 = document.querySelector(".select-third-50").value;
    document.querySelector(".third-50").textContent = (inputIncome * third50).toFixed(2);
    let third30 = document.querySelector(".select-third-30").value;
    document.querySelector(".third-30").textContent = (inputIncome * third30).toFixed(2);
    document.querySelector(".third-20").textContent = (inputIncome * 0.2).toFixed(2);
    }
}