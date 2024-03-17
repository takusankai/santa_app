import usersAccess from "../api_accesser/users_access.js";

// ログインボタンの要素を取得
const loginButton = document.getElementById('santalogin-button');

// ログインボタンにクリックイベントリスナーを追加
loginButton.addEventListener('click', function () {
    // ログインボタンがクリックされたら、santa_chat1.0.html にリダイレクトする
    // window.location.href = 'santa_chat1.0.html';
});

// フォーム送信を処理するJavaScript
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止

    // ここにログインロジックを追加する。例えば、サーバーにリクエストを送信するなど。
    // メールアドレスとパスワードをコンソールにログとして出力する。
    // var email = document.getElementById('email').value;
    var santaPassword = document.getElementById('santaPassword').value;
    // console.log('メールアドレス:', email);
    console.log('サンタのパスワード:', santaPassword);

    try {
        const santaLoginData = usersAccess.signup()
        if (santaLoginData.status === "success" ) {
            window.location.href = 'santa_chat1.0.html';
        } else {
            console.log(santaLoginData.massage)
            setTimeout(function() {
                window.location.href = './kids_chat1.0.html';
            }, 2000);
        }
    }
    catch (e) {
        console.log(e)
        setTimeout(function() {
            window.location.href = './kids_chat1.0.html';
        }, 2000);
    }
    

    
});
