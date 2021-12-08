let btn = document.querySelector('#btn');

function logic(e) {
    let initialPrice = document.querySelector('#initialPriceId').value;
    let quantity = document.querySelector('#quantityId').value;
    let currentPrice = document.querySelector('#currentPriceId').value;
    let output = document.querySelector('#output');

    console.log(initialPrice, quantity, currentPrice);

    if (initialPrice === '' || quantity === '' || currentPrice === '')
        output.innerText = 'Please check the entered fields!';
    else {
        let initialValue = initialPrice * quantity;
        let currentValue = currentPrice * quantity;
        let profitOrLoss = Math.abs(currentValue - initialValue);
        let profitOrLossPercentage = (profitOrLoss / initialValue) * 100;
        // let loss = initialValue - currentValue;

        if (initialValue === currentValue)
            output.innerText = 'No pain, no gain; AND no gain, no pain!';
        else if (initialValue > currentValue)
            output.innerText =
                'Loss = ' +
                profitOrLoss +
                ', ' +
                'Loss Percentage = ' +
                profitOrLossPercentage +
                '%';
        else
            output.innerText =
                'Profit = ' +
                profitOrLoss +
                ', ' +
                'Profit Percentage = ' +
                profitOrLossPercentage +
                '%';
    }
}

btn.addEventListener('click', logic);
