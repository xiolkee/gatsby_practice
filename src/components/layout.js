import React from "react"
import {css} from "@emotion/core"

const wrap = css`
max-width: 1080px;
margin: auto;
`
export default function Layout({ children }) {
  return (
    <div css={wrap}>
      {children}
    </div>
  )
}