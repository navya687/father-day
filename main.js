function showMessage() {
    document.getElementById('message-input').style.display = 'block';
}

function displayMessage() {
    const message = document.getElementById('message').value;
    document.getElementById('display-message').innerText = message;
    document.getElementById('message-input').style.display = 'none';
}
