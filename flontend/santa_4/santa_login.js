// ログインボタンの要素を取得
const loginButton = document.getElementById('santalogin-button');

// ログインボタンにクリックイベントリスナーを追加
loginButton.addEventListener('click', function () {
    // ログインボタンがクリックされたら、santa_chat1.0.html にリダイレクトする
    window.location.href = 'santa_chat1.0.html';
});

// フォーム送信を処理するJavaScript
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止

    // ここにログインロジックを追加する。例えば、サーバーにリクエストを送信するなど。
    // メールアドレスとパスワードをコンソールにログとして出力する。
    // var email = document.getElementById('email').value;
    var santaPassword = document.getElementById('santaPassword').value;
    // console.log('メールアドレス:', email);
    console.log('サンタのパスワード:', santaPassword);
});
