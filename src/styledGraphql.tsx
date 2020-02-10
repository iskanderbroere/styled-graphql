import React from "react"

interface ButtonProps {
  className?: string
}
export const Button: React.FC<ButtonProps> = (props) => (
  <button {...props}>Hi there</button>
)
