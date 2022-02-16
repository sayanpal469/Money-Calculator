function getExpence() {
        const incomeInput = document.getElementById('income').value;

        const foodInput = document.getElementById('food').value;
        const rentInput = document.getElementById('rent').value;
        const clothsInput = document.getElementById('cloths').value;

       const allInput = incomeInput + foodInput + rentInput + clothsInput;

       const totalExpenceAmount = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothsInput);


        if(isNaN(allInput)) {
            console.log('hello');
            document.getElementById('toast1').style.display = 'block';
        } else if (allInput < 0) {
            document.getElementById('toast2').style.display = 'block';
        } else {
            const totalExpence = document.getElementById('total-expence');
            totalExpence.innerText = totalExpenceAmount;

        }

        if (totalExpenceAmount > incomeInput) {
            document.getElementById('toast3').style.display = 'block';
        } else {
             const balance = document.getElementById('balance');
             balance.innerText = parseFloat(incomeInput) - totalExpenceAmount;

            
        }

        document.getElementById('income').value = '';
        document.getElementById('food').value = '';
        document.getElementById('rent').value = '';
        document.getElementById('cloths').value = '';
        //console.log(balance);

    }
