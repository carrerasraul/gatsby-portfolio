import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const contactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact Information</h1>
        <h2>
          Follow me on{" "}
          <a href="https://www.instagram.com/brother.ralph/" target="_blank">
            Instagram
          </a>
        </h2>
        <h2>Email: raul.e.carreras@gmail.com</h2>
        <h2>Phone: 703-398-5640</h2>
      </Layout>
    </div>
  )
}

export default contactPage
