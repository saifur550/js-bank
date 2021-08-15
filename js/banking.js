//handle deposit butt0n event
    document.getElementById('deposit-btn').addEventListener('click', function(){
    //get the amount deposit
    // console.log('deposit btn');
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const NewDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);


    const depositTotal  = document.getElementById('deposit-total');
    //update deposit total


    const preDepAmountText = depositTotal.innerText;
    const preDepositAmount = parseFloat(preDepAmountText);
    const newDepositTotal =preDepositAmount + NewDepositAmount;
    depositTotal.innerText = newDepositTotal;


    //update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalTex = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalTex);
    const newBalanceTotal = preBalanceTotal +  NewDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input
    depositInput.value = " ";
});



//handle withdraw butt0n event
    document.getElementById('widthdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('widthdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);


    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const preWithdrawText = withdrawTotal.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawText);

    const newWithdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const preBalanceText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(preBalanceText);
    const newBalanceTotal = preBalanceTotal-newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

     //clear the deposit input
     withdrawInput.value = " ";
})