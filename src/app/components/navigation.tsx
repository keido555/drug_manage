import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type NavigationProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
};

type menuValueProps = {
  title: string
  path: string
}

const menuValue: menuValueProps[] = [
  { title: "ログイン", path: "/Login" },
  { title: "トップ", path: "/" },
  { title: "管理アプリ", path: "/ManageMedicine" },
  { title: "備えておくべき常備薬", path: "/RequiredMedic" },
  { title: "パターン別常備薬", path: "/MedicPrecation" },
  { title: "保管時の注意点", path: "/DrugsByScene" },
]

/**
 * #### toggleButton押下時に出現する隠しメニュー欄
 * @param props 
 * @returns 
 */
export const Navigation = (props: NavigationProps) => {
  const { isOpen, setIsOpen, id } = props

  return (
    <nav id={id} aria-hidden={!isOpen} className="navigation fixed top-0 right-0 w-64 h-full py-20 px-4 shadow-lg bg-sky-800">
      <ul className="text-slate-800">
        {menuValue.map((x, index) => (
          <li key={index} className="py-4">
            {x.title === "ログイン" ?
              <button className="text-lg bg-sky-200 w-full py-2 px-1 text-left shadow-md rounded-lg hover:bg-sky-400 hover:text-slate-100">
                <Link href={x.path} onClick={() => setIsOpen(false)}>{x.title}</Link>
              </button>
              :
              <button className="text-lg text-slate-100 hover:text-slate-400">
                <Link href={x.path} onClick={() => setIsOpen(false)}>{x.title}</Link>
              </button>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}