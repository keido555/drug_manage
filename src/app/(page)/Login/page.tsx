"use client"

import Image from "next/image";
import { useState } from "react";

import DrugImage from "@/image/drug_image.jpg"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter()

  const handleLogin = async () => {
    const auth = getAuth();
    console.log("ログイン", { email, password, auth });

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const handleSignUp = () => {
    console.log("新規作成");
    router.push("/NewRegistration")
    setEmail("")
    setPassword("")
  };

  const handleForgotPassword = () => {
    console.log("今回省略");
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen max-w-7xl w-full mx-auto">
      {/* 左側の背景画像 */}
      <div className="flex-1 relative">
        <Image src={DrugImage} alt="背景画像" layout="fill" objectFit="cover" />
      </div>

      {/* 右側のログインフォーム */}
      <div className="w-1/4 bg-white flex flex-col justify-center p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">EMAIL</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={() => handleLogin()}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-colors mb-2"
        >
          ログイン
        </button>
        <button
          onClick={() => handleSignUp()}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700 transition-colors mb-2"
        >
          新規作成
        </button>
        <button
          onClick={() => handleForgotPassword()}
          className="w-full text-gray-500 hover:text-gray-700 transition-colors"
        >
          パスワードを忘れた場合
        </button>
      </div>
    </div>
  )
}

export default Login
