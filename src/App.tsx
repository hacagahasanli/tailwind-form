import { Container } from "./components"

import React, { ButtonHTMLAttributes } from "react"
interface IAccessButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AccessButton = ({ text, type = "button" }: IAccessButton) => (
  <button {...{ type }} className="w-full bg-black text-red-500 px-20 text-6xl">
    {text}
  </button>
)

const App = () => {
  return (
    <Container>
      <AccessButton text={"Click me!"} />
    </Container>
  )
}

export default App
