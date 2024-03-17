const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const switchUserButton = document.getElementById('switch-user-button');

let currentUser = 'You';

sendButton.addEventListener('click', sendMessage);
switchUserButton.addEventListener('click', switchUser);

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        appendMessage(currentUser, message);
        messageInput.value = '';
    }
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    const senderClass = sender === 'You' ? 'message-you' : 'message-recipient';
    messageDiv.classList.add('message', senderClass);
    const senderText = sender === 'You' ? 'You' : 'Recipient';
    messageDiv.innerHTML = `<span class="message-sender">${senderText}</span>: <span class="message-content">${message}</span>`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function switchUser() {
    if (confirm('本当にユーザーを切り替えますか？')) {
        window.location.href = 'kids_chat.html';
    } else {
        return;
    }
}
