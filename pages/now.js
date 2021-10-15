import Layout from "../components/layout/Layout";
import styled from "styled-components"

const NowContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryText};
  a {
    color: ${(props) => props.theme.colors.primaryAccent};
  }
  .inlineDiv {
    margin-bottom: 1rem;
  }
  .inlineDiv h2 {
    display: inline;
    vertical-align: top;
  }
  .inlineDive a {
    font-size: 0.5rem;
  }
  text {
    font-size: 0.75rem;
  }
  h3 {
    padding: 0;
    margin-block: 0.25rem;
  }
  p {
    margin-top: 0;
    margin-left: 1rem;
  }
  .updated {
    color: #8a8b8b;
    font-size: 0.8rem;
    margin: auto;
    padding-inline: 2rem;
  }
`

const Now = () => {
  return (
    <Layout>
      <NowContainer>
        <div className="inlineDiv">
          <h2>What I&apos;m Up To Now</h2>
          <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">
            <text>[?]</text>
          </a>
        </div>
        <h3>Open To New Projects</h3>
        <p>
          After taking some time for myself for the past year and a half, working on my own projects
          and dabbling in some freelance work, I&apos;m ready to get back to working with a team
          full time to make something great.
          <a href="mailto:ryan@ryro.io"> Drop a line</a> if you want to discuss.
        </p>
        <h3>Getting into WebDev</h3>
        <p>
            Making this site (along with a backend database for my own stuff) using React, Next.js, Styled-Components, and Rails. I&apos;ve never been a
          front end guy, so this is an interesting experience.
        </p>
        
        <h3>Restarting My Writing Habit</h3>
        <p>Nothing I&apos;m ready to show for the moment.</p>
        <br />
        <div className="updated">Updated Oct 15th, 2021</div>
      </NowContainer>
    </Layout>
  )
}

export default Now
