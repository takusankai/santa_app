// ボタンの要素を取得
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const switchUserButton = document.getElementById('switch-user-button');
const logoutButton = document.getElementById('logout-button');


let currentUser = 'You';

// 送信ボタンのクリックイベントリスナー
sendButton.addEventListener('click', sendMessage);

// ユーザー切り替えボタンのクリックイベントリスナー
switchUserButton.addEventListener('click', switchUser);

// メッセージを送信する関数
function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        appendMessage(currentUser, message);
        messageInput.value = '';
    }
}

// メッセージを表示エリアに追加する関数
function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    const senderClass = sender === 'You' ? 'message-you' : 'message-recipient';
    messageDiv.classList.add('message', senderClass);
    const senderText = sender === 'You' ? 'You' : 'Recipient';
    messageDiv.innerHTML = `<span class="message-sender">${senderText}</span>: <span class="message-content">${message}</span>`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
// ユーザーを切り替える関数
function switchUser() {
    window.location.href = 'santa_login.html'; // ログインページにリダイレクト
}


// ログインボタンにクリックイベントリスナーを追加
logoutButton.addEventListener('click', function () {
    // ログインボタンがクリックされたら、index_login.html にリダイレクトする
    window.location.href = 'index_login.html';
});
