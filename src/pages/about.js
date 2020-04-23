import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Raul</h1>
        <p>
          Born and raised in Virginia, Raul is a recent graduate from the
          Thinkful Engineering Flex program. Being the problem solver he's
          always been, he will combine his extensive real world experience with
          his new found passion for web design to bring you and your business a
          fully functional and visually pleasing platform. When Raul isn't busy
          making the internet a better looking place, you can find him
          traversing hiking trails with his dog Bogart or exploring the area
          with his skateboard. As an avid dog lover, he also spends his down
          time caring for dogs.
        </p>
        <h3>
          Lets get in <Link to="/contact">touch!</Link>
        </h3>
      </Layout>
    </div>
  )
}

export default aboutPage
