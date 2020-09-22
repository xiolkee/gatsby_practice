import React from "react"
import {css} from "@emotion/core"
import {Color} from "../variables/color"
import {Text} from "../variables/text"

const wrap = css`
  margin-top: 32px;
  background: ${Color.gray2};
  font-size: ${Text.headingXS};
`
const copyrignt = css`
  background: ${Color.black};
  font-size: ${Text.textS};
  text-align: center;
  color: #fff;
  padding: 8px;
`
const anchor = css`
  font-size: ${Text.textM};
  text-decoration: underline;
  padding: 4px 0;
`
const links = css`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 12px;
  list-style: none;
`
const linksItem = css`
  font-size: ${Text.textM};
  &:not(:last-child){
    margin-right: 8px;
  }
`
export default function Footer() {
  return (
    <footer css={wrap}>
      <ul css={links}>
        <li css={linksItem}><a css={anchor}>運営者情報</a></li>
        <li css={linksItem}><a css={anchor}>利用規約</a></li>
        <li css={linksItem}><a css={anchor}>プライバシーポリシー</a></li>
        <li css={linksItem}><a css={anchor}>お問い合わせ</a></li>
        <li css={linksItem}><a css={anchor}>サイトマップ</a></li>
        <li css={linksItem}><a css={anchor}>よくある質問</a></li>
        <li css={linksItem}><a css={anchor}>用語集</a></li>
      </ul>
      <p css={copyrignt}>
        © 2020 xiolkee
      </p>
    </footer>
  )
}