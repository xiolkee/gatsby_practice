import React from "react"
import {css} from "@emotion/core"
import {Color} from "../variables/color"
import {Text} from "../variables/text"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/button"

const wrap = css`
  width: 100%;
  height: 265px;
  background: ${Color.gray2};
  position: relative;
`
const container = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 90%;
  height: 90%;
  background: rgba(255,255,255,0.6);
  border-radius: 4px;
`
const titleWrap = css`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

`
const subTitle = css`
  font-size: ${Text.headingXS};
  font-weight: bold;
  text-align: center;
`
const mainTitle = css`
  font-size: ${Text.headingL};
  font-weight: bold;
  text-align: center;
`

export default function MainVisual() {
  return (
    <div css={wrap}>
      <div css={container}>
        <div css={titleWrap}>
          <p css={subTitle}>全国取扱い霊園数<br />8,700以上！</p>
          <p css={mainTitle}>カンタン情報収集！</p>
          <Button />
        </div>
      </div>
    </div>
  )
}