import React from "react"
import {css} from "@emotion/core"
import {Color} from "../variables/color"
import Header from "../components/header"
import Cemetery from "../components/cemetery"
import Layout from "../components/layout"
import Mainvisual from "../components/mainVisual"

const base = css`
  background: ${Color.gray1};
`

export default function Home() {
  return (
    <div css={base} >
      <Header></Header>
      <Layout>
        <Mainvisual />
        <Cemetery />
      </Layout>
    </div>
  )
}
