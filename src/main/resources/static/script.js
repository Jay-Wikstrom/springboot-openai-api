document.getElementById('send-button').addEventListener('click', function() {
    const inputBox = document.getElementById('input-box');
    const chatBox = document.getElementById('chat-box');
    const prompt = inputBox.value;
    inputBox.value = '';

    chatBox.innerHTML += '<b>You:</b> ' + prompt + '<br>';

    fetch('/chat?prompt=' + encodeURIComponent(prompt))
        .then(response => response.text())
        .then(message => {
            chatBox.innerHTML += '<b>ChatGPT:</b> ' + message + '<br>';
        });
});
