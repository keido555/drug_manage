"use client"

import { useState } from "react";
import { ToggleVisibleArea } from "./components/toggleVisibleArea"

const MedicPrecation = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <main className="max-w-7xl w-full mx-auto p-24 bg-sky-100">
      <div className="my-auto border rounded-lg shadow-md p-12 bg-white">
        <p className="text-2xl text-center font-bold">4つのシーン別で追加で備えておきたい常備薬について</p>
        <div className="p-8">
          <ul>
            <ToggleVisibleArea
              index={0}
              title={"①：小さな子どもがいる場合"}
              text={"市販薬のパッケージや説明文書を確認すると、用法・用量の箇所に、服用できる年齢が書いてありますので、常備薬を揃える場合には、よく確認するようにしましょう。"}
              subtitle_1={"あせもなどの皮膚症状に（塗り薬）"}
              subtext_1={"暑い時期に、汗を沢山かくようになると子どもで起こりやすい皮膚トラブル「あせも」に対して、常備薬があるとよいでしょう。炎症を抑える成分、かゆみを抑える成分、化膿するのをふせぐ成分が含まれている塗り薬が良いでしょう。症状が軽度であれば、ステロイドが含まれていない薬のほうが安心して使用できます。"}
              subtitle_2={"皮膚の乾燥を抑える（保湿剤）"}
              subtext_2={"小さな子どもの皮膚の乾燥に備えて、用意してあると手軽に使用できるため便利なのが、保湿効果の高い薬です。ヘパリン類似物質を含む保湿剤や、皮膚の保護作用があるワセリン（白色ワセリン、プロペト、サンホワイト、ヴァセリンなど）などがおすすめです。"}
              visibleIndex={visibleIndex}
              toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={1}
              title={"②：長期で旅行に行きたい"}
              text={"常備薬を海外など長期で旅行したり、滞在したりする場合にプラスで持っておくと良い薬をご紹介します。"}
              subtitle_1={"車や船などの移動に備えて（酔い止め）"}
              subtext_1={"旅行時に、乗り物酔いがひどい方の味方になるのが酔い止めです。吐き気やめまいを和らげる成分が含まれています。"}
              subtitle_2={"突然の腹痛に対して（下痢止め）"}
              subtext_2={"旅行中にお腹を下してしまうと、せっかくの良い気分も苦痛に変わりますよね。そういった時にために薬を常備しておきましょう。"}
              visibleIndex={visibleIndex}
              toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={2}
              title={"③：仕事場に置いておきたい"}
              text={"仕事場に置いておきたい薬を紹介します。"}
              subtitle_1={"納期が迫る仕事、重要な会議に備えて（眠気防止）"}
              subtext_1={"眠気が出ている場合には、睡眠不足ですので一番は寝ることが大切です。どうしても寝てはいけない状況にいるなどの理由がある場合に、眠気を防止するひとつの方法として市販薬があります。"}
              subtitle_2={"目の乾燥、疲れ、充血に（目薬）"}
              subtext_2={"1番は目を休めることが重要ですが、少しでも和らげるために目薬を使用することも一案です。"}
              visibleIndex={visibleIndex}
              toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={3}
              title={"④：災害時に備えたい"}
              text={"薬を服用している状況がわかるようにお薬手帳を持っておくことも非常に重要です。市販薬としては、第1章でご紹介したものに加え、怪我などに備えて、絆創膏、三角巾、はさみ、ピンセットなど緊急セットもしっかりと用意しておく必要があります。"}
              subtitle_1={"眠れないときに（睡眠改善薬）"}
              subtext_1={"一時的な不眠症状を改善する薬として、抗ヒスタミン剤を含む睡眠改善薬を市販で購入することができます。"}
              subtitle_2={""}
              subtext_2={""}
              visibleIndex={visibleIndex}
              toggleVisibility={toggleVisibility}
            />
          </ul>
        </div>
      </div>
    </main>
  )
}

export default MedicPrecation
