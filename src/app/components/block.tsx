import { useRouter } from "next/navigation"

type BlockProps = {
  title: string
  text: string
  url: string
  disabled: boolean
}

/**
 * #### 小項目をBlock形式で表示
 * - トップ画面にて使用
 * - 引数で表示を制御
 * 
 * @param props 
 * @returns 
 */
export const Block = (props: BlockProps) => {
  const { title, text, url, disabled } = props
  const router = useRouter()

  return (
    <div className="p-4 lg:w-1/2 md:w-full">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col min-h-52">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
          <p className="leading-relaxed text-base">{text}</p>
          <button onClick={() => router.push(url)} disabled={disabled} className={!disabled ? "flex text-sky-500" : "flex text-slate-500"}>
            さらに見る
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 my-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}