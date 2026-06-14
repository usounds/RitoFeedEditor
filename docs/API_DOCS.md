Title: API仕様書

Source: https://fg.shigepon.net/API_SPEC.html

---

- 
          [概要](https://fg.shigepon.net/API_SPEC.html#%E6%A6%82%E8%A6%81)

            [共通仕様・前提条件](https://fg.shigepon.net/API_SPEC.html#%E5%85%B1%E9%80%9A%E4%BB%95%E6%A7%98%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)


- [共通仕様・前提条件](https://fg.shigepon.net/API_SPEC.html#%E5%85%B1%E9%80%9A%E4%BB%95%E6%A7%98%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)
- 
          [1. OAuth 認証 API (/oauth/*)](https://fg.shigepon.net/API_SPEC.html#oauth-%E8%AA%8D%E8%A8%BC-api-oauth)

            [1.1. ログイン（OAuth開始）](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3oauth%E9%96%8B%E5%A7%8B)
            [1.2. ログアウト](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A2%E3%82%A6%E3%83%88)


- [1.1. ログイン（OAuth開始）](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3oauth%E9%96%8B%E5%A7%8B)
- [1.2. ログアウト](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A2%E3%82%A6%E3%83%88)
- 
          [2. カスタムフィード管理 API (/fg/*)](https://fg.shigepon.net/API_SPEC.html#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E7%AE%A1%E7%90%86-api-fg)


              [2.1. 登録済みフィード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E7%99%BB%E9%8C%B2%E6%B8%88%E3%81%BF%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)

            [2.2. フィードの登録・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E7%99%BB%E9%8C%B2%E6%9B%B4%E6%96%B0)
            [2.3. フィードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)


- 
              [2.1. 登録済みフィード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E7%99%BB%E9%8C%B2%E6%B8%88%E3%81%BF%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)

- [2.2. フィードの登録・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E7%99%BB%E9%8C%B2%E6%9B%B4%E6%96%B0)
- [2.3. フィードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)
- 
          [3. AT Protocol プロキシ API (/api/*)](https://fg.shigepon.net/API_SPEC.html#at-protocol-%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7-api-api)


              [3.1. セッション情報の取得](https://fg.shigepon.net/API_SPEC.html#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E6%83%85%E5%A0%B1%E3%81%AE%E5%8F%96%E5%BE%97)


              [3.2. Blob (アバター画像など) のアップロード](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)


              [3.3. Blob (アバター画像など) の取得](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E5%8F%96%E5%BE%97)

            [3.4. レコードの作成・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E4%BD%9C%E6%88%90%E6%9B%B4%E6%96%B0)
            [3.5. レコードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)
            [3.6. レコード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)


- 
              [3.1. セッション情報の取得](https://fg.shigepon.net/API_SPEC.html#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E6%83%85%E5%A0%B1%E3%81%AE%E5%8F%96%E5%BE%97)

- 
              [3.2. Blob (アバター画像など) のアップロード](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)

- 
              [3.3. Blob (アバター画像など) の取得](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E5%8F%96%E5%BE%97)

- [3.4. レコードの作成・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E4%BD%9C%E6%88%90%E6%9B%B4%E6%96%B0)

- [3.5. レコードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)
- [3.6. レコード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)
- 
          [期待されるWebアプリの実装ワークフロー例](https://fg.shigepon.net/API_SPEC.html#%E6%9C%9F%E5%BE%85%E3%81%95%E3%82%8C%E3%82%8Bweb%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E5%AE%9F%E8%A3%85%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%95%E3%83%AD%E3%83%BC%E4%BE%8B)

- 
          [4. クエリ構文 (condition フィールドの仕様)](https://fg.shigepon.net/API_SPEC.html#%E3%82%AF%E3%82%A8%E3%83%AA%E6%A7%8B%E6%96%87-condition-%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%81%AE%E4%BB%95%E6%A7%98)


              [4.1. フィルター型 ("type": "Filter")](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%E5%9E%8B-type-filter)


              [4.2. 検索型 ("type": "Search")](https://fg.shigepon.net/API_SPEC.html#%E6%A4%9C%E7%B4%A2%E5%9E%8B-type-search)



- 
              [4.1. フィルター型 ("type": "Filter")](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%E5%9E%8B-type-filter)

- 
              [4.2. 検索型 ("type": "Search")](https://fg.shigepon.net/API_SPEC.html#%E6%A4%9C%E7%B4%A2%E5%9E%8B-type-search)

[概要](https://fg.shigepon.net/API_SPEC.html#%E6%A6%82%E8%A6%81)
- [共通仕様・前提条件](https://fg.shigepon.net/API_SPEC.html#%E5%85%B1%E9%80%9A%E4%BB%95%E6%A7%98%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)
[共通仕様・前提条件](https://fg.shigepon.net/API_SPEC.html#%E5%85%B1%E9%80%9A%E4%BB%95%E6%A7%98%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)
[1. OAuth 認証 API (/oauth/*)](https://fg.shigepon.net/API_SPEC.html#oauth-%E8%AA%8D%E8%A8%BC-api-oauth)

```
/oauth/*
```

- [1.1. ログイン（OAuth開始）](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3oauth%E9%96%8B%E5%A7%8B)
- [1.2. ログアウト](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A2%E3%82%A6%E3%83%88)
[1.1. ログイン（OAuth開始）](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3oauth%E9%96%8B%E5%A7%8B)
[1.2. ログアウト](https://fg.shigepon.net/API_SPEC.html#%E3%83%AD%E3%82%B0%E3%82%A2%E3%82%A6%E3%83%88)
[2. カスタムフィード管理 API (/fg/*)](https://fg.shigepon.net/API_SPEC.html#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E7%AE%A1%E7%90%86-api-fg)

```
/fg/*
```

- 
              [2.1. 登録済みフィード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E7%99%BB%E9%8C%B2%E6%B8%88%E3%81%BF%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)

- [2.2. フィードの登録・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E7%99%BB%E9%8C%B2%E6%9B%B4%E6%96%B0)
- [2.3. フィードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)
[2.1. 登録済みフィード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E7%99%BB%E9%8C%B2%E6%B8%88%E3%81%BF%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)
[2.2. フィードの登録・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E7%99%BB%E9%8C%B2%E6%9B%B4%E6%96%B0)
[2.3. フィードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)
[3. AT Protocol プロキシ API (/api/*)](https://fg.shigepon.net/API_SPEC.html#at-protocol-%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7-api-api)

```
/api/*
```

- 
              [3.1. セッション情報の取得](https://fg.shigepon.net/API_SPEC.html#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E6%83%85%E5%A0%B1%E3%81%AE%E5%8F%96%E5%BE%97)

- 
              [3.2. Blob (アバター画像など) のアップロード](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)

- 
              [3.3. Blob (アバター画像など) の取得](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E5%8F%96%E5%BE%97)

## 目次
- [3.4. レコードの作成・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E4%BD%9C%E6%88%90%E6%9B%B4%E6%96%B0)
- [3.5. レコードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)
- [3.6. レコード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)
[3.1. セッション情報の取得](https://fg.shigepon.net/API_SPEC.html#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E6%83%85%E5%A0%B1%E3%81%AE%E5%8F%96%E5%BE%97)
[3.2. Blob (アバター画像など) のアップロード](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)
[3.3. Blob (アバター画像など) の取得](https://fg.shigepon.net/API_SPEC.html#blob-%E3%82%A2%E3%83%90%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9-%E3%81%AE%E5%8F%96%E5%BE%97)
[3.4. レコードの作成・更新](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E4%BD%9C%E6%88%90%E6%9B%B4%E6%96%B0)
[3.5. レコードの削除](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%89%8A%E9%99%A4)
[3.6. レコード一覧の取得](https://fg.shigepon.net/API_SPEC.html#%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)
[期待されるWebアプリの実装ワークフロー例](https://fg.shigepon.net/API_SPEC.html#%E6%9C%9F%E5%BE%85%E3%81%95%E3%82%8C%E3%82%8Bweb%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E5%AE%9F%E8%A3%85%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%95%E3%83%AD%E3%83%BC%E4%BE%8B)
[4. クエリ構文 (condition フィールドの仕様)](https://fg.shigepon.net/API_SPEC.html#%E3%82%AF%E3%82%A8%E3%83%AA%E6%A7%8B%E6%96%87-condition-%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%81%AE%E4%BB%95%E6%A7%98)

```
condition
```

- 
              [4.1. フィルター型 ("type": "Filter")](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%E5%9E%8B-type-filter)

- 
              [4.2. 検索型 ("type": "Search")](https://fg.shigepon.net/API_SPEC.html#%E6%A4%9C%E7%B4%A2%E5%9E%8B-type-search)

[4.1. フィルター型 ("type": "Filter")](https://fg.shigepon.net/API_SPEC.html#%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%E5%9E%8B-type-filter)

```
"type": "Filter"
```

[4.2. 検索型 ("type": "Search")](https://fg.shigepon.net/API_SPEC.html#%E6%A4%9C%E7%B4%A2%E5%9E%8B-type-search)

```
"type": "Search"
```

## 概要
APIは以下の3つのグループに分かれています。
1. 
        OAuth認証 API (/oauth/*) :
        ユーザーを認証しセッションを管理する

2. 
        カスタムフィード管理 API (/fg/*) :
        フィードジェネレーター本体のロジックをサーバー上に登録・削除する

3. 
        AT Protocol プロキシ API (/api/*) :
        PDSに対して直接レコード（フィード宣言や画像など）を読み書きする


```
/oauth/*
```


```
/fg/*
```


```
/api/*
```

- 
        ベースURL:
        本ドキュメント記載のエンドポイントは、バックエンドサーバーのルートからの相対パスです。

- 
        データ形式: リクエスト・レスポンス共に文字コードは
        UTF-8 とし、リクエスト時は適宜
        Content-Type: application/json 等を指定してください。

- 
        認証とCookie:


            クライアント（Webアプリ）はCookie (session_id)
            を保持して各APIにリクエストを送信する必要があります。


            ブラウザのJavaScript（fetch や
            axios）を使用してリクエストを送る場合、必ず
            credentials: 'include' (fetch) または
            withCredentials: true (axios)
            を設定してください。



- 
            クライアント（Webアプリ）はCookie (session_id)
            を保持して各APIにリクエストを送信する必要があります。

- 
            ブラウザのJavaScript（fetch や
            axios）を使用してリクエストを送る場合、必ず
            credentials: 'include' (fetch) または
            withCredentials: true (axios)
            を設定してください。

- 
        未ログイン、またはセッション切れの検知:


            未ログイン、またはセッションが切れた（あるいは無効な）状態で認証が必要なAPI
            (/fg/*, /api/*)
            にアクセスした場合、本サーバーの実装では
            HTTPステータス 401 (Unauthorized)
            にて、JSONボディに
            { "error": "need authorization" } が返ります。


            クライアント側はレスポンスステータス 401 もしくはレスポンスボディの
            error フィールドが
            "need authorization"
            であることを検知した場合、未ログインまたはセッション切れと判断し、/oauth/login
            への誘導（再ログイン処理）を行う必要があります。



- 
            未ログイン、またはセッションが切れた（あるいは無効な）状態で認証が必要なAPI
            (/fg/*, /api/*)
            にアクセスした場合、本サーバーの実装では
            HTTPステータス 401 (Unauthorized)
            にて、JSONボディに
            { "error": "need authorization" } が返ります。

- 
            クライアント側はレスポンスステータス 401 もしくはレスポンスボディの
            error フィールドが
            "need authorization"
            であることを検知した場合、未ログインまたはセッション切れと判断し、/oauth/login
            への誘導（再ログイン処理）を行う必要があります。

- 
        CSRF対策:


            プロキシAPI (/api/*) 等を利用する際は、CSRF対策として
            HTTPヘッダーに X-Requested-With: XMLHttpRequest
            を含める必要があります。ヘッダーが含まれていない場合、サーバーから
            HTTPステータス 403 (Forbidden) が返されます。



- 
            プロキシAPI (/api/*) 等を利用する際は、CSRF対策として
            HTTPヘッダーに X-Requested-With: XMLHttpRequest
            を含める必要があります。ヘッダーが含まれていない場合、サーバーから
            HTTPステータス 403 (Forbidden) が返されます。

- 
        エラーレスポンス形式:


            処理失敗時やバリデーションエラー時（クエリパースエラーなど）は、基本的に
            HTTPステータス 400 (Bad Request) または
            HTTPステータス 401 (Unauthorized) とともに、JSONで
            { "error": "エラー詳細メッセージ" } の形式が返ります。


            AT Protocol プロキシ API (/api/*)
            については、Bluesky（PDS）が返すエラーフォーマット（例:
            {"error": "...", "message": "..."}）がそのままプロキシされて返る場合があります。



- 
            処理失敗時やバリデーションエラー時（クエリパースエラーなど）は、基本的に
            HTTPステータス 400 (Bad Request) または
            HTTPステータス 401 (Unauthorized) とともに、JSONで

{ "error": "エラー詳細メッセージ" } の形式が返ります。

- 
            AT Protocol プロキシ API (/api/*)
            については、Bluesky（PDS）が返すエラーフォーマット（例:
            {"error": "...", "message": "..."}）がそのままプロキシされて返る場合があります。

- 
        CORS (Cross-Origin Resource Sharing):


            Webアプリ（フロントエンド）とAPIサーバーのドメイン（オリジン）が異なる構成の場合、サーバー側でCORSが適切に設定されている前提となります。



- 
            Webアプリ（フロントエンド）とAPIサーバーのドメイン（オリジン）が異なる構成の場合、サーバー側でCORSが適切に設定されている前提となります。

- 
        フィードのプレビューについて:


            本API群はフィードの「デプロイ（登録）」を目的としています。作成中の条件式（condition）がどのようなポストを抽出するかをWebアプリ上で直接プレビュー取得するAPIは現在提供されていません。デプロイ後、Bluesky公式クライアント等から動作を確認してください。



- 
            本API群はフィードの「デプロイ（登録）」を目的としています。作成中の条件式（condition）がどのようなポストを抽出するかをWebアプリ上で直接プレビュー取得するAPIは現在提供されていません。デプロイ後、Bluesky公式クライアント等から動作を確認してください。


```
Content-Type: application/json
```

- 
            クライアント（Webアプリ）はCookie (session_id)
            を保持して各APIにリクエストを送信する必要があります。

- 
            ブラウザのJavaScript（fetch や
            axios）を使用してリクエストを送る場合、必ず
            credentials: 'include' (fetch) または
            withCredentials: true (axios)
            を設定してください。


```
session_id
```


```
fetch
```


```
axios
```


```
credentials: 'include'
```


```
withCredentials: true
```

- 
            未ログイン、またはセッションが切れた（あるいは無効な）状態で認証が必要なAPI
            (/fg/*, /api/*)
            にアクセスした場合、本サーバーの実装では
            HTTPステータス 401 (Unauthorized)
            にて、JSONボディに
            { "error": "need authorization" } が返ります。

- 
            クライアント側はレスポンスステータス 401 もしくはレスポンスボディの
            error フィールドが
            "need authorization"
            であることを検知した場合、未ログインまたはセッション切れと判断し、/oauth/login
            への誘導（再ログイン処理）を行う必要があります。


```
/fg/*
```


```
/api/*
```


```
{ "error": "need authorization" }
```


```
error
```


```
"need authorization"
```


```
/oauth/login
```

- 
            プロキシAPI (/api/*) 等を利用する際は、CSRF対策として
            HTTPヘッダーに X-Requested-With: XMLHttpRequest
            を含める必要があります。ヘッダーが含まれていない場合、サーバーから
            HTTPステータス 403 (Forbidden) が返されます。


```
/api/*
```


```
X-Requested-With: XMLHttpRequest
```

- 
            処理失敗時やバリデーションエラー時（クエリパースエラーなど）は、基本的に
            HTTPステータス 400 (Bad Request) または
            HTTPステータス 401 (Unauthorized) とともに、JSONで
            { "error": "エラー詳細メッセージ" } の形式が返ります。

- 
            AT Protocol プロキシ API (/api/*)
            については、Bluesky（PDS）が返すエラーフォーマット（例:
            {"error": "...", "message": "..."}）がそのままプロキシされて返る場合があります。


```
{ "error": "エラー詳細メッセージ" }
```


```
/api/*
```


```
{"error": "...", "message": "..."}
```

- 
            Webアプリ（フロントエンド）とAPIサーバーのドメイン（オリジン）が異なる構成の場合、サーバー側でCORSが適切に設定されている前提となります。

-

本API群はフィードの「デプロイ（登録）」を目的としています。作成中の条件式（condition）がどのようなポストを抽出するかをWebアプリ上で直接プレビュー取得するAPIは現在提供されていません。デプロイ後、Bluesky公式クライアント等から動作を確認してください。


```
condition
```

```
/oauth/*
```

Webアプリを利用するユーザーのBlueskyアカウントを認証するためのエンドポイントです。

### 1.1. ログイン（OAuth開始）
- エンドポイント: GET /oauth/login
- 
        クエリパラメータ:


            handle (string) : ユーザーのハンドル名 (例:
            alice.bsky.social)


            redirect (string) :
            認証完了後に戻ってくるWebアプリのURL



- 
            handle (string) : ユーザーのハンドル名 (例:
            alice.bsky.social)

- 
            redirect (string) :
            認証完了後に戻ってくるWebアプリのURL

- 
        動作: PDSのOAuth認証画面へのリダイレクト（303
        Redirect）を返します。成功して戻ってきたあとはCookieに
        session_id が設定されます。


```
GET /oauth/login
```

- 
            handle (string) : ユーザーのハンドル名 (例:
            alice.bsky.social)

- 
            redirect (string) :
            認証完了後に戻ってくるWebアプリのURL


```
handle
```


```
alice.bsky.social
```


```
redirect
```


```
session_id
```

### 1.2. ログアウト
- エンドポイント: GET /oauth/logout
- Cookie: 送信が必要 (session_id)
- 
        レスポンス (JSON):

          成功時 (HTTP 200 OK): { "ok": true }


- 成功時 (HTTP 200 OK): { "ok": true }
- 
        動作: サーバー側のセッションを破棄し、クライアント側の
        session_id Cookieを削除（クリア）します。


```
GET /oauth/logout
```


```
session_id
```

- 成功時 (HTTP 200 OK): { "ok": true }

```
{ "ok": true }
```


```
session_id
```

```
/fg/*
```

サーバーのRedisやElasticsearchに対してフィード抽出ロジックを展開するためのエンドポイントです。

- 
        エンドポイント: GET /fg/list

- 
        Cookie: 送信が必要 (session_id)

- https://fg.shigepon.net/API_SPEC.html#cb1-15https://fg.shigepon.net/API_SPEC.html#cb1-14https://fg.shigepon.net/API_SPEC.html#cb1-13https://fg.shigepon.net/API_SPEC.html#cb1-12https://fg.shigepon.net/API_SPEC.html#cb1-11https://fg.shigepon.net/API_SPEC.html#cb1-10https://fg.shigepon.net/API_SPEC.html#cb1-9https://fg.shigepon.net/API_SPEC.html#cb1-8https://fg.shigepon.net/API_SPEC.html#cb1-7https://fg.shigepon.net/API_SPEC.html#cb1-6https://fg.shigepon.net/API_SPEC.html#cb1-5https://fg.shigepon.net/API_SPEC.html#cb1-4https://fg.shigepon.net/API_SPEC.html#cb1-3https://fg.shigepon.net/API_SPEC.html#cb1-2https://fg.shigepon.net/API_SPEC.html#cb1-1
        レスポンス (JSON):

          {
  "success": true,
  "feeds": [
    {
      "repo": "did:plc:xxx...", // 作成者のDID
      "rkey": "my-feed", // フィードのレコードキー
      "filter": "keyword(猫)" // フィルター型 (Filter) の場合の条件文字列。存在しない場合は省略されます
    },
    {
      "repo": "did:plc:xxx...",
      "rkey": "my-search-feed",
      "search": "source { postedBy($me, newest) }" // 検索型 (Search) の場合の条件文字列。存在しない場合は省略されます
    }
  ]
}



            【補足】フィード型の判別について:
            レスポンスに含まれる
            feeds の各オブジェクトは、型に応じて
            "filter" または "search"
            のいずれか片方のキーのみを持ちます。クライアント側では、オブジェクト内にどちらのキーが存在するか（もしくは
            null でないか）でフィードの種類（Filter /
            Search）を判別してください。



エンドポイント: GET /fg/list

```
GET /fg/list
```

Cookie: 送信が必要 (session_id)

```
session_id
```

レスポンス (JSON):

```
https://fg.shigepon.net/API_SPEC.html#cb1-15https://fg.shigepon.net/API_SPEC.html#cb1-14https://fg.shigepon.net/API_SPEC.html#cb1-13https://fg.shigepon.net/API_SPEC.html#cb1-12https://fg.shigepon.net/API_SPEC.html#cb1-11https://fg.shigepon.net/API_SPEC.html#cb1-10https://fg.shigepon.net/API_SPEC.html#cb1-9https://fg.shigepon.net/API_SPEC.html#cb1-8https://fg.shigepon.net/API_SPEC.html#cb1-7https://fg.shigepon.net/API_SPEC.html#cb1-6https://fg.shigepon.net/API_SPEC.html#cb1-5https://fg.shigepon.net/API_SPEC.html#cb1-4https://fg.shigepon.net/API_SPEC.html#cb1-3https://fg.shigepon.net/API_SPEC.html#cb1-2https://fg.shigepon.net/API_SPEC.html#cb1-1{ "success": true, "feeds": [ { "repo": "did:plc:xxx...", // 作成者のDID "rkey": "my-feed", // フィードのレコードキー "filter": "keyword(猫)" // フィルター型 (Filter) の場合の条件文字列。存在しない場合は省略されます }, { "repo": "did:plc:xxx...", "rkey": "my-search-feed", "search": "source { postedBy($me, newest) }" // 検索型 (Search) の場合の条件文字列。存在しない場合は省略されます } ] }
```


```
https://fg.shigepon.net/API_SPEC.html#cb1-15https://fg.shigepon.net/API_SPEC.html#cb1-14https://fg.shigepon.net/API_SPEC.html#cb1-13https://fg.shigepon.net/API_SPEC.html#cb1-12https://fg.shigepon.net/API_SPEC.html#cb1-11https://fg.shigepon.net/API_SPEC.html#cb1-10https://fg.shigepon.net/API_SPEC.html#cb1-9https://fg.shigepon.net/API_SPEC.html#cb1-8https://fg.shigepon.net/API_SPEC.html#cb1-7https://fg.shigepon.net/API_SPEC.html#cb1-6https://fg.shigepon.net/API_SPEC.html#cb1-5https://fg.shigepon.net/API_SPEC.html#cb1-4https://fg.shigepon.net/API_SPEC.html#cb1-3https://fg.shigepon.net/API_SPEC.html#cb1-2https://fg.shigepon.net/API_SPEC.html#cb1-1{ "success": true, "feeds": [ { "repo": "did:plc:xxx...", // 作成者のDID "rkey": "my-feed", // フィードのレコードキー "filter": "keyword(猫)" // フィルター型 (Filter) の場合の条件文字列。存在しない場合は省略されます }, { "repo": "did:plc:xxx...", "rkey": "my-search-feed", "search": "source { postedBy($me, newest) }" // 検索型 (Search) の場合の条件文字列。存在しない場合は省略されます } ] }
```

【補足】フィード型の判別について: レスポンスに含まれる feeds の各オブジェクトは、型に応じて "filter" または "search" のいずれか片方のキーのみを持ちます。クライアント側では、オブジェクト内にどちらのキーが存在するか（もしくは null でないか）でフィードの種類（Filter / Search）を判別してください。

```
feeds
```


```
"filter"
```


```
"search"
```


```
null
```

- 
        エンドポイント: POST /fg/put

- 
        Cookie: 送信が必要 (session_id)

- 
        Content-Type: application/json

- https://fg.shigepon.net/API_SPEC.html#cb2-7https://fg.shigepon.net/API_SPEC.html#cb2-6https://fg.shigepon.net/API_SPEC.html#cb2-5https://fg.shigepon.net/API_SPEC.html#cb2-4https://fg.shigepon.net/API_SPEC.html#cb2-3https://fg.shigepon.net/API_SPEC.html#cb2-2https://fg.shigepon.net/API_SPEC.html#cb2-1
        リクエストボディ:

          {
  "type": "Filter", // または "Search" (必須)
  "rkey": "my-feed", // フィードのレコードキー。URLの一部になります。
                    // 半角英数字、ドット(.)、ハイフン(-)のみ使用可能 (Regex: ^[a-zA-Z0-9.-]+$)。
                    // 1文字以上30文字以下を推奨（クライアント側では30文字以内のバリデーション制限あり）
  "condition": "keyword(猫)" // サーバー側でパースされる独自のクエリ文字列（必須）
}


- 
        レスポンス (JSON):

          成功時 (HTTP 200 OK): { "success": true }

            パースエラー・バリデーションエラー時 (HTTP 400 Bad Request):
            { "error": "エラー詳細メッセージ" }


            認証エラー・セッション切れ時 (HTTP 401 Unauthorized):
            { "error": "need authorization" }


            ※ 既に同じ
            rkey
            のフィードが存在する場合は、抽出ロジックが上書き更新されます。



- 成功時 (HTTP 200 OK): { "success": true }
- 
            パースエラー・バリデーションエラー時 (HTTP 400 Bad Request):
            { "error": "エラー詳細メッセージ" }

- 
            認証エラー・セッション切れ時 (HTTP 401 Unauthorized):
            { "error": "need authorization" }

- 
            ※ 既に同じ
            rkey
            のフィードが存在する場合は、抽出ロジックが上書き更新されます。

エンドポイント: POST /fg/put

```
POST /fg/put
```

Cookie: 送信が必要 (session_id)

```
session_id
```

Content-Type: application/json

```
application/json
```

リクエストボディ:

```
https://fg.shigepon.net/API_SPEC.html#cb2-7https://fg.shigepon.net/API_SPEC.html#cb2-6https://fg.shigepon.net/API_SPEC.html#cb2-5https://fg.shigepon.net/API_SPEC.html#cb2-4https://fg.shigepon.net/API_SPEC.html#cb2-3https://fg.shigepon.net/API_SPEC.html#cb2-2https://fg.shigepon.net/API_SPEC.html#cb2-1{ "type": "Filter", // または "Search" (必須) "rkey": "my-feed", // フィードのレコードキー。URLの一部になります。 // 半角英数字、ドット(.)、ハイフン(-)のみ使用可能 (Regex: ^[a-zA-Z0-9.-]+$)。 // 1文字以上30文字以下を推奨（クライアント側では30文字以内のバリデーション制限あり） "condition": "keyword(猫)" // サーバー側でパースされる独自のクエリ文字列（必須） }
```


```
https://fg.shigepon.net/API_SPEC.html#cb2-7https://fg.shigepon.net/API_SPEC.html#cb2-6https://fg.shigepon.net/API_SPEC.html#cb2-5https://fg.shigepon.net/API_SPEC.html#cb2-4https://fg.shigepon.net/API_SPEC.html#cb2-3https://fg.shigepon.net/API_SPEC.html#cb2-2https://fg.shigepon.net/API_SPEC.html#cb2-1{ "type": "Filter", // または "Search" (必須) "rkey": "my-feed", // フィードのレコードキー。URLの一部になります。 // 半角英数字、ドット(.)、ハイフン(-)のみ使用可能 (Regex: ^[a-zA-Z0-9.-]+$)。 // 1文字以上30文字以下を推奨（クライアント側では30文字以内のバリデーション制限あり） "condition": "keyword(猫)" // サーバー側でパースされる独自のクエリ文字列（必須） }
```

レスポンス (JSON):
- 成功時 (HTTP 200 OK): { "success": true }
- 
            パースエラー・バリデーションエラー時 (HTTP 400 Bad Request):
            { "error": "エラー詳細メッセージ" }

- 
            認証エラー・セッション切れ時 (HTTP 401 Unauthorized):
            { "error": "need authorization" }

- 
            ※ 既に同じ
            rkey
            のフィードが存在する場合は、抽出ロジックが上書き更新されます。


```
{ "success": true }
```


```
{ "error": "エラー詳細メッセージ" }
```


```
{ "error": "need authorization" }
```


```
rkey
```

- 
        エンドポイント: POST /fg/delete

- 
        Cookie: 送信が必要 (session_id)

- 
        Content-Type: application/json

- https://fg.shigepon.net/API_SPEC.html#cb3-3https://fg.shigepon.net/API_SPEC.html#cb3-2https://fg.shigepon.net/API_SPEC.html#cb3-1
        リクエストボディ:

          {
  "rkey": "my-feed" // 削除対象のレコードキー
}


- 
        レスポンス (JSON):

          成功時 (HTTP 200 OK): { "success": true }

            エラー時 (HTTP 400 Bad Request または HTTP 401 Unauthorized):
            { "error": "エラーメッセージ" }



- 成功時 (HTTP 200 OK): { "success": true }
- 
            エラー時 (HTTP 400 Bad Request または HTTP 401 Unauthorized):
            { "error": "エラーメッセージ" }

エンドポイント: POST /fg/delete

```
POST /fg/delete
```

Cookie: 送信が必要 (session_id)

```
session_id
```

Content-Type: application/json

```
application/json
```

リクエストボディ:

```
https://fg.shigepon.net/API_SPEC.html#cb3-3https://fg.shigepon.net/API_SPEC.html#cb3-2https://fg.shigepon.net/API_SPEC.html#cb3-1{ "rkey": "my-feed" // 削除対象のレコードキー }
```


```
https://fg.shigepon.net/API_SPEC.html#cb3-3https://fg.shigepon.net/API_SPEC.html#cb3-2https://fg.shigepon.net/API_SPEC.html#cb3-1{ "rkey": "my-feed" // 削除対象のレコードキー }
```

レスポンス (JSON):
- 成功時 (HTTP 200 OK): { "success": true }
- 
            エラー時 (HTTP 400 Bad Request または HTTP 401 Unauthorized):
            { "error": "エラーメッセージ" }


```
{ "success": true }
```


```
{ "error": "エラーメッセージ" }
```

```
/api/*
```

Blueskyネットワーク上でカスタムフィードをユーザーのプロフィールに表示させるためには、PDSに app.bsky.feed.generator というレコードを書き込む必要があります。このAPIは認証情報（DPoP等）を付与してPDSへリクエストをプロキシします。

```
app.bsky.feed.generator
```

注意: このパス以下の全てのリクエストに X-Requested-With: XMLHttpRequest ヘッダーが必須です。 参考: リクエスト・レスポンスの厳密なスキーマについては、Bluesky公式の Lexicon (AT Protocol HTTP API Reference) を参照してください。

```
X-Requested-With: XMLHttpRequest
```

- 

          エンドポイント: GET /api/get_session


- 

          ヘッダー:
          X-Requested-With: XMLHttpRequest (必須)


- 
        Cookie: 送信が必要 (session_id)

- https://fg.shigepon.net/API_SPEC.html#cb4-7https://fg.shigepon.net/API_SPEC.html#cb4-6https://fg.shigepon.net/API_SPEC.html#cb4-5https://fg.shigepon.net/API_SPEC.html#cb4-4https://fg.shigepon.net/API_SPEC.html#cb4-3https://fg.shigepon.net/API_SPEC.html#cb4-2https://fg.shigepon.net/API_SPEC.html#cb4-1

          レスポンス (JSON):
          com.atproto.server.getSession
          の結果。以下のオブジェクトが返されます。


          {
  "did": "did:plc:xxx...",
  "handle": "alice.bsky.social",
  "email": "[[email protected]](https://fg.shigepon.net/cdn-cgi/l/email-protection)", // オプショナル
  "emailConfirmed": true,       // オプショナル
  "active": true                // オプショナル
}


エンドポイント: GET /api/get_session

```
GET /api/get_session
```

ヘッダー: X-Requested-With: XMLHttpRequest (必須)

```
X-Requested-With: XMLHttpRequest
```

Cookie: 送信が必要 (session_id)

```
session_id
```

レスポンス (JSON): com.atproto.server.getSession の結果。以下のオブジェクトが返されます。

```
com.atproto.server.getSession
```


```
https://fg.shigepon.net/API_SPEC.html#cb4-7https://fg.shigepon.net/API_SPEC.html#cb4-6https://fg.shigepon.net/API_SPEC.html#cb4-5https://fg.shigepon.net/API_SPEC.html#cb4-4https://fg.shigepon.net/API_SPEC.html#cb4-3https://fg.shigepon.net/API_SPEC.html#cb4-2https://fg.shigepon.net/API_SPEC.html#cb4-1{ "did": "did:plc:xxx...", "handle": "alice.bsky.social", "email": "[[email protected]](https://fg.shigepon.net/cdn-cgi/l/email-protection)", // オプショナル "emailConfirmed": true, // オプショナル "active": true // オプショナル }
```


```
https://fg.shigepon.net/API_SPEC.html#cb4-7https://fg.shigepon.net/API_SPEC.html#cb4-6https://fg.shigepon.net/API_SPEC.html#cb4-5https://fg.shigepon.net/API_SPEC.html#cb4-4https://fg.shigepon.net/API_SPEC.html#cb4-3https://fg.shigepon.net/API_SPEC.html#cb4-2https://fg.shigepon.net/API_SPEC.html#cb4-1{ "did": "did:plc:xxx...", "handle": "alice.bsky.social", "email": "[[email protected]](https://fg.shigepon.net/cdn-cgi/l/email-protection)", // オプショナル "emailConfirmed": true, // オプショナル "active": true // オプショナル }
```

[[email protected]](https://fg.shigepon.net/cdn-cgi/l/email-protection)

- 

          エンドポイント: POST /api/upload_blob


- 

          ヘッダー:
          X-Requested-With: XMLHttpRequest (必須)


- 
        Cookie: 送信が必要 (session_id)

- 

          Content-Type: アップロードする画像のMIMEタイプ (例:
          image/png, image/jpeg,
          image/webp 等)


- 
        リクエストボディ: 画像等のバイナリデータ

- https://fg.shigepon.net/API_SPEC.html#cb5-10https://fg.shigepon.net/API_SPEC.html#cb5-9https://fg.shigepon.net/API_SPEC.html#cb5-8https://fg.shigepon.net/API_SPEC.html#cb5-7https://fg.shigepon.net/API_SPEC.html#cb5-6https://fg.shigepon.net/API_SPEC.html#cb5-5https://fg.shigepon.net/API_SPEC.html#cb5-4https://fg.shigepon.net/API_SPEC.html#cb5-3https://fg.shigepon.net/API_SPEC.html#cb5-2https://fg.shigepon.net/API_SPEC.html#cb5-1

          レスポンス (JSON):
          アップロードされたBlobのメタデータ。レスポンスは以下の構造のように
          "blob" フィールドでラップされています。


          {
  "blob": {
    "$type": "blob",
    "ref": {
      "$link": "bafybeih..." // アップロードされた画像のCID文字列
    },
    "mimeType": "image/png",
    "size": 12345
  }
}



            【補足】Content-Typeの自動判別について:
            クライアント側で
            Content-Type を明示的に指定しない場合、または
            application/octet-stream
            を指定した場合、サーバー側は送信されたバイナリデータの先頭数バイト（マジックナンバー）から自動的に画像フォーマット（PNG、JPEG、GIF、WEBP）を判別し、適切な
            MIME タイプを付与して PDS にアップロードを行います。



エンドポイント: POST /api/upload_blob

```
POST /api/upload_blob
```

ヘッダー: X-Requested-With: XMLHttpRequest (必須)

```
X-Requested-With: XMLHttpRequest
```

Cookie: 送信が必要 (session_id)

```
session_id
```

Content-Type: アップロードする画像のMIMEタイプ (例: image/png, image/jpeg, image/webp 等)

```
image/png
```


```
image/jpeg
```


```
image/webp
```

リクエストボディ: 画像等のバイナリデータ
レスポンス (JSON): アップロードされたBlobのメタデータ。レスポンスは以下の構造のように "blob" フィールドでラップされています。

```
"blob"
```


```
https://fg.shigepon.net/API_SPEC.html#cb5-10https://fg.shigepon.net/API_SPEC.html#cb5-9https://fg.shigepon.net/API_SPEC.html#cb5-8https://fg.shigepon.net/API_SPEC.html#cb5-7https://fg.shigepon.net/API_SPEC.html#cb5-6https://fg.shigepon.net/API_SPEC.html#cb5-5https://fg.shigepon.net/API_SPEC.html#cb5-4https://fg.shigepon.net/API_SPEC.html#cb5-3https://fg.shigepon.net/API_SPEC.html#cb5-2https://fg.shigepon.net/API_SPEC.html#cb5-1{ "blob": { "$type": "blob", "ref": { "$link": "bafybeih..." // アップロードされた画像のCID文字列 }, "mimeType": "image/png", "size": 12345 } }
```


```
https://fg.shigepon.net/API_SPEC.html#cb5-10https://fg.shigepon.net/API_SPEC.html#cb5-9https://fg.shigepon.net/API_SPEC.html#cb5-8https://fg.shigepon.net/API_SPEC.html#cb5-7https://fg.shigepon.net/API_SPEC.html#cb5-6https://fg.shigepon.net/API_SPEC.html#cb5-5https://fg.shigepon.net/API_SPEC.html#cb5-4https://fg.shigepon.net/API_SPEC.html#cb5-3https://fg.shigepon.net/API_SPEC.html#cb5-2https://fg.shigepon.net/API_SPEC.html#cb5-1{ "blob": { "$type": "blob", "ref": { "$link": "bafybeih..." // アップロードされた画像のCID文字列 }, "mimeType": "image/png", "size": 12345 } }
```

【補足】Content-Typeの自動判別について: クライアント側で Content-Type を明示的に指定しない場合、または application/octet-stream を指定した場合、サーバー側は送信されたバイナリデータの先頭数バイト（マジックナンバー）から自動的に画像フォーマット（PNG、JPEG、GIF、WEBP）を判別し、適切な MIME タイプを付与して PDS にアップロードを行います。

```
Content-Type
```


```
application/octet-stream
```

- エンドポイント: GET /api/get_blob
- 
        ヘッダー:
        X-Requested-With: XMLHttpRequest (必須)

- Cookie: 送信が必要 (session_id)
- 
        クエリパラメータ:


            did (string, 必須) : Blobを所有するアカウントのDID (例:
            did:plc:xxx...)


            cid (string, 必須) : BlobのCID (例:
            bafybeih...)



- 
            did (string, 必須) : Blobを所有するアカウントのDID (例:
            did:plc:xxx...)

- 
            cid (string, 必須) : BlobのCID (例:
            bafybeih...)

- 
        レスポンス:
        取得されたBlobのバイナリデータ。レスポンスヘッダーには適切な
        Content-Type（例: image/png）や
        Content-Length が付与されます。


```
GET /api/get_blob
```


```
X-Requested-With: XMLHttpRequest
```


```
session_id
```

- 
            did (string, 必須) : Blobを所有するアカウントのDID (例:
            did:plc:xxx...)

- 
            cid (string, 必須) : BlobのCID (例:
            bafybeih...)


```
did
```


```
did:plc:xxx...
```


```
cid
```


```
bafybeih...
```


```
Content-Type
```


```
image/png
```


```
Content-Length
```

- 

          エンドポイント: POST /api/put_record


- 

          ヘッダー:
          X-Requested-With: XMLHttpRequest (必須)


- 
        Cookie: 送信が必要 (session_id)

- 
        Content-Type: application/json

- https://fg.shigepon.net/API_SPEC.html#cb6-20https://fg.shigepon.net/API_SPEC.html#cb6-19https://fg.shigepon.net/API_SPEC.html#cb6-18https://fg.shigepon.net/API_SPEC.html#cb6-17https://fg.shigepon.net/API_SPEC.html#cb6-16https://fg.shigepon.net/API_SPEC.html#cb6-15https://fg.shigepon.net/API_SPEC.html#cb6-14https://fg.shigepon.net/API_SPEC.html#cb6-13https://fg.shigepon.net/API_SPEC.html#cb6-12https://fg.shigepon.net/API_SPEC.html#cb6-11https://fg.shigepon.net/API_SPEC.html#cb6-10https://fg.shigepon.net/API_SPEC.html#cb6-9https://fg.shigepon.net/API_SPEC.html#cb6-8https://fg.shigepon.net/API_SPEC.html#cb6-7https://fg.shigepon.net/API_SPEC.html#cb6-6https://fg.shigepon.net/API_SPEC.html#cb6-5https://fg.shigepon.net/API_SPEC.html#cb6-4https://fg.shigepon.net/API_SPEC.html#cb6-3https://fg.shigepon.net/API_SPEC.html#cb6-2https://fg.shigepon.net/API_SPEC.html#cb6-1

          リクエストボディ:
          com.atproto.repo.putRecord のスキーマに準拠。



            パラメータ構造:

              {
  "repo": "did:plc:xxx...", // ユーザーのDID (ログイン中のDID)
  "collection": "app.bsky.feed.generator", // コレクション名固定
  "rkey": "my-feed", // フィードのレコードキー
  "record": {
    "$type": "app.bsky.feed.generator",
    "did": "did:web:fg.shigepon.net", // フィードジェネレーターのDID。本システムでは "did:web:fg.shigepon.net" に固定
    "displayName": "My Custom Feed", // 表示名（必須）
    "description": "猫の画像だけを集めたフィードです", // 説明（オプショナル）
    "createdAt": "2024-06-08T14:14:00.000Z", // 作成日時 (ISO-8601フォーマット)
    "avatar": { // アバター画像がある場合のみ指定するBlobオブジェクト（オプショナル）
      "$type": "blob",
      "ref": {
        "$link": "bafybeih..." // アップロード時に取得したCID文字列
      },
      "mimeType": "image/png",
      "size": 12345
    }
  }
}




- https://fg.shigepon.net/API_SPEC.html#cb6-20https://fg.shigepon.net/API_SPEC.html#cb6-19https://fg.shigepon.net/API_SPEC.html#cb6-18https://fg.shigepon.net/API_SPEC.html#cb6-17https://fg.shigepon.net/API_SPEC.html#cb6-16https://fg.shigepon.net/API_SPEC.html#cb6-15https://fg.shigepon.net/API_SPEC.html#cb6-14https://fg.shigepon.net/API_SPEC.html#cb6-13https://fg.shigepon.net/API_SPEC.html#cb6-12https://fg.shigepon.net/API_SPEC.html#cb6-11https://fg.shigepon.net/API_SPEC.html#cb6-10https://fg.shigepon.net/API_SPEC.html#cb6-9https://fg.shigepon.net/API_SPEC.html#cb6-8https://fg.shigepon.net/API_SPEC.html#cb6-7https://fg.shigepon.net/API_SPEC.html#cb6-6https://fg.shigepon.net/API_SPEC.html#cb6-5https://fg.shigepon.net/API_SPEC.html#cb6-4https://fg.shigepon.net/API_SPEC.html#cb6-3https://fg.shigepon.net/API_SPEC.html#cb6-2https://fg.shigepon.net/API_SPEC.html#cb6-1
            パラメータ構造:

              {
  "repo": "did:plc:xxx...", // ユーザーのDID (ログイン中のDID)
  "collection": "app.bsky.feed.generator", // コレクション名固定
  "rkey": "my-feed", // フィードのレコードキー
  "record": {
    "$type": "app.bsky.feed.generator",
    "did": "did:web:fg.shigepon.net", // フィードジェネレーターのDID。本システムでは "did:web:fg.shigepon.net" に固定
    "displayName": "My Custom Feed", // 表示名（必須）
    "description": "猫の画像だけを集めたフィードです", // 説明（オプショナル）
    "createdAt": "2024-06-08T14:14:00.000Z", // 作成日時 (ISO-8601フォーマット)
    "avatar": { // アバター画像がある場合のみ指定するBlobオブジェクト（オプショナル）
      "$type": "blob",
      "ref": {
        "$link": "bafybeih..." // アップロード時に取得したCID文字列
      },
      "mimeType": "image/png",
      "size": 12345
    }
  }
}


- https://fg.shigepon.net/API_SPEC.html#cb7-4https://fg.shigepon.net/API_SPEC.html#cb7-3https://fg.shigepon.net/API_SPEC.html#cb7-2https://fg.shigepon.net/API_SPEC.html#cb7-1

          レスポンス (JSON):
          com.atproto.repo.putRecord
          の結果。以下のオブジェクトが返されます。


          {

"uri": "at://did:plc:xxx.../app.bsky.feed.generator/my-feed",
  "cid": "bafyreih..."
}


エンドポイント: POST /api/put_record

```
POST /api/put_record
```

ヘッダー: X-Requested-With: XMLHttpRequest (必須)

```
X-Requested-With: XMLHttpRequest
```

Cookie: 送信が必要 (session_id)

```
session_id
```

Content-Type: application/json

```
application/json
```

リクエストボディ: com.atproto.repo.putRecord のスキーマに準拠。

```
com.atproto.repo.putRecord
```

- https://fg.shigepon.net/API_SPEC.html#cb6-20https://fg.shigepon.net/API_SPEC.html#cb6-19https://fg.shigepon.net/API_SPEC.html#cb6-18https://fg.shigepon.net/API_SPEC.html#cb6-17https://fg.shigepon.net/API_SPEC.html#cb6-16https://fg.shigepon.net/API_SPEC.html#cb6-15https://fg.shigepon.net/API_SPEC.html#cb6-14https://fg.shigepon.net/API_SPEC.html#cb6-13https://fg.shigepon.net/API_SPEC.html#cb6-12https://fg.shigepon.net/API_SPEC.html#cb6-11https://fg.shigepon.net/API_SPEC.html#cb6-10https://fg.shigepon.net/API_SPEC.html#cb6-9https://fg.shigepon.net/API_SPEC.html#cb6-8https://fg.shigepon.net/API_SPEC.html#cb6-7https://fg.shigepon.net/API_SPEC.html#cb6-6https://fg.shigepon.net/API_SPEC.html#cb6-5https://fg.shigepon.net/API_SPEC.html#cb6-4https://fg.shigepon.net/API_SPEC.html#cb6-3https://fg.shigepon.net/API_SPEC.html#cb6-2https://fg.shigepon.net/API_SPEC.html#cb6-1
            パラメータ構造:

              {
  "repo": "did:plc:xxx...", // ユーザーのDID (ログイン中のDID)
  "collection": "app.bsky.feed.generator", // コレクション名固定
  "rkey": "my-feed", // フィードのレコードキー
  "record": {
    "$type": "app.bsky.feed.generator",
    "did": "did:web:fg.shigepon.net", // フィードジェネレーターのDID。本システムでは "did:web:fg.shigepon.net" に固定
    "displayName": "My Custom Feed", // 表示名（必須）
    "description": "猫の画像だけを集めたフィードです", // 説明（オプショナル）
    "createdAt": "2024-06-08T14:14:00.000Z", // 作成日時 (ISO-8601フォーマット)
    "avatar": { // アバター画像がある場合のみ指定するBlobオブジェクト（オプショナル）
      "$type": "blob",
      "ref": {
        "$link": "bafybeih..." // アップロード時に取得したCID文字列
      },
      "mimeType": "image/png",
      "size": 12345
    }
  }
}


パラメータ構造:

```
https://fg.shigepon.net/API_SPEC.html#cb6-20https://fg.shigepon.net/API_SPEC.html#cb6-19https://fg.shigepon.net/API_SPEC.html#cb6-18https://fg.shigepon.net/API_SPEC.html#cb6-17https://fg.shigepon.net/API_SPEC.html#cb6-16https://fg.shigepon.net/API_SPEC.html#cb6-15https://fg.shigepon.net/API_SPEC.html#cb6-14https://fg.shigepon.net/API_SPEC.html#cb6-13https://fg.shigepon.net/API_SPEC.html#cb6-12https://fg.shigepon.net/API_SPEC.html#cb6-11https://fg.shigepon.net/API_SPEC.html#cb6-10https://fg.shigepon.net/API_SPEC.html#cb6-9https://fg.shigepon.net/API_SPEC.html#cb6-8https://fg.shigepon.net/API_SPEC.html#cb6-7https://fg.shigepon.net/API_SPEC.html#cb6-6https://fg.shigepon.net/API_SPEC.html#cb6-5https://fg.shigepon.net/API_SPEC.html#cb6-4https://fg.shigepon.net/API_SPEC.html#cb6-3https://fg.shigepon.net/API_SPEC.html#cb6-2https://fg.shigepon.net/API_SPEC.html#cb6-1{ "repo": "did:plc:xxx...", // ユーザーのDID (ログイン中のDID) "collection": "app.bsky.feed.generator", // コレクション名固定 "rkey": "my-feed", // フィードのレコードキー "record": { "$type": "app.bsky.feed.generator", "did": "did:web:fg.shigepon.net", // フィードジェネレーターのDID。本システムでは "did:web:fg.shigepon.net" に固定 "displayName": "My Custom Feed", // 表示名（必須） "description": "猫の画像だけを集めたフィードです", // 説明（オプショナル） "createdAt": "2024-06-08T14:14:00.000Z", // 作成日時 (ISO-8601フォーマット) "avatar": { // アバター画像がある場合のみ指定するBlobオブジェクト（オプショナル） "$type": "blob", "ref": { "$link": "bafybeih..." // アップロード時に取得したCID文字列 }, "mimeType": "image/png", "size": 12345 } } }
```

```
https://fg.shigepon.net/API_SPEC.html#cb6-20https://fg.shigepon.net/API_SPEC.html#cb6-19https://fg.shigepon.net/API_SPEC.html#cb6-18https://fg.shigepon.net/API_SPEC.html#cb6-17https://fg.shigepon.net/API_SPEC.html#cb6-16https://fg.shigepon.net/API_SPEC.html#cb6-15https://fg.shigepon.net/API_SPEC.html#cb6-14https://fg.shigepon.net/API_SPEC.html#cb6-13https://fg.shigepon.net/API_SPEC.html#cb6-12https://fg.shigepon.net/API_SPEC.html#cb6-11https://fg.shigepon.net/API_SPEC.html#cb6-10https://fg.shigepon.net/API_SPEC.html#cb6-9https://fg.shigepon.net/API_SPEC.html#cb6-8https://fg.shigepon.net/API_SPEC.html#cb6-7https://fg.shigepon.net/API_SPEC.html#cb6-6https://fg.shigepon.net/API_SPEC.html#cb6-5https://fg.shigepon.net/API_SPEC.html#cb6-4https://fg.shigepon.net/API_SPEC.html#cb6-3https://fg.shigepon.net/API_SPEC.html#cb6-2https://fg.shigepon.net/API_SPEC.html#cb6-1{ "repo": "did:plc:xxx...", // ユーザーのDID (ログイン中のDID) "collection": "app.bsky.feed.generator", // コレクション名固定 "rkey": "my-feed", // フィードのレコードキー "record": { "$type": "app.bsky.feed.generator", "did": "did:web:fg.shigepon.net", // フィードジェネレーターのDID。本システムでは "did:web:fg.shigepon.net" に固定 "displayName": "My Custom Feed", // 表示名（必須） "description": "猫の画像だけを集めたフィードです", // 説明（オプショナル） "createdAt": "2024-06-08T14:14:00.000Z", // 作成日時 (ISO-8601フォーマット) "avatar": { // アバター画像がある場合のみ指定するBlobオブジェクト（オプショナル） "$type": "blob", "ref": { "$link": "bafybeih..." // アップロード時に取得したCID文字列 }, "mimeType": "image/png", "size": 12345 } } }
```

レスポンス (JSON): com.atproto.repo.putRecord の結果。以下のオブジェクトが返されます。

```
com.atproto.repo.putRecord
```


```
https://fg.shigepon.net/API_SPEC.html#cb7-4https://fg.shigepon.net/API_SPEC.html#cb7-3https://fg.shigepon.net/API_SPEC.html#cb7-2https://fg.shigepon.net/API_SPEC.html#cb7-1{ "uri": "at://did:plc:xxx.../app.bsky.feed.generator/my-feed", "cid": "bafyreih..." }
```


```
https://fg.shigepon.net/API_SPEC.html#cb7-4https://fg.shigepon.net/API_SPEC.html#cb7-3https://fg.shigepon.net/API_SPEC.html#cb7-2https://fg.shigepon.net/API_SPEC.html#cb7-1{ "uri": "at://did:plc:xxx.../app.bsky.feed.generator/my-feed", "cid": "bafyreih..." }
```

- 

          エンドポイント: POST /api/delete_record


- 

          ヘッダー:
          X-Requested-With: XMLHttpRequest (必須)


- 
        Cookie: 送信が必要 (session_id)

- 
        Content-Type: application/json

- https://fg.shigepon.net/API_SPEC.html#cb8-5https://fg.shigepon.net/API_SPEC.html#cb8-4https://fg.shigepon.net/API_SPEC.html#cb8-3https://fg.shigepon.net/API_SPEC.html#cb8-2https://fg.shigepon.net/API_SPEC.html#cb8-1
        リクエストボディ:

          {
  "repo": "did:plc:xxx...", // ユーザーのDID
  "collection": "app.bsky.feed.generator", // コレクション名固定
  "rkey": "my-feed" // 削除対象レコードキー
}


- https://fg.shigepon.net/API_SPEC.html#cb9-1

          レスポンス (JSON):
          成功時は空オブジェクト、もしくはステータスを含んだオブジェクトが返ります。


          {}


エンドポイント: POST /api/delete_record

```
POST /api/delete_record
```

ヘッダー: X-Requested-With: XMLHttpRequest (必須)

```
X-Requested-With: XMLHttpRequest
```

Cookie: 送信が必要 (session_id)

```
session_id
```

Content-Type: application/json

```
application/json
```

リクエストボディ:

```
https://fg.shigepon.net/API_SPEC.html#cb8-5https://fg.shigepon.net/API_SPEC.html#cb8-4https://fg.shigepon.net/API_SPEC.html#cb8-3https://fg.shigepon.net/API_SPEC.html#cb8-2https://fg.shigepon.net/API_SPEC.html#cb8-1{ "repo": "did:plc:xxx...", // ユーザーのDID "collection": "app.bsky.feed.generator", // コレクション名固定 "rkey": "my-feed" // 削除対象レコードキー }
```


```
https://fg.shigepon.net/API_SPEC.html#cb8-5https://fg.shigepon.net/API_SPEC.html#cb8-4https://fg.shigepon.net/API_SPEC.html#cb8-3https://fg.shigepon.net/API_SPEC.html#cb8-2https://fg.shigepon.net/API_SPEC.html#cb8-1{ "repo": "did:plc:xxx...", // ユーザーのDID "collection": "app.bsky.feed.generator", // コレクション名固定 "rkey": "my-feed" // 削除対象レコードキー }
```

レスポンス (JSON): 成功時は空オブジェクト、もしくはステータスを含んだオブジェクトが返ります。

```
https://fg.shigepon.net/API_SPEC.html#cb9-1{}
```


```
https://fg.shigepon.net/API_SPEC.html#cb9-1{}
```

- 

          エンドポイント: GET /api/list_records


- 

          ヘッダー:
          X-Requested-With: XMLHttpRequest (必須)


- 
        Cookie: 送信が必要 (session_id)

- 
        クエリパラメータ:


            repo (string, 必須) :
            レコード一覧を取得するユーザーのDID (例:
            did:plc:xxx...)


            collection (string, デフォルト:
            app.bsky.feed.generator) : 取得対象のコレクション

          limit (number, オプショナル) : 取得件数の上限

            cursor (string, オプショナル) :
            次ページ取得用のカーソル



- 
            repo (string, 必須) :
            レコード一覧を取得するユーザーのDID (例:
            did:plc:xxx...)

- 
            collection (string, デフォルト:
            app.bsky.feed.generator) : 取得対象のコレクション

- limit (number, オプショナル) : 取得件数の上限
- 
            cursor (string, オプショナル) :
            次ページ取得用のカーソル

- https://fg.shigepon.net/API_SPEC.html#cb10-24https://fg.shigepon.net/API_SPEC.html#cb10-23https://fg.shigepon.net/API_SPEC.html#cb10-22https://fg.shigepon.net/API_SPEC.html#cb10-21https://fg.shigepon.net/API_SPEC.html#cb10-20https://fg.shigepon.net/API_SPEC.html#cb10-19https://fg.shigepon.net/API_SPEC.html#cb10-18https://fg.shigepon.net/API_SPEC.html#cb10-17https://fg.shigepon.net/API_SPEC.html#cb10-16https://fg.shigepon.net/API_SPEC.html#cb10-15https://fg.shigepon.net/API_SPEC.html#cb10-14https://fg.shigepon.net/API_SPEC.html#cb10-13https://fg.shigepon.net/API_SPEC.html#cb10-12https://fg.shigepon.net/API_SPEC.html#cb10-11https://fg.shigepon.net/API_SPEC.html#cb10-10https://fg.shigepon.net/API_SPEC.html#cb10-9https://fg.shigepon.net/API_SPEC.html#cb10-8https://fg.shigepon.net/API_SPEC.html#cb10-7https://fg.shigepon.net/API_SPEC.html#cb10-6https://fg.shigepon.net/API_SPEC.html#cb10-5https://fg.shigepon.net/API_SPEC.html#cb10-4https://fg.shigepon.net/API_SPEC.html#cb10-3https://fg.shigepon.net/API_SPEC.html#cb10-2https://fg.shigepon.net/API_SPEC.html#cb10-1

          レスポンス (JSON):
          com.atproto.repo.listRecords
          の結果。以下のオブジェクトが返されます。


          {
  "records": [
    {
      "uri": "at://did:plc:xxx.../app.bsky.feed.generator/my-feed",
      "cid": "bafyreih...",
      "value": {
        "$type": "app.bsky.feed.generator",
        "did": "did:web:fg.shigepon.net",
        "displayName": "My Custom Feed",
        "description": "説明文",
        "createdAt": "2024-06-08T14:14:00.000Z",
        "avatar": { // 設定されている場合のみ存在
          "$type": "blob",
          "ref": {
            "$link": "bafybeih..."
          },
          "mimeType": "image/png",
          "size": 12345
        }
      }
    }
  ],
  "cursor": "..." // 次ページがある場合のみ設定
}


エンドポイント: GET /api/list_records

```
GET /api/list_records
```

ヘッダー: X-Requested-With: XMLHttpRequest (必須)

```
X-Requested-With: XMLHttpRequest
```

Cookie: 送信が必要 (session_id)

```
session_id
```

クエリパラメータ:
- 
            repo (string, 必須) :
            レコード一覧を取得するユーザーのDID (例:
            did:plc:xxx...)

- 
            collection (string, デフォルト:
            app.bsky.feed.generator) : 取得対象のコレクション

- limit (number, オプショナル) : 取得件数の上限
- 
            cursor (string, オプショナル) :
            次ページ取得用のカーソル


```
repo
```


```
did:plc:xxx...
```


```
collection
```


```
app.bsky.feed.generator
```


```
limit
```


```
cursor
```

レスポンス (JSON): com.atproto.repo.listRecords の結果。以下のオブジェクトが返されます。

```
com.atproto.repo.listRecords
```

```
https://fg.shigepon.net/API_SPEC.html#cb10-24https://fg.shigepon.net/API_SPEC.html#cb10-23https://fg.shigepon.net/API_SPEC.html#cb10-22https://fg.shigepon.net/API_SPEC.html#cb10-21https://fg.shigepon.net/API_SPEC.html#cb10-20https://fg.shigepon.net/API_SPEC.html#cb10-19https://fg.shigepon.net/API_SPEC.html#cb10-18https://fg.shigepon.net/API_SPEC.html#cb10-17https://fg.shigepon.net/API_SPEC.html#cb10-16https://fg.shigepon.net/API_SPEC.html#cb10-15https://fg.shigepon.net/API_SPEC.html#cb10-14https://fg.shigepon.net/API_SPEC.html#cb10-13https://fg.shigepon.net/API_SPEC.html#cb10-12https://fg.shigepon.net/API_SPEC.html#cb10-11https://fg.shigepon.net/API_SPEC.html#cb10-10https://fg.shigepon.net/API_SPEC.html#cb10-9https://fg.shigepon.net/API_SPEC.html#cb10-8https://fg.shigepon.net/API_SPEC.html#cb10-7https://fg.shigepon.net/API_SPEC.html#cb10-6https://fg.shigepon.net/API_SPEC.html#cb10-5https://fg.shigepon.net/API_SPEC.html#cb10-4https://fg.shigepon.net/API_SPEC.html#cb10-3https://fg.shigepon.net/API_SPEC.html#cb10-2https://fg.shigepon.net/API_SPEC.html#cb10-1{ "records": [ { "uri": "at://did:plc:xxx.../app.bsky.feed.generator/my-feed", "cid": "bafyreih...", "value": { "$type": "app.bsky.feed.generator", "did": "did:web:fg.shigepon.net", "displayName": "My Custom Feed", "description": "説明文", "createdAt": "2024-06-08T14:14:00.000Z", "avatar": { // 設定されている場合のみ存在 "$type": "blob", "ref": { "$link": "bafybeih..." }, "mimeType": "image/png", "size": 12345 } } } ], "cursor": "..." // 次ページがある場合のみ設定 }
```


```
https://fg.shigepon.net/API_SPEC.html#cb10-24https://fg.shigepon.net/API_SPEC.html#cb10-23https://fg.shigepon.net/API_SPEC.html#cb10-22https://fg.shigepon.net/API_SPEC.html#cb10-21https://fg.shigepon.net/API_SPEC.html#cb10-20https://fg.shigepon.net/API_SPEC.html#cb10-19https://fg.shigepon.net/API_SPEC.html#cb10-18https://fg.shigepon.net/API_SPEC.html#cb10-17https://fg.shigepon.net/API_SPEC.html#cb10-16https://fg.shigepon.net/API_SPEC.html#cb10-15https://fg.shigepon.net/API_SPEC.html#cb10-14https://fg.shigepon.net/API_SPEC.html#cb10-13https://fg.shigepon.net/API_SPEC.html#cb10-12https://fg.shigepon.net/API_SPEC.html#cb10-11https://fg.shigepon.net/API_SPEC.html#cb10-10https://fg.shigepon.net/API_SPEC.html#cb10-9https://fg.shigepon.net/API_SPEC.html#cb10-8https://fg.shigepon.net/API_SPEC.html#cb10-7https://fg.shigepon.net/API_SPEC.html#cb10-6https://fg.shigepon.net/API_SPEC.html#cb10-5https://fg.shigepon.net/API_SPEC.html#cb10-4https://fg.shigepon.net/API_SPEC.html#cb10-3https://fg.shigepon.net/API_SPEC.html#cb10-2https://fg.shigepon.net/API_SPEC.html#cb10-1{ "records": [ { "uri": "at://did:plc:xxx.../app.bsky.feed.generator/my-feed", "cid": "bafyreih...", "value": { "$type": "app.bsky.feed.generator", "did": "did:web:fg.shigepon.net", "displayName": "My Custom Feed", "description": "説明文", "createdAt": "2024-06-08T14:14:00.000Z", "avatar": { // 設定されている場合のみ存在 "$type": "blob", "ref": { "$link": "bafybeih..." }, "mimeType": "image/png", "size": 12345 } } } ], "cursor": "..." // 次ページがある場合のみ設定 }
```

## 期待されるWebアプリの実装ワークフロー例
1. 
        認証: ユーザーがWebアプリにアクセスし、GET /oauth/login?handle=...
        へリダイレクトしてBlueskyでOAuth認証を行う。

2. 
        フィードロジックの定義:
        WebアプリのUI上でフィードの条件や名前を入力させる。

3. 
        サーバーへロジックのデプロイ: UIから
        POST /fg/put
        を叩き、サーバー（バックエンド）の抽出ロジック（フィルタなど）を登録する。

4. 
        アバターのアップロード (任意):
        アイコン画像がある場合、POST /api/upload_blob
        でPDSに画像をアップロードしてBlob参照を受け取る。

5. 
        Blueskyネットワークへの宣言 (PDSへの書き込み):
        POST /api/put_record
        を使い、app.bsky.feed.generator
        レコードをユーザーのPDSに作成する。これでBlueskyの公式クライアント等からフィードが見えるようになる。


```
GET /oauth/login?handle=...
```


```
POST /fg/put
```


```
POST /api/upload_blob
```


```
POST /api/put_record
```


```
app.bsky.feed.generator
```

## 4. クエリ構文 (condition フィールドの仕様)
```
condition
```

/fg/put APIで送信する condition フィールドには、フィード의 型 (type) に応じて独自のクエリ言語を使用します。

```
/fg/put
```


```
condition
```


```
type
```

文字のエスケープとダブルクォーテーションについて: - フィルター型 ("type": "Filter"): クエリ内で文字列（例: keyword(豚肉)）を指定する際、ダブルクォーテーションは使用しません。また、カンマで区切ることで複数の単語を論理和（いずれかに一致）として一度に指定できます（例: keyword(猫,ねこ,ネコ) ）。 - 検索型 ("type": "Search"): 比較対象の文字列（例: "1"）をダブルクォーテーション " で囲む必要があります。文字列内に " や \ が含まれる場合は \ でエスケープしてください。/fg/put はJSON形式でリクエストを送信するため、JSONの文字列表現としてのエスケープと二重になる点にご注意ください（例: JSONデータとしては "condition": "filter { text.raw equals \\\"1\\\" }" のように記述します）。 - 文字列リストの指定（containsAny, containsAll 等）をする際は、JSON風のブラケット [] で囲み、各要素をダブルクォーテーションで囲んでカンマ区切りにします（例: text containsAny ["cat", "dog"]）。

```
"type": "Filter"
```


```
keyword(豚肉)
```


```
keyword(猫,ねこ,ネコ)
```


```
"type": "Search"
```


```
"1"
```


```
"
```


```
"
```


```
\
```


```
\
```


```
/fg/put
```


```
"condition": "filter { text.raw equals \\\"1\\\" }"
```


```
containsAny
```


```
containsAll
```


```
[]
```


```
text containsAny ["cat", "dog"]
```

```
"type": "Filter"
```

Jetstreamからリアルタイムに流れてくるポストをフィルタリングするための条件式です。 論理演算子 && (AND)、|| (OR)、! (NOT) と括弧 () を組み合わせて定義します。

```
&&
```


```
||
```


```
!
```


```
()
```

利用可能なすべての関数:
- 
        テキスト・形態素関連


            word(単語...) :
            ポストのテキストを形態素解析した結果（名詞以外も含む）に、指定した単語のいずれかが含まれていれば一致


            keyword(単語...) :
            ポストのテキストを形態素解析した結果（名詞のみ）に、指定した単語のいずれかが含まれていれば一致


            sequence([単語...], ...) :
            形態素解析結果（名詞以外も含む）に、指定した複数の単語リストの条件が順番通りに連続して出現すれば一致（例:
            sequence([私,僕], [は,が])）


            chars(文字列...) :
            ポストのテキスト（単純な部分文字列検索）に、指定した文字列のいずれかが含まれていれば一致


            regex(正規表現) :
            ポストのテキストが指定した正規表現にマッチすれば一致


            hasminor() :
            全体の中で出現頻度の低い（レアな）単語を含んでいれば一致


            hasmajor() : 出現頻度の高い単語を含んでいれば一致


            minwords(数値) :
            名詞を、指定した数値の個数以上含んでいれば一致



- 
            word(単語...) :
            ポストのテキストを形態素解析した結果（名詞以外も含む）に、指定した単語のいずれかが含まれていれば一致

- 
            keyword(単語...) :
            ポストのテキストを形態素解析した結果（名詞のみ）に、指定した単語のいずれかが含まれていれば一致

- 
            sequence([単語...], ...) :
            形態素解析結果（名詞以外も含む）に、指定した複数の単語リストの条件が順番通りに連続して出現すれば一致（例:
            sequence([私,僕], [は,が])）

- 
            chars(文字列...) :
            ポストのテキスト（単純な部分文字列検索）に、指定した文字列のいずれかが含まれていれば一致

- 
            regex(正規表現) :
            ポストのテキストが指定した正規表現にマッチすれば一致

- 
            hasminor() :
            全体の中で出現頻度の低い（レアな）単語を含んでいれば一致

- 
            hasmajor() : 出現頻度の高い単語を含んでいれば一致

- 
            minwords(数値) :
            名詞を、指定した数値の個数以上含んでいれば一致

- 
        アカウント・属性関連


            from(DID...) :
            ポストを投稿したアカウントのDIDが、指定したDIDのいずれかであれば一致


            mention(DID...) :
            ポストに含まれるメンション先のDIDが、指定したDIDのいずれかであれば一致


            link(文字列...) :
            ポストに含まれるリンク（URL）に、指定した文字列のいずれかが含まれていれば一致


            tag(タグ...) :
            ポストに含まれるタグが、指定したタグのいずれかであれば一致


            label(ラベル...) :
            ポストに付与されているラベルが、指定したラベルのいずれかであれば一致



- 
            from(DID...) :
            ポストを投稿したアカウントのDIDが、指定したDIDのいずれかであれば一致

- 
            mention(DID...) :
            ポストに含まれるメンション先のDIDが、指定したDIDのいずれかであれば一致

- 
            link(文字列...) :
            ポストに含まれるリンク（URL）に、指定した文字列のいずれかが含まれていれば一致

- 
            tag(タグ...) :
            ポストに含まれるタグが、指定したタグのいずれかであれば一致

- 
            label(ラベル...) :
            ポストに付与されているラベルが、指定したラベルのいずれかであれば一致

- 
        添付メディア・引用関連

record(文字列...) :
            引用している他ポスト（レコード）のURLに、指定した文字列のいずれかが含まれていれば一致


            external(文字列...) :
            引用している外部サイトのURLに、指定した文字列のいずれかが含まれていれば一致


            image(文字列...) :
            添付された画像のALT（代替テキスト）に、指定した文字列のいずれかが含まれていれば一致


            video(文字列...) :
            添付された動画のALT（代替テキスト）に、指定した文字列のいずれかが含まれていれば一致



- 
            record(文字列...) :
            引用している他ポスト（レコード）のURLに、指定した文字列のいずれかが含まれていれば一致

- 
            external(文字列...) :
            引用している外部サイトのURLに、指定した文字列のいずれかが含まれていれば一致

- 
            image(文字列...) :
            添付された画像のALT（代替テキスト）に、指定した文字列のいずれかが含まれていれば一致

- 
            video(文字列...) :
            添付された動画のALT（代替テキスト）に、指定した文字列のいずれかが含まれていれば一致

- 
        存在確認関連 (引数なし)

          hasmention() : メンションを含んでいれば一致
          haslink() : リンク（URL）を含んでいれば一致
          hastag() : タグを含んでいれば一致

            hasrecord() :
            他のポスト（レコード）を引用していれば一致


            hasexternal() :
            外部サイトのリンク（カード）を引用していれば一致

          hasimage() : 画像が添付されていれば一致
          hasvideo() : 動画が添付されていれば一致

            haslabel() : 何らかのラベルが付与されていれば一致

          isreply() : 他のポストへのリプライであれば一致


- hasmention() : メンションを含んでいれば一致
- haslink() : リンク（URL）を含んでいれば一致
- hastag() : タグを含んでいれば一致
- 
            hasrecord() :
            他のポスト（レコード）を引用していれば一致

- 
            hasexternal() :
            外部サイトのリンク（カード）を引用していれば一致

- hasimage() : 画像が添付されていれば一致
- hasvideo() : 動画が添付されていれば一致
- 
            haslabel() : 何らかのラベルが付与されていれば一致

- isreply() : 他のポストへのリプライであれば一致
- 
            word(単語...) :
            ポストのテキストを形態素解析した結果（名詞以外も含む）に、指定した単語のいずれかが含まれていれば一致

- 
            keyword(単語...) :
            ポストのテキストを形態素解析した結果（名詞のみ）に、指定した単語のいずれかが含まれていれば一致

- 
            sequence([単語...], ...) :
            形態素解析結果（名詞以外も含む）に、指定した複数の単語リストの条件が順番通りに連続して出現すれば一致（例:
            sequence([私,僕], [は,が])）

- 
            chars(文字列...) :
            ポストのテキスト（単純な部分文字列検索）に、指定した文字列のいずれかが含まれていれば一致

- 
            regex(正規表現) :
            ポストのテキストが指定した正規表現にマッチすれば一致

- 
            hasminor() :
            全体の中で出現頻度の低い（レアな）単語を含んでいれば一致

- 
            hasmajor() : 出現頻度の高い単語を含んでいれば一致

- 
            minwords(数値) :
            名詞を、指定した数値の個数以上含んでいれば一致


```
word(単語...)
```


```
keyword(単語...)
```


```
sequence([単語...], ...)
```


```
sequence([私,僕], [は,が])
```


```
chars(文字列...)
```


```
regex(正規表現)
```


```
hasminor()
```


```
hasmajor()
```


```
minwords(数値)
```

- 
            from(DID...) :
            ポストを投稿したアカウントのDIDが、指定したDIDのいずれかであれば一致

- 
            mention(DID...) :

ポストに含まれるメンション先のDIDが、指定したDIDのいずれかであれば一致

- 
            link(文字列...) :
            ポストに含まれるリンク（URL）に、指定した文字列のいずれかが含まれていれば一致

- 
            tag(タグ...) :
            ポストに含まれるタグが、指定したタグのいずれかであれば一致

- 
            label(ラベル...) :
            ポストに付与されているラベルが、指定したラベルのいずれかであれば一致


```
from(DID...)
```


```
mention(DID...)
```


```
link(文字列...)
```


```
tag(タグ...)
```


```
label(ラベル...)
```

- 
            record(文字列...) :
            引用している他ポスト（レコード）のURLに、指定した文字列のいずれかが含まれていれば一致

- 
            external(文字列...) :
            引用している外部サイトのURLに、指定した文字列のいずれかが含まれていれば一致

- 
            image(文字列...) :
            添付された画像のALT（代替テキスト）に、指定した文字列のいずれかが含まれていれば一致

- 
            video(文字列...) :
            添付された動画のALT（代替テキスト）に、指定した文字列のいずれかが含まれていれば一致


```
record(文字列...)
```


```
external(文字列...)
```


```
image(文字列...)
```


```
video(文字列...)
```

- hasmention() : メンションを含んでいれば一致
- haslink() : リンク（URL）を含んでいれば一致
- hastag() : タグを含んでいれば一致
- 
            hasrecord() :
            他のポスト（レコード）を引用していれば一致

- 
            hasexternal() :
            外部サイトのリンク（カード）を引用していれば一致

- hasimage() : 画像が添付されていれば一致
- hasvideo() : 動画が添付されていれば一致
- 
            haslabel() : 何らかのラベルが付与されていれば一致

- isreply() : 他のポストへのリプライであれば一致

```
hasmention()
```


```
haslink()
```


```
hastag()
```


```
hasrecord()
```


```
hasexternal()
```


```
hasimage()
```


```
hasvideo()
```


```
haslabel()
```


```
isreply()
```

例:

```
keyword(豚肉) && keyword(もやし)
```


```
keyword(豚肉) && keyword(もやし)
```


```
!hasmajor() && hasminor() && minwords(2) && !isreply()
```


```
!hasmajor() && hasminor() && minwords(2) && !isreply()
```

```
"type": "Search"
```

過去に蓄積されたレコードやユーザー自身の関係性から動的にポストを取得・構築するための定義式です。 以下の最大4つのセクション（params, source, filter, sort）で構成されます。

```
params
```


```
source
```


```
filter
```


```
sort
```


#### 1. params セクション
変数の定義を行います。
- 
        ユーザー定義変数: $変数名 = 値; (例:
        $my_list = ["foo", "bar"];)

- 
        システム固有変数:

          $now : 現在の日付時刻

            $me : カスタムフィードにアクセスをしたアカウントのDID



- $now : 現在の日付時刻
- 
            $me : カスタムフィードにアクセスをしたアカウントのDID


```
$変数名 = 値;
```


```
$my_list = ["foo", "bar"];
```

- $now : 現在の日付時刻
- 
            $me : カスタムフィードにアクセスをしたアカウントのDID


```
$now
```


```
$me
```


#### 2. source セクション
ベースとなるポストの集合を定義します。和集合 |、積集合 & で結合可能です。

```
|
```


```
&
```

- 
        postedBy(引数, ソート順) :
        指定したDIDのユーザーが投稿したポスト

- 
        mentionedBy(引数, ソート順) :
        指定したDIDのユーザーが行ったメンション

- 
        mentionedTo(引数, ソート順) :
        指定したDIDのユーザー宛てのメンション

- 
        likedBy(引数, ソート順) :
        指定したDIDのユーザー（本システムアクセス済みのもの）が「いいね」したポスト

- 
        repostedBy(引数, ソート順) :
        指定したDIDのユーザー（本システムアクセス済みのもの）がリポストしたポスト

- 
        followedBy(引数, ソート順) :
        指定したDIDのユーザーにフォローされているアカウントによるポスト

- all(ソート順) : 全ポスト

```
postedBy(引数, ソート順)
```


```
mentionedBy(引数, ソート順)
```


```
mentionedTo(引数, ソート順)
```


```
likedBy(引数, ソート順)
```


```
repostedBy(引数, ソート順)
```


```
followedBy(引数, ソート順)
```


```
all(ソート順)
```

※ 引数 にはDID文字列、DIDのリスト、または $me などの変数を指定できます。

```
$me
```


#### 3. filter セクション
ソースに対する絞り込み条件を定義します。and、or、not と括弧 () で結合可能です。

```
and
```


```
or
```


```
not
```


```
()
```

- 
        対象フィールド:


            文字列 / リスト対象: text (形態素),
            text.raw (生テキスト), langs,
            labels, facets.features.tag


            日時対象: createdAt, createdAt.year,
            createdAt.month, createdAt.day,
            createdAt.hour, createdAt.minute,
            createdAt.second


            存在確認のみ: reply, embed.images,
            embed.video, embed.external,
            embed.record


            仮想フィールド: repo (投稿者のDID),
            symbol (ポスト内のレアな単語)


            ソース参照:
            @source.フィールド名
            (ソースセクションで取得した元のポストの値を参照。例：@source.symbol)



- 
            文字列 / リスト対象: text (形態素),
            text.raw (生テキスト), langs,
            labels, facets.features.tag

- 
            日時対象: createdAt, createdAt.year,
            createdAt.month, createdAt.day,
            createdAt.hour, createdAt.minute,
            createdAt.second

- 
            存在確認のみ: reply, embed.images,
            embed.video, embed.external,
            embed.record

- 
            仮想フィールド: repo (投稿者のDID),
            symbol (ポスト内のレアな単語)

- 
            ソース参照:
            @source.フィールド名
            (ソースセクションで取得した元のポストの値を参照。例：@source.symbol)

- 
        比較演算子:


            時間条件: ==, !=, >=,
            <=, >, <


            文字列条件: equals (一致),
            notEquals (不一致), startsWith (で始まる),
            endsWith (で終わる), contains (含む),
            matches (正規表現一致),
            notMatches (正規表現不一致)

文字列リスト条件: containsAny (いずれかを含む),
            containsAll (すべてを含む)


            存在確認条件: exists (存在する),
            notExists (存在しない)



- 
            時間条件: ==, !=, >=,
            <=, >, <

- 
            文字列条件: equals (一致),
            notEquals (不一致), startsWith (で始まる),
            endsWith (で終わる), contains (含む),
            matches (正規表現一致),
            notMatches (正規表現不一致)

- 
            文字列リスト条件: containsAny (いずれかを含む),
            containsAll (すべてを含む)

- 
            存在確認条件: exists (存在する),
            notExists (存在しない)

- 
            文字列 / リスト対象: text (形態素),
            text.raw (生テキスト), langs,
            labels, facets.features.tag

- 
            日時対象: createdAt, createdAt.year,
            createdAt.month, createdAt.day,
            createdAt.hour, createdAt.minute,
            createdAt.second

- 
            存在確認のみ: reply, embed.images,
            embed.video, embed.external,
            embed.record

- 
            仮想フィールド: repo (投稿者のDID),
            symbol (ポスト内のレアな単語)

- 
            ソース参照:
            @source.フィールド名
            (ソースセクションで取得した元のポストの値を参照。例：@source.symbol)


```
text
```


```
text.raw
```


```
langs
```


```
labels
```


```
facets.features.tag
```


```
createdAt
```


```
createdAt.year
```


```
createdAt.month
```


```
createdAt.day
```


```
createdAt.hour
```


```
createdAt.minute
```


```
createdAt.second
```


```
reply
```


```
embed.images
```


```
embed.video
```


```
embed.external
```


```
embed.record
```


```
repo
```


```
symbol
```


```
@source.フィールド名
```


```
@source.symbol
```

- 
            時間条件: ==, !=, >=,
            <=, >, <

- 
            文字列条件: equals (一致),
            notEquals (不一致), startsWith (で始まる),
            endsWith (で終わる), contains (含む),
            matches (正規表現一致),
            notMatches (正規表現不一致)

- 
            文字列リスト条件: containsAny (いずれかを含む),
            containsAll (すべてを含む)

- 
            存在確認条件: exists (存在する),
            notExists (存在しない)


```
==
```


```
!=
```


```
>=
```


```
<=
```


```
>
```


```
<
```


```
equals
```


```
notEquals
```


```
startsWith
```


```
endsWith
```


```
contains
```


```
matches
```


```
notMatches
```


```
containsAny
```


```
containsAll
```


```
exists
```


```
notExists
```


#### 4. sort セクション
最終的なポストの並び順と出力件数を指定します。抽出する件数を引数に指定できます（省略時または0の場合は最大1000件）。
- newest(N) : 新しい方から古い方へソート
- oldest(N) : 古い方から新しい方へソート
- 
        random(N) :
        ランダムにソート（ただし同じ日の間に同じユーザーがアクセスすれば同じ結果を返す）

- 
        urandom(N) :
        完全ランダムにソート（リロードする度に違う結果を返す）

- 
        mix(N, ソート順) :
        source で抽出したポストを1つ置き、その後に
        filter で抽出したポストを
        N 個置くという構成を繰り返す（例:
        mix(3, newest)）。件数制限と併用する場合は
        mix(3, newest(100)) のように記述します。


```
newest(N)
```


```
oldest(N)
```


```
random(N)
```


```
urandom(N)
```


```
mix(N, ソート順)
```


```
source
```


```
filter
```


```
N
```


```
mix(3, newest)
```


```
mix(3, newest(100))
```

例:

```
source { postedBy($me, random) } filter { embed.images exists } sort { random }
```


```
source { postedBy($me, random) } filter { embed.images exists } sort { random }
```


```
source { likedBy($me, random) & repostedBy($me, random) }
```


```
source { likedBy($me, random) & repostedBy($me, random) }
```


```
source { postedBy($me, newest) } filter { embed.images exists } sort { mix(3, newest(100)) }
```


```
source { postedBy($me, newest) } filter { embed.images exists } sort { mix(3, newest(100)) }
```
