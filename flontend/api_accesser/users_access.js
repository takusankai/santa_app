const ServerBaseURL = "https://santa-app.fly.dev"

// サインアップ処理
async function signup(email, name, password, santa_password) {
    const response = await fetch(`${ServerBaseURL}/signup`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email": email, "user_name": name, "password": password, "santa_password": santa_password })
    })
    // 通信失敗のエラー時に、HTTPステータスコードを投げる
    if (!response.ok) {
        throw new Error("HTTP access failed: " + response.status);
    }
    // 返答からjsonデータを取得して返す
    const data = await response.json()
    console.log("signup data: ", data)
    return data
}

// ログイン処理
async function login(email, password) {
    const response = await fetch(`${ServerBaseURL}/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email": email, "password": password })
    })
    // 通信失敗のエラー時に、HTTPステータスコードを投げる
    if (!response.ok) {
        throw new Error("HTTP access failed: " + response.status);
    }
    // 返答からjsonデータを取得して返す
    const data = await response.json()
    console.log("login data: ", data)
    return data
}

// ログアウト処理
async function logout() {
    const response = await fetch(`${ServerBaseURL}/logout`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email": email, "password": password })
    })
    // 通信失敗のエラー時に、HTTPステータスコードを投げる
    if (!response.ok) {
        throw new Error("HTTP access failed: " + response.status);
    }
    // 返答からjsonデータを取得して返す
    const data = await response.json()
    console.log("logout data: ", data)
    return data
}

// ユーザー情報取得処理
async function getUserInfo() {
    const response = await fetch(`${ServerBaseURL}/user`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        }
    })
    // 通信失敗のエラー時に、HTTPステータスコードを投げる
    if (!response.ok) {
        throw new Error("HTTP access failed: " + response.status);
    }
    // 返答からjsonデータを取得して返す
    const data = await response.json()
    console.log("getUserInfo data: ", data)
    return data
}

// （デバッグ用にログイン関係なく）全ユーザー情報取得処理
async function getAllUsersInfo() {
    const response = await fetch(`${ServerBaseURL}/users`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        }
    })
    // 通信失敗のエラー時に、HTTPステータスコードを投げる
    if (!response.ok) {
        throw new Error("HTTP access failed: " + response.status);
    }
    // 返答からjsonデータを取得して返す
    const data = await response.json()
    console.log("getAllUsersInfo data: ", data)
    return data
}

// サンタとしてのログイン処理
async function santaLogin(santa_password) {
    const response = await fetch(`${ServerBaseURL}/santa_login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "santa_password": santa_password })
    })
    // 通信失敗のエラー時に、HTTPステータスコードを投げる
    if (!response.ok) {
        throw new Error("HTTP access failed: " + response.status);
    }
    // 返答からjsonデータを取得して返す
    const data = await response.json()
    console.log("santaLogin data: ", data)
    return data
}

// 全ての関数をまとめてexport
const usersAccess = {
    signup,
    login,
    logout,
    getUserInfo,
    getAllUsersInfo,
    santaLogin
}
export default usersAccess

/*
利用イメージ： async await を使うと上手く動きます
import usersAccess from './api_accesser/users_access'

async function func() {
    try {
        const a = usersAccess.signup()
        if (a.status === success) {
            console.log(a)
        else {
            // ここで、例えば間違ったpasswordを打った時などの対応をする
        }
    }
    catch (e) {
        // HTTP通信エラー
        // ここで、例えばサーバーが落ちている時などの対応をする
        console.log(e)
    }
}
*/
