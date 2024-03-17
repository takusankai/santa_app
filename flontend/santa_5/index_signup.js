// script.js

// ログインボタンの要素を取得
const loginButton = document.getElementById('signup-button');

// ログインボタンにクリックイベントリスナーを追加
loginButton.addEventListener('click', function () {
    // ログインボタンがクリックされたら、kids_chat1.0.html にリダイレクトする
    window.location.href = 'kids_chat.html';
});

// フォーム送信を処理するJavaScript
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止

    // ここにサインアップロジックを追加する。例えば、サーバーにリクエストを送信するなど。
    // メールアドレス、パスワード、サンタのパスワードをコンソールにログとして出力する。
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var santasPassword = document.getElementById('santasPassword').value;
    console.log('メールアドレス:', email);
    console.log('パスワード:', password);
    console.log('サンタのパスワード:', santasPassword);
});
