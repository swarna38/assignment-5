
document.getElementById('donate-btn').addEventListener('click', function(){
    const inputFieldEl = getInputValueById('input-field');
    const amount = getInputInnerText('amount-tk');
    const totalDonationAmountEl = getInputInnerText('total-donation-amount');
    if(inputFieldEl > totalDonationAmountEl){
        alert("Invalid Donation Amount");        
        return;
    }
    if(isNaN(inputFieldEl) || inputFieldEl <= 0){
        alert("Invalid Donation Amount");
        return;
    }
     
    let totalAmount = inputFieldEl + amount;
    document.getElementById('amount-tk').innerText = totalAmount;
    let totalDonationAmount = totalDonationAmountEl - inputFieldEl;
    document.getElementById('total-donation-amount').innerText = totalDonationAmount;   
    const historyCaption = document.getElementById('history-caption').innerText;
    const historyContainer = getInputById('history-container');
    const div = document.createElement('div');
    div.className = "border border-gray-400 p-3 my-5";
    div.innerHTML = `
        <span class="text-xl font-bold">  ${inputFieldEl} </span>
        <span class="text-xl font-bold">  ${historyCaption}</span>
        <p class="text-textGray font-semibold pt-3">${new Date()}</p>
    
    `;
    historyContainer.appendChild(div);
})

