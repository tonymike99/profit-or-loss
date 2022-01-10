const btn = document.querySelector('#btn');

const logic = (e) => {
    const initialPrice = document.querySelector('#initialPriceId').value;
    const quantity = document.querySelector('#quantityId').value;
    const currentPrice = document.querySelector('#currentPriceId').value;
    const output = document.querySelector('#output');

    console.log(initialPrice, quantity, currentPrice);

    if (initialPrice === '' || quantity === '' || currentPrice === '')
        output.innerText = 'Please check the entered fields!';
    else {
        const initialValue = initialPrice * quantity;
        const currentValue = currentPrice * quantity;
        const profitOrLoss = Math.abs(currentValue - initialValue);
        const profitOrLossPercentage = (profitOrLoss / initialValue) * 100;
        // const loss = initialValue - currentValue;

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
};

btn.addEventListener('click', logic);
