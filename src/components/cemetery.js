import React from "react"
import Button from "../components/button"
import {css} from "@emotion/core"
import {Color} from "../variables/color"
import {Text} from "../variables/text"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const wrap = css`
  background: #fff;
  border: 1px solid ${Color.gray3};
  border-radius: 4px;
  overflow: hidden;
  max-width: 740px;
  margin: auto;
  margin-top: 12px;
`
const imageWrap = css`
  height: 160px;
  background: gray;
  overflow: scroll;
`
const header = css`
  background: ${Color.gray2};
  padding: 4px 8px;
`
const title = css`
  font-size: ${Text.headingXS};
`
const spec = css`
  font-size: ${Text.textM};
`
const contents = css`
  padding: 8px;
`
const review = css`
  background: ${Color.gray2};
  color: ${Color.gray6};
  font-weight: bold;
  font-size: ${Text.textS};
  padding: 2px 8px;
  border-radius: 4px;
  text-align: center;
`
const infomation = css`
  margin-top: 4px;
  font-size: ${Text.textM};
`
const recommendPoints = css`
  background: ${Color.backgroundColor};
  padding: 8px 16px;
  list-style: none;
  font-weight: bold;
  font-size: ${Text.textL};
`
const featureWrap = css`
  margin-top: 4px;
`
const featureLabel = css`
  display: inline;
  font-size: ${Text.textS};
  color: ${Color.mainColor03};
  border: 1px solid ${Color.mainColor03};
  border-radius: 4px;
  padding: 4px 8px;
  &:not(:first-child) {
    margin-left: 4px;
  }
`

export default function Cemetery() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "aoyama.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      image2: file(relativePath: { eq: "aoyama02.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section css={wrap}>
      <header css={header}>
        <h2 css={title}><ruby><rb>霊園名</rb><rt>れいえんめい</rt></ruby></h2>
        <p css={spec}>墓地タイプ | 宗教宗派</p>
      </header>
      <div css={imageWrap}>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <Img fluid={data.image2.childImageSharp.fluid} />
      </div>

      <div css={contents}>
        <div css={review}>
          みんなの評価<span role="img">⭐︎⭐︎⭐︎⭐︎</span>5.0
        </div>
        <div css={infomation}>
          <p>住所の文字列</p>
          <p>最寄駅からxxm</p>
          <p>最安購入価格：NN万円〜</p>
        </div>
        <ul css={recommendPoints}>
          <li>季節の花々が咲き誇る霊園</li>
          <li>和型でも洋型でも可能</li>
          <li>施設が充実</li>
        </ul>
        <div css={featureWrap}>
          <div css={featureLabel}>特徴①</div>
          <div css={featureLabel}>特徴②</div>
          <div css={featureLabel}>特徴③</div>
          <div css={featureLabel}>特徴④</div>
        </div>
      </div>
      <Button />
    </section>
  )
}