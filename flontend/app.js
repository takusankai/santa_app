document.addEventListener("DOMContentLoaded", function() {
    const messageElement = document.getElementById('message');
    
    // 初期メッセージを設定
    setMessage("Hello, World!");

    // メッセージを変更する関数
    function setMessage(message) {
        messageElement.textContent = message;
    }

    setTimeout(function() {
        setMessage("Hello, World! Changed by app.js");
    }, 3000); // 3秒後にメッセージを変更
});