"use client"

import { useAuth } from "@/app/components/systemContext"

const ManageMedicine = () => {
  const { } = useAuth()

  return (
    <main className="max-w-7xl w-full mx-auto p-24 bg-sky-100">
      <div className="my-auto border rounded-lg shadow-md p-12 bg-white">
        <p className="text-2xl text-center font-bold">常備薬管理アプリ</p>

      </div>
    </main>
  )
}

export default ManageMedicine
