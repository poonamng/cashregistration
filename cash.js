const billAmt = document.querySelector("#bill-amnt");
const cashAmt = document.querySelector("#cash-amnt");
const nextBtn = document.querySelector("#nextBtn");
const checkBtn = document.querySelector("#checkBtn");
const hiddenCont = document.querySelector(".hidden-cont");
const errorMsgTxt = document.querySelector("#error-msg")
const cashTable = document.querySelector("#cash-table")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener('click', () => {
    HideError();
    if (Number(billAmt.value) > 0) {

        nextBtn.style.display = "none";
        hiddenCont.style.display = "flex";
    } else {
        ShowError("Enter valid bill amount");
    }
});

checkBtn.addEventListener('click', () => {
    HideError();
    if (Number(cashAmt.value) > 0) {
        
        if (Number(cashAmt.value) >= Number(billAmt.value)) {
            const amountToBeReturned = Number(cashAmt.value) - Number(billAmt.value);
            CalculateReturnMoney(amountToBeReturned);
            cashTable.style.display = "flex";
        } else {
            ShowError("no here")
            cashTable.style.display = "none";
        }

    } else {
        ShowError("enter bill amount");
        cashTable.style.display = "none";
    }

});

function CalculateReturnMoney(amountToBeReturned) {
    for (let i = 0; i < availNotes.length; i++) {
        const numberOfNote = Math.trunc(amountToBeReturned / availNotes[i]);
        amountToBeReturned = amountToBeReturned - numberOfNote * availNotes[i];
        noOfNotes[i].innerText = numberOfNote;

    }

}

function ShowError(msg) {
    errorMsgTxt.style.display = "block"
    errorMsgTxt.innerText = msg
}

function HideError() {
    errorMsgTxt.style.display = "none"
}    

























