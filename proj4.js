function calculate() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let basefare = 50;
    let perKmrate = 15;

    let distance = Math.abs(num1 - num2);
    let totalfare = basefare + (perKmrate * distance);

    document.getElementById('required').innerHTML = totalfare;
}

function discount() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    let basefare = 50;
    let perKmrate = 15;

    let distance = Math.abs(num1 - num2);
    let totalfare =(basefare + (perKmrate * distance)) * 0.8;

    document.getElementById('required').innerHTML = totalfare;
}