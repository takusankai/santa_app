// フォーム送信を処理するJavaScript
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止
    
    // サインアップ情報を取得してコンソールにログ出力
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var santasPassword = document.getElementById('santasPassword').value;
    var kidsName = document.getElementById('kidsName').value;
    console.log('メールアドレス:', email);
    console.log('パスワード:', password);
    console.log('サンタのパスワード:', santasPassword);
    console.log('お子さんの名前:', kidsName);
    // サインアップロジックをここに追加。例えば、サーバーにリクエストを送信するなど。
});
