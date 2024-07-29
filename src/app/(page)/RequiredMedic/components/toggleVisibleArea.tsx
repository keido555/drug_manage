import styles from "../../../styles/home.module.css"

type ToggleVisibleAreaProps = {
  index: number
  title: string
  text: string
  text2: string
  visibleIndex: number | null
  toggleVisibility: (index: number) => void
}

/**
 * #### 吹き出しの挙動制御 
 * - onClick時に表示と非表示を行う
 */
export const ToggleVisibleArea = (props: ToggleVisibleAreaProps) => {
  const { index, title, text, text2, visibleIndex, toggleVisibility } = props

  return (
    <>
      <li className="py-2">
        <div onClick={() => toggleVisibility(index)} className="relative cursor-pointer px-4 pt-2 pb-1 border shadow-lg rounded-md">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className={`${styles.content} ${visibleIndex === index ? styles.contentVisible : ''}`}>
          <p>{text}<br />{text2}</p>
        </div>
      </li>
    </>
  )
}