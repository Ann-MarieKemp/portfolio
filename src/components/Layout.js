import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"
import useMetadata from "../hooks/useMetadata"

const Layout = ({ children }) => {
  const { title, description } = useMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
