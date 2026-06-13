# Rito FeedEditor - 設計仕様書 (SPEC.md)

Rito FeedEditorは、Blueskyのカスタムフィード管理サーバー（API）と連携し、直感的かつ洗練されたUIでカスタムフィードを登録・編集・削除・管理できるNext.js製Webアプリケーションです。

---

## 1. アプリケーション概要

* **アプリケーション名**: Rito FeedEditor
* **主要ターゲット**: Blueskyでカスタムフィードを簡単に作成・運用したいユーザーおよびエンジニア
* **主要機能**:
  1. **Bluesky OAuth認証**: ハンドル名を入力しセッションを開始/終了する。さらに、`@passport`（atpassport.net）を用いたハンドル選択ログインにも対応する。
  2. **フィード一覧表示**: 登録済みのフィード（Filter型 / Search型）をカード形式で可視化する
  3. **フィードの作成と更新**: `rkey`（レコードキー）と`condition`（抽出クエリ）を編集してデプロイする
  4. **フィードの削除**: 登録済みのフィードを安全に削除する
  5. **UI/UXの極大化**: 暗色ベースのモダンなデザイン、グラスモルフィズム、美しいトランジションとマイクロインタラクション

---

## 2. 技術スタック & 構成

* **フレームワーク**: Next.js (App Router, TypeScript)
* **スタイリング & UI**: Tailwind CSS v4 + shadcn/ui
  * shadcn/ui コンポーネント群（Card, Button, Input, Table, Badge, Dialog等）を活用
  * Tailwind CSS v4 による効率的かつプレミアムなスタイリング設計（ダークモード、カスタムトランジション）
  * 暗色バックグラウンド、ガラス調エフェクト（backdrop blur）、発光グラデーションボーダーの適用
* **API通信**: Fetch API / Axios (Cookie連携用の `credentials: 'include'` を明示)
* **状態管理**: React Hooks (`useState`, `useEffect`, `useContext` / `useReducer` によるSPA的状態遷移)

---

## 3. デザインシステム (UI/UX ガイドライン)

プレミアム感があり、直感的に操作できるデザインを実装します。

### カラーパレット (Sleek Dark & Glow Theme)
* **Background**: 深いダークグレー〜紺のグラデーション (`#0a0b10` 〜 `#12131e`)
* **Surface (Card)**: 半透明のグラスモルフィズム (`rgba(255, 255, 255, 0.03)` + `backdrop-filter: blur(16px)`)
* **Border**: 微細な発光ボーダーとネオングラデーション (`rgba(255, 255, 255, 0.08)`)
* **Primary (Glow)**: 鮮やかなサイアン/パープルのネオン系 (`#3b82f6`, `#8b5cf6`, `#d946ef`)
* **Text**: メインテキストはピュアホワイト (`#ffffff`)、サブテキストは淡いグレー (`#94a3b8`)

### タイポグラフィ
* フォントファミリーには現代的で視認性の高い `Inter` や `Outfit` (Google Fonts) を適用し、ブラウザ標準フォントは避けます。

### マイクロアニメーション
* ボタンのホバー時におけるスケールアップと淡い発光（Glow）エフェクト
* モーダルやフォーム展開時のフェードイン＋スライドアップ（CSS View Transitions または標準CSSアニメーション）

---

## 4. 画面遷移とコンポーネント構成

SPA形式またはNext.jsページ遷移を用いて、シームレスな体験を提供します。

### ① ログイン画面 (Login Page)
* **ビジュアル**: 画面中央に浮かび上がる美しいグラスモルフィズムのログインカード。背景にはゆっくり動くグラデーションオーブ。
* **入力・選択項目**: 
  * Blueskyハンドル名（入力プレースホルダー例: `alice.bsky.social`）
  * 「@passport でログイン」ボタン（簡単ログイン用）
* **機能**: 
  * **通常ログイン**: ハンドル名入力後に「ログイン」ボタン押下で、APIサーバーの `GET /oauth/login?handle=xxx&redirect=yyy` へ遷移。
  * **@passport ログイン**: 「@passport でログイン」ボタン押下時に、外部サービス `https://atpassport.net/authentication?callback=...&atpstate=...` へ遷移。コールバック先には自サーバーの `/api/auth/atpassport/callback` を指定する。

