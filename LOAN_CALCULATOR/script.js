document.getElementById('calculatebtn').addEventListener('click', calculateloan);

function calculateloan() {
    const loanamount = parseFloat(document.getElementById("loanamountinput").value);
    const interestrate = parseFloat(document.getElementById("interestrateinput").value);
    const loanterm = parseFloat(document.getElementById("loaninput").value);

    if (isNaN(loanamount) || isNaN(interestrate) || isNaN(loanterm)) {
        alert("Please enter a valid number for all the fields");
        return;
    }

    const monthlyinterest = interestrate / 100 / 12;
    const totalpayments = loanterm;
    const monthlypayment = (loanamount * monthlyinterest) / (1 - Math.pow(1 + monthlyinterest, -totalpayments));
    const totalinterest = (monthlypayment * totalpayments) - loanamount;

    displayResult(monthlypayment, totalinterest);
}

function displayResult(monthlypayment, totalinterest) {
    const resultdiv = document.getElementById('result');

    resultdiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlypayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest: ${totalinterest.toFixed(2)}</strong></p>
    `;
}
