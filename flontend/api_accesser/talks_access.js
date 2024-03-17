const ServerBaseURL = "https://santa-app.fly.dev"

// ユーザーのトーク履歴を取得する処理
async function getTalks() {
    const response = await fetch(`${ServerBaseURL}/talks`, {
        method: "GET",
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

// ユーザーのトーク内容を登録する処理
async function createTalk(content, is_santa) {
    const response = await fetch(`${ServerBaseURL}/talks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "content": content, "is_santa": is_santa })
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

// ユーザーのトーク内容を更新する処理
async function updateTalk(talk_id, content, is_santa) {
    const response = await fetch(`${ServerBaseURL}/talks`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "talk_id": talk_id, "content": content, "is_santa": is_santa})
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

// ユーザーのトーク内容を削除する処理
async function deleteTalk(talk_id) {
    const response = await fetch(`${ServerBaseURL}/talks`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "talk_id": talk_id })
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

// デバッグ用にログイン関係なく）全トーク情報取得処理
async function getAllTalksInfo() {
    const response = await fetch(`${ServerBaseURL}/talks`, {
        method: "GET",
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

// 全ての関数をまとめてexport
const talksAccess = {
    getTalks,
    createTalk,
    updateTalk,
    deleteTalk,
    getAllTalksInfo
}
export default talksAccess

/*
利用イメージ： async await を使うと上手く動きます
import talksAccess from './api_accesser/talks_access'

async function func() {
    try {
        const a = talksAccess.signup()
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
