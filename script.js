function compute() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let year = new Date().getFullYear()+parseInt(years);
    
    //Interest Calculation
    if(principal <= 0) {
        alert('Enter a positive number');
        result.innerHTML = null;
        document.getElementById("principal").focus();
    } else {
        let interestAmount = (principal * rate * years) / 100;
        let result = document.getElementById("result")
        result.innerHTML=`If you deposit <b style="background-color: yellow">${principal}</b><br>
        at an interest rate of <b style="background-color: yellow">${rate}%</b><br>
        You will receive an amount of <b style="background-color: yellow">${interestAmount}</b><br>
        in the year <b style="background-color: yellow">${year}</b><br>`;
    }
}

function updateRate() {
    let rateVal = document.getElementById("rate").value + '%';
    document.getElementById("rate_val").innerText = rateVal;
    console.log(rateVal)
}
