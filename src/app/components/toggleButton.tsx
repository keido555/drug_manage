import { MouseEventHandler } from "react"

type ToggleButtonProps = {
  isOpen: boolean,
  onClick: MouseEventHandler,
  controls: string,
  label: string,
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { isOpen, onClick, controls, label } = props

  return (
    <button
      type="button"
      aria-controls={controls}
      aria-expanded={isOpen}
      aria-label={label}
      onClick={onClick}
      className="toggleButton"
    >
      <span className="line-1 bg-white"></span>
      <span className="line-2 bg-white"></span>
      <span className="line-3 bg-white"></span>
    </button>
  )
}