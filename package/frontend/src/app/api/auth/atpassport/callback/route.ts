import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get("handle");
  const did = searchParams.get("did");
  const pdsurl = searchParams.get("pdsurl");
  const atpstate = searchParams.get("atpstate");

  // デフォルトのAPIサーバーURL。環境変数から取得、未指定なら https://fg.shigepon.net を使用
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://fg.shigepon.net";

  if (!handle) {
    return NextResponse.json({ error: "Missing handle parameter" }, { status: 400 });
  }

  // クライアントのベースURLを環境変数またはリクエストヘッダーから動的に取得（プロキシ対応）
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto") || "https";
  const origin = process.env.NEXT_PUBLIC_APP_URL 
    ? process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "")
    : forwardedHost 
      ? `${forwardedProto}://${forwardedHost}` 
      : request.nextUrl.origin;

  // APIサーバーのOAuth開始エンドポイントへリダイレクト
  // 認証完了後に元のトップページ（origin/）に戻るように redirect パラメータを指定
  const targetUrl = new URL(`${API_BASE_URL}/oauth/login`);
  targetUrl.searchParams.set("handle", handle);
  targetUrl.searchParams.set("redirect", `${origin}/`);

  return NextResponse.redirect(targetUrl.toString());
}
