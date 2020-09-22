import React from "react"
import {css} from "@emotion/core"
import {Color} from "../variables/color"

const header = css`
  background-color: #fff;
  border-top: 4px solid ${Color.mainColor01};
  border-bottom: 1px solid #F4F3F1;
`
const inner = css`
  max-width: 1080px;
  height: 54px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`

export default function Header({...props}) {
  return (
    <header css={header} {...props}>
      <div css={inner}>
        <div>LOGO</div>
        <div>menu</div>
      </div>
    </header>
  )
}