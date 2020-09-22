import React from "react"
import styles from "./cemetery.module.scss"
import Button from "../components/button"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

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
    <section className={styles.cemeteryWrap}>
      <header className={styles.cemeteryHeader}>
        <h2 className={styles.cemeteryHeaderTitle}><ruby><rb>霊園名</rb><rt>れいえんめい</rt></ruby></h2>
        <p className={styles.cemeteryHeaderSpec}>墓地タイプ|宗教宗派</p>
      </header>
      <div className={styles.cemeteryImage}>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <Img fluid={data.image2.childImageSharp.fluid} />
      </div>

      <div className={styles.cemeteryContents}>
        <div className={styles.cemeteryReview}>
          みんなの評価<span>⭐︎⭐︎⭐︎⭐︎</span>5.0
        </div>
        <div className={styles.cemeteryAccess}>
          <p>住所の文字列</p>
          <p>最寄駅からxxm</p>
        </div>
        <div className={styles.cemeteryPrice}>
          <table>
            <tr>
              <th>対応お墓タイプ①</th>
              <td>価格</td>
            </tr>
            <tr>
              <th>対応お墓タイプ②</th>
              <td>価格</td>
            </tr>
          </table>
        </div>
        <div className={styles.cemeteryFeatures}>
          <div className={styles.cemeteryFeaturesLabel}>特徴①</div>
          <div className={styles.cemeteryFeaturesLabel}>特徴②</div>
          <div className={styles.cemeteryFeaturesLabel}>特徴③</div>
          <div className={styles.cemeteryFeaturesLabel}>特徴④</div>
        </div>
      </div>
      <Button></Button>
    </section>
  )
}