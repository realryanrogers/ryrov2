import Head from 'next/head'
import Header from './Header'
import styled from "styled-components"

const OuterContainter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: 725px;
`

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>{"ryrov2"}</title>
                <link rel="icon" href="/favicon.ico" />
                <link
            href="https://fonts.googleapis.com/css2?family=Kameron:wght@400;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,600;1,700;1,800"
            rel="stylesheet"
          />
            </Head>
            <Header />
            <div className="main">
                <OuterContainter>{children}</OuterContainter>
            </div>
        </>
    )
}

export default Layout