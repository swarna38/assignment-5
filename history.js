const historyBtn = getInputById('history-btn');
const donationBtn = getInputById('donation-btn');
const cardContainer = getInputById('card-container');
const inputFieldEl = getInputValueById('input-field');
console.log(inputFieldEl);
// const inputFieldElTwo = getInputValueById('input-field-2');
// const inputFieldElThree = getInputValueById('input-field-3');
document.getElementById('history-btn').addEventListener('click', function(){
    historyBtn.classList.add('bg-primary');
    donationBtn.classList.remove('bg-primary');
    cardContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');   
})


document.getElementById('donation-btn').addEventListener('click', function(){
    historyBtn.classList.remove('bg-primary');
    donationBtn.classList.add('bg-primary');
    cardContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden');

})