// フォーム送信を処理するJavaScript
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止
    
    // ログイン情報を取得してコンソールにログ出力
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password = document.getElementById('password').value;
    console.log('メールアドレス:', email);
    console.log('パスワード:', password);
    // ログインロジックをここに追加。例えば、サーバーにリクエストを送信するなど。
});
