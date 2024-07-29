"use client"

import Link from "next/link";
import { Block } from "./components/block";
import { StepBlock } from "./components/stepBlock";

/**
 * #### トップページ
 * @returns 
 */
export default function Home() {
  return (
    <main className="max-w-7xl w-full mx-auto p-24 bg-sky-100">
      <div className="my-auto border rounded-lg shadow-md p-12 bg-white">
        <p className="text-2xl text-center font-bold">常備薬管理アプリ</p>
        <div className="p-8">
          <p>
            当アプリは万が一に備えておきたい常備薬を管理するために制作されたアプリのデモバージョンです。<br /><br />
            いざ体調不良になっても、真夜中であったり、仕事や家事で忙しいなどの理由ですぐに病院へ行ったり、薬を購入しにいくことが難しい場合があります。
            そのような万一の場合に備えて予め薬を用意しておくことが大切ですが、今家にある薬は把握されていますか？<br />
            当アプリは家にある薬がどの種類のものをどれくらい保存しているのかを管理するために作られたデモアプリです。<br />
            <span className="text-xs text-sky-500 underline">
              <Link href={"https://www.kusurinomadoguchi.com/column/householdmedicine-4128/"}>こちらのサイトを参考にしています。</Link>
            </span>
          </p>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-4 mx-auto flex flex-wrap">
            {/* 常備薬アプリは本来ログイン時のみログイン可にする */}
            <Block title={"常備薬管理アプリ"} text="家で保管している常備薬の管理を行います" url="/ManageMedicine" disabled={false} />
            <Block title={"最低限備えておきたい常備薬について"} text="万が一に備えて置いておきたい常備薬の一覧を掲載します" url="/RequiredMedic" disabled={false} />
            <Block title={"シーン別で追加で備えておきたい常備薬について"} text="4つのシーン別に追加であると便利な薬を紹介します" url="/MedicPrecation" disabled={false} />
            <Block title={"管理するうえでの注意点"} text="常備薬を使用・管理する上での注意点を紹介します" url="/DrugsByScene" disabled={false} />
          </div>
        </div>
        <StepBlock />
      </div>
    </main>
  );
}
