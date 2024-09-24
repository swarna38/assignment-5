
document.getElementById('donate-btn-two').addEventListener('click', function(){
    const inputFieldElTwo = getInputValueById('input-field-2');
    const amountTwo = getInputInnerText('amount-tk-2');
    const totalDonationAmountEl = getInputInnerText('total-donation-amount');
    if(inputFieldElTwo > totalDonationAmountEl){
        alert("Invalid Donation Amount");
        return;
    }
    if(isNaN(inputFieldElTwo) || inputFieldElTwo <= 0){
        alert("Invalid Donation Amount");
        return;
    }
     
    let totalAmountTwo = inputFieldElTwo + amountTwo;
    document.getElementById('amount-tk-2').innerText = totalAmountTwo;
    let totalDonationAmountTwo = totalDonationAmountEl - inputFieldElTwo;
    document.getElementById('total-donation-amount').innerText = totalDonationAmountTwo; 
    const historyCaptionTwo = document.getElementById('history-caption-2').innerText;   
    const historyContainer = getInputById('history-container');
    const div = document.createElement('div');
    div.className = "border border-gray-400 p-3 my-5";
    div.innerHTML = `
        <span class="text-xl font-bold">  ${inputFieldElTwo} </span>
        <span class="text-xl font-bold">  ${historyCaptionTwo}</span>
        <p class="text-textGray font-semibold pt-3">${new Date()}</p>
    
    `;
    historyContainer.appendChild(div);
})