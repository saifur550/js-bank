//handle desposit buttin event
document.getElementById('deposit-btn').addEventListener('click', function(){

    //get the amount deposted
    // console.log('deposit btn');
    const depositInput = document.getElementById('deposit-input');
    const NewDepositAmount = depositInput.value;
    // console.log(depositAmount);


    const depositTotal  = document.getElementById('deposit-total');
    const preDepAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(preDepAmount) + NewDepositAmount
    depositTotal.innerText = newDepositTotal ;

    //clear the deposit input
    depositInput.value = " ";
})

