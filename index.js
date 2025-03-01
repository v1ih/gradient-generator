let colorOne = document.getElementById('color1');
let colorTwo = document.getElementById('color2');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');

function setDirection(value, _this) {
    let directions = document.querySelectorAll('.botoes button')
    for(let i of directions) {
        i.classList.remove('active')
    }
    _this.classList.add('active')
    currentDirection = value;
}

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`
    document.getElementsByTagName('body')[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');
    showAlert('Gradiente copiado!');
}

function showAlert(message) {
    let alertBox = document.getElementById('customAlert');
    let alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message; // Define a mensagem do alerta
    alertBox.style.display = 'block'; // Exibe o alerta
}

function closeAlert() {
    let alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none'; // Fecha o alerta
}

generateCode();

