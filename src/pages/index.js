import React from "react"
import Header from "../components/header"
import Cemetery from "../components/cemetery"
import Layout from "../components/layout"

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
