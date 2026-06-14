import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  LogIn,
  Search,
  Settings2,
  Tag,
  Globe,
  Pencil,
  Trash2,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  BookOpen,
  Sparkles,
  Filter,
  SlidersHorizontal,
  Info,
  ShieldCheck,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "使い方 | Rito Feed Editor",
  description:
    "Rito Feed Editor の使い方ガイド。Bluesky カスタムフィードの作成・編集・反映方法を解説します。",
};

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center shrink-0">
          <Icon className="w-4.5 h-4.5 text-blue-400" size={18} />
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <div className="pl-12 space-y-4">{children}</div>
    </section>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(34,139,230,0.4)]">
          {number}
        </div>
        <div className="w-[1px] flex-1 bg-gradient-to-b from-blue-800/40 to-transparent mt-1" />
      </div>
      <div className="pb-6">
        <p className="text-sm font-semibold text-slate-200 mb-2">{title}</p>
        <div className="text-sm text-slate-400 leading-relaxed space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function Note({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}) {
  const styles = {
    info: {
      border: "border-blue-900/60",
      bg: "bg-blue-950/30",
      icon: <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />,
    },
    warning: {
      border: "border-amber-900/60",
      bg: "bg-amber-950/20",
      icon: <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />,
    },
    tip: {
      border: "border-emerald-900/60",
      bg: "bg-emerald-950/20",
      icon: <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />,
    },
  };
  const s = styles[type];
  return (
    <div
      className={`flex gap-3 p-3 rounded-xl border ${s.border} ${s.bg}`}
    >
      {s.icon}
      <p className="text-xs text-slate-400 leading-relaxed">{children}</p>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center px-1.5 py-0.5 rounded border border-slate-700 bg-slate-900 text-slate-300 text-[11px] font-mono">
      {children}
    </kbd>
  );
}