### ② ダッシュボード画面 (Dashboard)
ログイン成功後に遷移するメイン画面です。

* **ヘッダー**: 
  * アプリ名「Rito FeedEditor」のロゴ（グラデーションテキスト）
  * 現在ログイン中のユーザーのハンドル名表示
  * ログアウトボタン（ホバー時に危険色へ滑らかに変化）
* **メインエリア**:
  * **フィード作成セクション**: 
    * `rkey`、`type` (Filter/Search)、`condition` (クエリ) を入力するスタイリッシュなフォーム。
    * conditionのシンタックスを支援するプレースホルダーや簡易ガイドの併記。
    * **「デプロイして試す」ボタン**: 押下時に `POST /fg/put` でデプロイを行い、成功時に `https://bsky.app/profile/${did}/feed/${rkey}` のURLへ新規タブで遷移してBluesky公式クライアント等で動作テストを行えるようにする。
  * **登録済みフィード一覧セクション**:
    * 登録されているフィードをグリッドカード形式で表示。
    * 各カードには、タイプ（Filter/Searchを示すバッジ）、rkey、クエリ、削除ボタンに加え、該当フィードを直接Blueskyで開く「Blueskyで試す」ボタン/リンクを配置。
    * カードホバー時に浮き上がる（3Dホバーまたはスケール）アニメーション。

---

## 5. API 連携仕様

バックエンドAPIサーバー（ベースURL: `https://fg.shigepon.net` など、環境変数で変更可能にする）と以下のように通信します。
特記事項として、`/api/*` 配下のエンドポイントでは、CSRF対策として **`X-Requested-With: XMLHttpRequest`** ヘッダーの付与が必須となります。

| 機能 | エンドポイント | メソッド | 送信パラメータ / ヘッダー |
| :--- | :--- | :--- | :--- |
| **OAuthログイン** | `/oauth/login` | `GET` | クエリ: `handle`, `redirect` (ブラウザで遷移) |
| **OAuthログアウト** | `/oauth/logout` | `GET` | `credentials: 'include'` |
| **フィード一覧取得** | `/fg/list` | `GET` | `credentials: 'include'` |
| **フィード登録・更新** | `/fg/put` | `POST` | Body: `{ type, rkey, condition }`, `credentials: 'include'`, `Content-Type: application/json` |
| **フィード削除** | `/fg/delete` | `POST` | Body: `{ rkey }`, `credentials: 'include'`, `Content-Type: application/json` |
| **セッション情報取得** | `/api/get_session` | `GET` | `credentials: 'include'`, `X-Requested-With: XMLHttpRequest` |
| **@passport認証開始** | `https://atpassport.net/authentication` | `GET` | クエリ: `callback`, `atpstate` (外部サービスへのリダイレクト) |
| **@passportコールバック** | `/api/auth/atpassport/callback` | `GET` | クエリ: `handle`, `did`, `pdsurl`, `atpstate` (自サーバーAPIルート)。ハンドル情報抽出後、APIサーバーの `/oauth/login?handle=xxx&redirect=yyy` へ自動でリダイレクトする。 |

---

## 6. 実装のステップ

1. **ベースデザインとCSS変数の作成**: `app/globals.css` にカラーシステム、グラスモルフィズム、フォントの設定を行う。
2. **APIクライアントユーティリティの作成**: 送信ヘッダー（`X-Requested-With: XMLHttpRequest`）や認証オプション（`withCredentials: true`）を共通化したAxios/Fetch設定を行う。
3. **認証状態判定 & ログインページの構築**: Cookieの状態やセッション開始フローを構築。また、`@passport` 連携のためにコールバックを受ける自サーバーAPIルート（`/api/auth/atpassport/callback`）を実装する。
4. **ダッシュボード & フィード一覧の構築**: `/fg/list` からデータを取得し表示。
5. **フィード操作（登録・削除）の実装**: 送信時のエラーハンドリング（特に401/403/400）の表示の実装。
