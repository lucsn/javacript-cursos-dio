let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
    count++;

    CURRENT_NUMBER.innerHTML = count;

    if (count >= 0) {
        CURRENT_NUMBER.style.color = 'black';
    }

    if (count >= 10) {
        document.getElementById("adicionar").disabled = true;
        document.getElementById("subtrair").disabled = false;
    } 
}

function decrement() {
    count--;

    CURRENT_NUMBER.innerHTML = count;

    if (count < 0) {
        CURRENT_NUMBER.style.color = 'red';
    }


    if (count <= -10) {
        document.getElementById("subtrair").disabled = true;
        document.getElementById("adicionar").disabled = false;
    }
}
