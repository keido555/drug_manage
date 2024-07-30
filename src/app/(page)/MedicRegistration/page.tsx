"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DrugParameter, drugParameterType, drugType } from "../ManageMedicine/components/drugParameter";

/**
 * #### 薬の情報を追加するページ
 * - サーバーを用意していないため、
 * 
 * @returns 
 */
const MedicRegistration = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<drugType>('');
  const [stockCount, setStockCount] = useState<number>(0);
  const [stockAmount, setStockAmount] = useState<string>('');

  const router = useRouter();

  const handleAddDrug = () => {
    const newDrug: drugParameterType = {
      id: DrugParameter.length + 1,
      icon: '',
      name,
      type,
      stockCount,
      stockAmount,
    };

    DrugParameter.push(newDrug);
    alert('新しい薬品が追加されました');
    router.push('/ManageMedicine');
  };

  return (
    <main className="max-w-7xl w-full mx-auto p-24 bg-sky-100">
      <div className="my-auto border rounded-lg shadow-md p-12 bg-white">
        <p className="text-2xl text-center font-bold">新規登録</p>
        <div className="text-end pt-8">
          <button
            onClick={() => router.push("/MedicRegistration")}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
          >
            戻る
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddDrug();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">薬品名</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="type">薬品種類</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as drugType)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">選択してください</option>
              <option value="総合風邪薬">総合風邪薬</option>
              <option value="解熱鎮痛薬">解熱鎮痛薬</option>
              <option value="総合胃腸薬">総合胃腸薬</option>
              <option value="整腸剤">整腸剤</option>
              <option value="かゆみ用塗り薬">かゆみ用塗り薬</option>
              <option value="傷用塗り薬">傷用塗り薬</option>
              <option value="湿布薬">湿布薬</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="stockCount">在庫数</label>
            <input
              type="number"
              id="stockCount"
              value={stockCount}
              onChange={(e) => setStockCount(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="stockAmount">在庫量</label>
            <input
              type="text"
              id="stockAmount"
              value={stockAmount}
              onChange={(e) => setStockAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700 transition-colors"
          >
            登録
          </button>
        </form>
      </div>
    </main>
  )
}

export default MedicRegistration
