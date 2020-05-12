import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"
import useMetadata from "../hooks/useMetadata"
import ogImage from "../../static/ogportfolio.jpg"

const Layout = ({ children }) => {
  const { title, description } = useMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content="https://a-mkemp.com" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
