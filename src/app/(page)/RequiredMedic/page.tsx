"use client"

import { useState } from "react";
import { ToggleVisibleArea } from "./components/toggleVisibleArea";

/**
 * #### 最低限備えておきたい常備薬について
 * @returns 
 */
const RequiredMedic = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <main className="max-w-7xl w-full mx-auto p-24 bg-sky-100">
      <div className="my-auto border rounded-lg shadow-md p-12 bg-white">
        <p className="text-2xl text-center font-bold">最低限備えておきたい常備薬について</p>
        <div className="p-8">
          <p>
            これだけは揃えておいたほうがよい常備薬をご紹介します。イメージが湧きやすいように商品例も掲示しますが、様々な市販薬が販売されていますので、店舗でご相談しながらお買い求めください。
          </p>
          <ul className="py-8">
            <ToggleVisibleArea
              index={0} title={"1.風邪の諸症状に（総合風邪薬）"}
              text={"発熱や鼻水・鼻づまり、喉の痛み、咳などの風邪の諸症状が出た場合に備えておくと便利なのが、総合風邪薬です。"}
              text2={"ひとつの薬の中に複数の諸症状に効果が期待できる成分が入っており、1つ用意しておくとよいでしょう。"}
              visibleIndex={visibleIndex} toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={1} title={"2.発熱や頭痛、生理痛など様々な痛みに（解熱鎮痛薬）"}
              text={"総合風邪薬に含まれていることも多いのですが、発熱に対して解熱効果を期待できます。"}
              text2={"また、頭痛や関節痛、生理痛など様々な痛みに対して痛み止めとしても使用することができます。"}
              visibleIndex={visibleIndex} toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={2} title={"食べ過ぎ、飲み過ぎなど胃の不調に（総合胃腸薬）"}
              text={"食べすぎたり、飲みすぎたりすることによって胃に不調を抱えることもあるかと思います。そんな時のために用意しておくと安心なのが総合胃腸薬です。"}
              text2={"複数の諸症状に効果が期待できる成分が入っているので、1つ用意しておくとよいでしょう。"}
              visibleIndex={visibleIndex} toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={3} title={"お腹の不調に（整腸剤）"}
              text={"下痢や便秘など、お腹が不調のときに用意してあると便利なのが整腸剤です。"}
              text2={"副作用が少ないため、安心して服用することができます。腸内細菌のバランスを整えることによって、お腹の不調を改善する効果が期待できます。"}
              visibleIndex={visibleIndex} toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={4} title={"虫刺されなど発疹・かゆみに（塗り薬）"}
              text={"外出時やレジャーなど日常的に起こりやすいのが虫刺されです。かゆくて掻いてしまって症状が悪化するケースもあるため、炎症を抑える、かゆみを抑えるなどの成分を含んでいる塗り薬を用意しておくと安心です。"}
              text2={"虫刺されだけでなく、発疹やかぶれにも使用することが可能です。"}
              visibleIndex={visibleIndex} toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={5} title={"きずに対して（塗り薬）"}
              text={"日常的に起こりやすい擦り傷などに対しては、傷口をよく洗ってから薬を使用します。"}
              text2={"赤く腫れたり化膿してひどくなりそうなときには、抗生物質を含んでいる塗り薬を用意しておくとよいでしょう。"}
              visibleIndex={visibleIndex} toggleVisibility={toggleVisibility}
            />
            <ToggleVisibleArea
              index={6} title={"筋肉痛、ねんざなどの痛みに（湿布薬）"}
              text={"運動をされた翌日に起こる筋肉痛や軽度のねんざ、関節痛などには湿布薬が効果的です。"}
              text2={"消炎鎮痛剤を含んでいる湿布薬では、病院で処方される湿布薬と同様の成分を含んでいるものもあります。"}
              visibleIndex={visibleIndex} toggleVisibility={toggleVisibility}
            />
          </ul>
        </div>
      </div>
    </main>
  )
}

export default RequiredMedic
