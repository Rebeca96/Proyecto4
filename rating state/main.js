let numberContainer = document.querySelector('.botones');
let rateNumber = document.querySelector('.result--number');
let submitBtn = document.querySelector('.submit');
let ratingState  = document.querySelector('#carta');
let thankyouState = document.querySelector('.thank-you');


numberContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected >0 || numberSelected <= 5){
        submitBtn.addEventListener('click', ()=>{
        ratingState.style.display = 'none';
        thankyouState.style.display = 'flex';
    })
    }
});



