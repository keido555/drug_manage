import styles from "../../../styles/home.module.css"

type ToggleVisibleAreaProps = {
  index: number
  title: string
  text: string
  subtitle_1: string
  subtext_1: string
  subtitle_2: string
  subtext_2: string
  visibleIndex: number | null
  toggleVisibility: (index: number) => void
}

/**
 * #### 吹き出しの挙動制御 
 * - onClick時に表示と非表示を行う
 */
export const ToggleVisibleArea = (props: ToggleVisibleAreaProps) => {
  const { index, title, text, subtitle_1, subtext_1, subtitle_2, subtext_2, visibleIndex, toggleVisibility } = props

  return (
    <>
      <li className="py-2">
        <div onClick={() => toggleVisibility(index)} className="relative cursor-pointer px-4 pt-2 pb-1 border shadow-lg rounded-md">
          <h3 className="text-lg font-bold border-b">{title}</h3>
          <p className="pt-2">{text}</p>
        </div>
        <div className={`${styles.content} ${visibleIndex === index ? styles.contentVisible : ''}`}>
          <div>
            <h4 className="text-md font-bold">{subtitle_1}</h4>
            <p>{subtext_1}</p>
          </div>
          <div>
            <h4 className="text-md font-bold">{subtitle_2}</h4>
            <p>{subtext_2}</p>
          </div>
        </div>
      </li>
    </>
  )
}