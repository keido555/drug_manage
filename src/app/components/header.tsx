"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { usePathname } from "next/navigation"
import { ToggleButton } from "./toggleButton"
import { Navigation } from "./navigation"
import { useAuth } from "./systemContext"
import { DrugParameter, getOutOfStockDrugs } from "../(page)/ManageMedicine/components/drugParameter"

export const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { outOfStockDrugs, setOutOfStockDrugs } = useAuth()

  useEffect(() => {
    setOutOfStockDrugs(getOutOfStockDrugs(DrugParameter))
  }, [DrugParameter])

  /** メニューボタン押下時に開閉する */
  const toggleFunction = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <header className="sticky max-w-7xl w-full shadow-md mx-auto text-slate-50 body-font bg-sky-500 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl font-bold">常備薬管理アプリ</span>
        </Link>
        <>
          <ToggleButton isOpen={isOpen} controls={"navgation"} label={"メニューを開きます"} onClick={() => toggleFunction()} />
          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} id="navigation" />
        </>
      </div>
    </header>
  )
}