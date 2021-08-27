import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components"
import Layout from "../components/layout/Layout"

const OuterContainter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: 725px;

  h1 {
    font-family: "Open Sans";
  }

  p {
    font-family: "Open Sans";
  }
`

export default function Index() {
  return (
    <Layout>
      <OuterContainter>
        <h1>Hello! I&apos;m Ryan, a professional operations leader and amateur everything else.</h1>

        <p>
          I love making things that people find useful or enjoyable (or preferably both). Sometimes
          that&apos;s a new process for order fulfillment, and sometimes it&apos;s a little video
          game.
        </p>
      </OuterContainter>
    </Layout>
  )
}
