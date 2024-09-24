
document.getElementById('donate-btn-3').addEventListener('click', function(){
    const inputFieldElThree = getInputValueById('input-field-3');
    const amountThree = getInputInnerText('amount-tk-3');
    const totalDonationAmountEl = getInputInnerText('total-donation-amount');
    if(inputFieldElThree > totalDonationAmountEl){
        alert("Invalid Donation Amount");
        return;
    }
    if(isNaN(inputFieldElThree) || inputFieldElThree <= 0){
        alert("Invalid Donation Amount");
        return;
    }    
    let totalAmountThree = inputFieldElThree + amountThree;
    document.getElementById('amount-tk-3').innerText = totalAmountThree;
    let totalDonationAmountThree = totalDonationAmountEl - inputFieldElThree;
    document.getElementById('total-donation-amount').innerText = totalDonationAmountThree;
    const historyCaptionThree = document.getElementById('history-caption-3').innerText;   
    const historyContainer = getInputById('history-container');
    const div = document.createElement('div');
    div.className = "border border-gray-400 p-3 my-5";
    div.innerHTML = `
        <span class="text-xl font-bold">  ${inputFieldElThree} </span>
        <span class="text-xl font-bold">  ${historyCaptionThree}</span>
        <p class="text-textGray font-semibold pt-3">${new Date()}</p>
    
    `;
    historyContainer.appendChild(div);   
})