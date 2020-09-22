import React from "react"
import Header from "../component/header"
import Cemetery from "../component/cemetery"
import Layout from "../component/layout"

export default function Home() {
  return (
    <>
      <Header></Header>
      <Layout>
        <Cemetery></Cemetery>
      </Layout>
    </>
  )
}
