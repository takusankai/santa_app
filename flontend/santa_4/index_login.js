// script.js

// ログインボタンの要素を取得
const loginButton = document.getElementById('login-button');

// ログインボタンにクリックイベントリスナーを追加
loginButton.addEventListener('click', function () {
    // ログインボタンがクリックされたら、kids_chat1.0.html にリダイレクトする
    window.location.href = 'kids_chat1.0.html';
});

// フォーム送信を処理するJavaScript
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止

    // ここにログインロジックを追加する。例えば、サーバーにリクエストを送信するなど。
    // メールアドレスとパスワードをコンソールにログとして出力する。
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('メールアドレス:', email);
    console.log('パスワード:', password);
});
