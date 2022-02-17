function getInput(id) {
    const inputField = document.getElementById(id);
    const inputNumber = parseFloat(inputField.value);
    return inputNumber;
}

function getExpence() {
    const incomeInput = getInput('income');

    const foodInput = getInput('food');
    const rentInput = getInput('rent');
    const clothsInput= getInput('cloths');

    const totalExpence = foodInput + rentInput + clothsInput;

    const allInput = incomeInput + totalExpence;

    if(allInput > 0) {
        const totalExpenceAmount = document.getElementById('total-expence');
        totalExpenceAmount.innerText = totalExpence;
    }
     else {
        //document.getElementById('toast1').style.display = 'none';
        document.getElementById('toast2').style.display = 'block';

    }

    // set balance
    const balance = document.getElementById('balance');
    const newBalance = incomeInput - totalExpence;
    
    if (totalExpence > incomeInput) {
        document.getElementById('toast3').style.display = 'block';
        document.getElementById('toast2').style.display = 'none';
    } else {
        balance.innerText = newBalance;
        document.getElementById('toast3').style.display = 'none';
    }

    // clear input
    document.getElementById('food').value = '';
    document.getElementById('rent').value = '';
    document.getElementById('cloths').value = '';
}


function getSavingAmount() {
    const incomeInput = getInput('income');
    const savingInput = getInput('save-input');

    const savingField = document.getElementById('saving-amount')
    const savingAmount = (incomeInput / 100) * savingInput;

    const balanceText = document.getElementById('balance').innerText;
    const balanceAmount = parseFloat(balanceText);
    
    if (savingAmount < incomeInput && savingAmount > 0)  {
        savingField.innerText = savingAmount;
        const remainBalance = balanceAmount - savingAmount 
        document.getElementById('remaining-amount').innerText = remainBalance;
    } else if (isNaN(savingAmount)) {
        document.getElementById('toast2').style.display = 'block'
        document.getElementById('toast3').style.display = 'none';
    } else {
        document.getElementById('toast4').style.display = 'block'
    }

}