import React from "react"
import {css} from "@emotion/core"
import {Color} from "../variables/color"
import {Text} from "../variables/text"

const wrap = css`
  text-align: center;
`
const button = css`
  font-size: ${Text.textL};
  font-weight: bold;
  background-color: ${Color.accentColor01};
  box-shadow: 0 4px 0 ${Color.accentColor02};
  color: #fff;
  padding: 12px 16px;
  display: inline-block;
  position: relative;
  transition: all .15s cubic-bezier(0,0,.4,1);
  border-radius: 4px;
  cursor: pointer;
  margin: auto;
  margin-bottom: 12px;
  max-width: 320px;
  width: 80%;
`

export default function Button() {
  return (
    <div css={wrap}>
      <a css={button}>
        パンフレットをもらう
      </a>
    </div>
  )
}