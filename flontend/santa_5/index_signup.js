import usersAccess from "../api_accesser/users_access.js";

// ログインボタンの要素を取得
const loginButton = document.getElementById('signup-button');

// ログインボタンにクリックイベントリスナーを追加
loginButton.addEventListener('click', function () {
    // ログインボタンがクリックされたら、kids_chat1.0.html にリダイレクトする
    //window.location.href = './kids_chat1.0.html';
});

// フォーム送信を処理するJavaScript
document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止

    // ここにサインアップロジックを追加する。例えば、サーバーにリクエストを送信するなど。
    // メールアドレス、パスワード、サンタのパスワードをコンソールにログとして出力する。
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var santasPassword = document.getElementById('santasPassword').value;
    console.log('メールアドレス:', email);
    console.log('パスワード:', password);
    console.log('サンタのパスワード:', santasPassword);

    try {
        // サーバーサイドにサインアップ処理を飛ばす
        const signupData = await usersAccess.signup(email, "sample_name", password, santasPassword)

        if (signupData.status === "success" ) {

            console.log(signupData)
            // logが見たいので2秒後に実行しています
            // 完成版ではコメントアウトで止めてください
            setTimeout(function() {
                window.location.href = './kids_chat.html';
            }, 2000);
        } else {
            console.log(signupData.massage)
        }
    } catch (e) {
        // HTTP通信エラー
        // ここで、例えばサーバーが落ちている時などの対応をする
        console.log(e)
    }
});
