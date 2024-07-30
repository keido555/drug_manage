"use client"

import Image from "next/image"
import { DrugParameter } from "./components/drugParameter"
import { useRouter } from "next/navigation"

/**
 * #### 常備薬の在庫量を表で表示する
 * @returns 
 */
const ManageMedicine = () => {
  const router = useRouter()

  return (
    <main className="max-w-7xl w-full mx-auto p-24 bg-sky-100">
      <div className="my-auto border rounded-lg shadow-md p-12 bg-white">
        <p className="text-2xl text-center font-bold">常備薬管理アプリ</p>
        <div className="text-end pt-8">
          <button
            onClick={() => router.push("/MedicRegistration")}
            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
          >
            薬の追加
          </button>
        </div>
        <div className="pt-2 pb-8">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-sky-200">
              <tr>
                <th className="py-2 px-1 border-b"></th>
                <th className="py-2 px-4 border-b w-36">画像アイコン</th>
                <th className="py-2 px-4 border-b w-52">薬品名</th>
                <th className="py-2 px-4 border-b w-40">薬品種類</th>
                <th className="py-2 px-4 border-b">在庫数</th>
                <th className="py-2 px-4 border-b">在庫量</th>
                <th className="py-2 px-4 border-b">編集ボタン</th>
              </tr>
            </thead>
            <tbody>
              {DrugParameter.map((drug) => (
                <tr key={drug.id}>
                  {drug.stockCount === 0 ?
                    <td className="py-2 px-1 border-b text-center text-red-500 font-bold">要補充</td>
                    : <td className="py-2 px-1 border-b text-center"></td>}
                  {/* <td className="py-2 px-4 border-b text-center">{drug.stockCount === 0 ? "!" : ""}</td> */}
                  <td className="py-2 px-4 border-b">
                    <Image src={drug.icon} alt={drug.name} width={50} height={50} className="mx-auto" />
                  </td>
                  <td className="py-2 px-4 border-b">{drug.name}</td>
                  <td className="py-2 px-4 border-b">{drug.type}</td>
                  <td className="py-2 px-4 border-b text-center">{drug.stockCount}</td>
                  <td className="py-2 px-4 border-b text-center">{drug.stockAmount}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                    >
                      編集
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default ManageMedicine