const toc = [
  { id: "overview", label: "Rito Feed Editorとは" },
  { id: "login", label: "ログイン" },
  { id: "create", label: "フィードを作成する" },
  { id: "search-conditions", label: "検索条件の設定" },
  { id: "feed-settings", label: "フィード設定" },
  { id: "edit", label: "フィードを編集する" },
  { id: "advanced", label: "クエリ直接編集" },
  { id: "faq", label: "よくある質問" },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#07080e] text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-900/60 bg-slate-950/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 p-[1px]">
              <div className="w-full h-full bg-[#0f1624] flex items-center justify-center rounded-lg">
                <span className="text-blue-400 font-bold text-base leading-none">#</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Rito Feed Editor
              </h1>
              <p className="text-[10px] text-slate-500 -mt-1 font-mono">
                Bluesky Custom Feed builder
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            ダッシュボードに戻る
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-10 flex gap-10">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-24 space-y-1">
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3 px-2">
              目次
            </p>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 transition-all group"
              >
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-900 mt-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-blue-400 hover:text-blue-300 hover:bg-blue-950/30 transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                ダッシュボードへ
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 space-y-14">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/40 p-8">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
                使い方ガイド
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
              Rito Feed Editor の使い方
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Bluesky のカスタムフィードをキーワードやハッシュタグで簡単に作成・管理できるツールです。
              このガイドでは、ログインからフィードの反映まで順を追って説明します。
            </p>

            {/* API credit */}
            <div className="mt-6 flex items-start gap-3 p-3 rounded-xl border border-slate-700/60 bg-slate-900/60">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                本アプリは{" "}
                <a
                  href="https://fg.shigepon.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  fg.shigepon.net
                </a>{" "}
                で提供されている{" "}
                <a
                  href="https://bsky.app/profile/shigepon.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @shigepon.net
                </a>{" "}
                さんの「Blueskyカスタムフィード作成ツールのAPI」サービスを利用しています。
                このAPIが提供するすべての機能を実装しているわけではありません。
                高度な条件指定や全機能を利用したい場合は、「クエリ直接編集」モードをお使いください。
              </p>
            </div>
          </div>

          {/* 1. Overview */}
          <Section id="overview" icon={Sparkles} title="Rito Feed Editorとは">
            <p className="text-sm text-slate-400 leading-relaxed">
              Rito Feed Editor は、Bluesky（AT Protocol）上の
              <strong className="text-slate-200">カスタムフィード（Custom Feed）</strong>
              を GUI で作成・管理するためのツールです。
              なお、本サイトでサポートするのはフィルタ方式のみとなります。
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              通常、カスタムフィードを作成するにはクエリ言語の知識が必要ですが、Rito Feed Editor を使えば
              キーワードやハッシュタグを入力するだけで、フィードを自動的に構成して Bluesky に反映できます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { icon: Search, label: "キーワード検索", desc: "含める/除外する単語を指定" },
                { icon: Tag, label: "ハッシュタグ絞り込み", desc: "ハッシュタグで投稿を絞り込み" },
                { icon: Filter, label: "フォームorクエリ", desc: "GUI入力と直接編集を切替可能" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 space-y-2"
                >
                  <f.icon className="w-4 h-4 text-blue-400" />
                  <p className="text-sm font-semibold text-slate-200">{f.label}</p>
                  <p className="text-xs text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 2. Login */}
          <Section id="login" icon={LogIn} title="ログイン">
            <p className="text-sm text-slate-400 leading-relaxed">
              Rito Feed Editor には Bluesky アカウントでのログインが必要です。
              2 つのログイン方法に対応しています。
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-blue-900/40 bg-blue-950/20">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <p className="text-sm font-semibold text-blue-300">
                    ① @passport でログイン（推奨）
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <a
                    href="https://atpassport.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    @passport
                  </a>{" "}
                  を使うことで、ハンドルをこのサービス上で入力することなく、安全にログインできます。
                  「@passport でログイン」ボタンをクリックし、画面の指示に従ってください。
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40">
                <div className="flex items-center gap-2 mb-2">
                  <Key className="w-4 h-4 text-slate-400" />
                  <p className="text-sm font-semibold text-slate-200">
                    ② atproto アカウントでログイン
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bluesky のハンドル名（例:{" "}
                  <code className="font-mono text-slate-300">@example.bsky.social</code>）を入力してログインします。
                  ハンドル入力欄の左側に「@」が表示されているので、
                  <code className="font-mono text-slate-300">example.bsky.social</code> のように
                  @ を除いて入力し、「ログイン」を押すと Bluesky の OAuth 認証画面に移動します。
                  アプリパスワードは使用できません。
                </p>
              </div>
            </div>

            <Note type="info">
              どちらのログイン方法も OAuth 認証を使用しています。パスワードを直接このサービスに入力することはありません。
            </Note>
          </Section>

          {/* 3. Create feed */}
          <Section id="create" icon={Search} title="フィードを作成する">
            <p className="text-sm text-slate-400 leading-relaxed">
              ダッシュボード右上の「＋ 新規フィード作成」ボタンをクリックすると、
              2 ステップのフォームが開きます。
            </p>

            <div className="space-y-0">
              <Step number={1} title="ステップ 1：検索条件を設定する">
                <p>
                  フィードに表示したい投稿の絞り込み条件を入力します。
                  「形態素」「テキスト」「ハッシュタグ」「除外する単語」「取得元（ソース）」を設定できます。
                </p>
                <p className="pt-1">
                  設定が終わったら「次へ進む」をクリックしてステップ 2 へ進みます。
                </p>
              </Step>
              <Step number={2} title="ステップ 2：フィード設定を行う">
                <p>
                  レコードキー（URL に使われる識別子）・表示名・説明・アバター画像・フィードタイプを設定します。
                </p>
                <p className="pt-1">
                  「反映して試す」ボタンをクリックすると Bluesky に登録され、フィードが開きます。
                </p>
              </Step>
            </div>

            <Note type="warning">
              「形態素」「テキスト」「ハッシュタグ」のいずれか 1 つ以上の入力が必須です。
              何も入力しないままステップ 2 に進もうとするとエラーが表示されます。
            </Note>
          </Section>

          {/* 4. Search conditions */}
          <Section id="search-conditions" icon={SlidersHorizontal} title="検索条件の設定">
            <p className="text-sm text-slate-400 leading-relaxed">
              各フィールドの意味と使い方を説明します。
            </p>

            <div className="space-y-4">
              {/* Source */}
              <div className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <p className="text-sm font-semibold text-slate-200">取得元（ソース）</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  どの投稿を対象にするかを選択します。
                </p>
                <ul className="text-xs text-slate-400 space-y-1 list-none">
                  <li className="flex gap-2">
                    <span className="text-slate-500 font-mono shrink-0">全員の投稿</span>
                    <span>— Bluesky 全体の投稿を対象にします（デフォルト）</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-500 font-mono shrink-0">あなたの投稿</span>
                    <span>— ログイン中のアカウントの投稿のみを対象にします</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-500 font-mono shrink-0">特定のユーザー</span>
                    <span>— 指定した DID のユーザーの投稿のみを対象にします</span>
                  </li>
                </ul>
              </div>

              {/* Include words */}
              <div className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <p className="text-sm font-semibold text-slate-200">含める単語</p>
                  <span className="text-[10px] font-mono text-amber-500 border border-amber-900/60 px-1 rounded">
                    いずれか必須
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  3 種類の入力があります。上から順に試すと、使い分けしやすくなります。
                </p>
                <ul className="text-xs text-slate-400 space-y-2 list-none">
                  <li>
                    <span className="font-semibold text-slate-300">形態素</span>
                    　—　単語一致で検索します。カタカナのみ、漢字のみの単語におすすめです。
                    例えば「猫」と入力すると「猫」という単語として使われている投稿を検索します（「猫耳」などは対象外になります）。
                  </li>
                  <li>
                    <span className="font-semibold text-slate-300">テキスト</span>
                    　—　部分一致で検索します。ひらがなを含む場合におすすめです。
                    例えば「けいおん」と入力すると「けいおん」を含む投稿が対象になります。
                  </li>
                  <li>
                    <span className="font-semibold text-slate-300">ハッシュタグ</span>
                    　—　投稿に付けられたタグで絞り込みます。
                    例えば「イラスト」と入力すると、#イラスト を含む投稿が対象になります。
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-2">
                  各カードは 3 項目を OR でまとめ、カード同士は AND でつながります。
                </p>
              </div>

              {/* Tags */}
              <div className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 space-y-2">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-violet-400" />
                  <p className="text-sm font-semibold text-slate-200">ハッシュタグ</p>
                  <span className="text-[10px] font-mono text-amber-500 border border-amber-900/60 px-1 rounded">
                    いずれか必須
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  投稿に付けられたハッシュタグで絞り込みます。
                  入力後に <Kbd>Enter</Kbd> または <Kbd>Space</Kbd> 、<Kbd>,</Kbd> でタグを確定します。
                  複数タグを指定した場合、いずれかのタグを含む投稿が対象になります。
                </p>
                <Note type="tip">
                  日本語入力（IME）でタグを確定するときは、変換を確定（Enter を 1 回）してから、
                  もう一度 Enter を押すとタグとして登録されます。
                </Note>
              </div>

              {/* Exclude words */}
              <div className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <p className="text-sm font-semibold text-slate-200">除外する単語</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  指定した単語を含む投稿をフィードから除外します。
                  「含める単語」と同様に、部分一致と単語一致の 2 種類があります。
                  スパムや特定の話題を除きたい場合に使います。
                </p>
              </div>

            </div>
          </Section>

          {/* 5. Feed settings */}
          <Section id="feed-settings" icon={Settings2} title="フィード設定">
            <p className="text-sm text-slate-400 leading-relaxed">
              ステップ 2 で行う各設定項目の説明です。
            </p>

            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    label: "レコードキー (rkey)",
                    required: true,
                    desc: "フィードの URL に使われる識別子です。半角英数字・ハイフン・ドットのみ使用できます（例: my-feed）。一度設定すると変更できません。",
                  },
                  {
                    label: "表示名",
                    required: true,
                    desc: "Bluesky 上で表示されるフィードの名前です。わかりやすい名前を付けてください。",
                  },
                  {
                    label: "説明",
                    required: false,
                    desc: "フィードの概要説明文です。Bluesky のフィードページに表示されます。省略可能です。",
                  },
                  {
                    label: "アバター画像",
                    required: false,
                    desc: "フィードのアイコン画像を設定します。PNG / JPEG / WebP 形式に対応しています。省略可能です。",
                  },
                  {
                    label: "フィードタイプ",
                    required: false,
                    desc: "本ツールでは、Jetstreamからリアルタイムに流れてくるポストを高速にフィルタリングする「フィルター型（Filter）」のみに対応しています。",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-sm font-semibold text-slate-200">{item.label}</span>
                      {item.required && (
                        <span className="text-[10px] font-mono text-amber-500 border border-amber-900/60 px-1 rounded">
                          必須
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <Note type="info">
              「反映して試す」ボタンを押すと Bluesky にフィードが登録され、完了後に自動でフィードページが開きます。
              反映には数秒かかる場合があります。
            </Note>
          </Section>

          {/* 6. Edit */}
          <Section id="edit" icon={Pencil} title="フィードを編集する">
            <p className="text-sm text-slate-400 leading-relaxed">
              既存のフィードを変更するには、フィード一覧の鉛筆（編集）アイコンをクリックします。
            </p>
            <div className="space-y-0">
              <Step number={1} title="編集ボタンをクリックする">
                <p>
                  フィード一覧の各フィードの右上にある
                  <span className="text-amber-400 font-semibold"> 鉛筆アイコン </span>
                  をクリックすると、編集フォームが開きます。
                  現在の設定が自動的にフォームに読み込まれます。
                </p>
              </Step>
              <Step number={2} title="検索条件を変更する（ステップ 1）">
                <p>
                  読み込まれた検索条件を確認・修正します。問題なければ「次へ進む」をクリックします。
                </p>
              </Step>
              <Step number={3} title="フィード設定を確認し反映する（ステップ 2）">
                <p>
                  表示名や説明など、必要な項目を変更します。
                  「変更を反映して試す」ボタンをクリックすると上書き更新されます。
                </p>
              </Step>
            </div>

            <div className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 space-y-3">
              <p className="text-xs font-semibold text-slate-300">その他の操作</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400">
                    <span className="text-slate-300 font-semibold">Blueskyで試す（外部リンクアイコン）</span>
                    　—　フィードの Bluesky ページを別タブで開きます。
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Trash2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400">
                    <span className="text-slate-300 font-semibold">削除（ゴミ箱アイコン）</span>
                    　—　フィードを削除します。確認ダイアログが表示されます。削除後は元に戻せません。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* 7. Advanced */}
          <Section id="advanced" icon={Filter} title="クエリ直接編集">
            <p className="text-sm text-slate-400 leading-relaxed">
              フォーム入力だけでは表現できない複雑な条件を指定したい場合は、クエリを直接記述できます。
              フォーム右上の「クエリ直接編集」ボタンをクリックするとモードが切り替わります。
            </p>

            <div className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 font-mono text-sm text-slate-300">
              <p className="text-slate-500 text-xs mb-2">{"// クエリ例"}</p>
              <p>
                <span className="text-blue-400">keyword</span>
                <span className="text-slate-400">(</span>
                <span className="text-amber-300">&quot;けいおん&quot;</span>
                <span className="text-slate-400">)</span>{" "}
                <span className="text-violet-400">&amp;&amp;</span>{" "}
                <span className="text-blue-400">hasimage</span>
                <span className="text-slate-400">()</span>
              </p>
            </div>

            <Note type="warning">
              クエリ直接編集モードでは、フォーム入力との相互変換は保証されません。
              クエリを編集した後にフォームモードに戻すと、入力内容が一部失われる場合があります。
            </Note>
          </Section>

          {/* 8. FAQ */}
          <Section id="faq" icon={Info} title="よくある質問">
            <div className="space-y-4">
              {[
                {
                  q: "フィード一覧の読み込みに失敗するときは？",
                  a: "APIサーバーへの接続が一時的に失敗している場合があります。しばらく待ってから「一覧を更新」ボタンをクリックしてください。問題が続く場合は、右上の設定アイコンからAPIサーバーのURLを確認してください。",
                },
                {
                  q: "「次へ進む」を押してもステップ 2 に進まない？",
                  a: "「形態素」「テキスト」「ハッシュタグ」のいずれか 1 つ以上の入力が必要です。いずれも空の場合はエラートーストが表示されます。",
                },
                {
                  q: "日本語を入力するとタグが 2 個登録される？",
                  a: "IME（日本語入力）での変換確定（Enter 1 回目）とタグ確定（Enter 2 回目）の 2 回押しが必要です。最新版では IME 変換中の Enter はタグ確定に使われないよう修正済みです。",
                },
                {
                  q: "フィードが Bluesky に反映されるまでどれくらいかかる？",
                  a: "通常は数秒で反映されます。「反映して試す」ボタン押下後に自動でフィードページが開きますが、タイムライン上に投稿が表示されるまでは少し時間がかかる場合があります。",
                },
                {
                  q: "レコードキーは後から変更できる？",
                  a: "レコードキー（rkey）は変更できません。変更したい場合は古いフィードを削除し、新しいレコードキーでフィードを再作成してください。",
                },
                {
                  q: "@passport ログインとは？",
                  a: "ハンドルをこのサービス上で入力することなく、安全にログインできる仕組みです。詳しくは atpassport.net を参照してください。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 space-y-2"
                >
                  <p className="text-sm font-semibold text-slate-200 flex items-start gap-2">
                    <span className="text-blue-400 shrink-0">Q.</span>
                    {item.q}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pl-5">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-900/40 bg-blue-950/20 p-8 text-center">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-4xl font-black text-blue-400 mx-auto mb-4 block">＃</span>
            <h3 className="text-xl font-bold text-white mb-2">さっそく試してみましょう</h3>
            <p className="text-sm text-slate-400 mb-6">
              ログインして、あなただけの Bluesky カスタムフィードを作成しましょう。
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-sm font-semibold shadow-[0_0_20px_rgba(34,139,230,0.3)] hover:shadow-lg transition-all duration-300"
            >
              <LogIn className="w-4 h-4" />
              ダッシュボードへ進む
            </Link>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900/60 bg-slate-950/20 py-4 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-mono">
          <p>© usounds.work</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-300">
              ダッシュボード
            </Link>
            <a
              href="https://github.com/usounds/RitoFeedEditor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
