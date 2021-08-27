import Image from "next/image"
import Link from "next/link"
import profilePic from "../public/RyanPhoto.jpeg"
import styled from "styled-components"
import Layout from "../components/layout/Layout"

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
font-family: ${(props) => props.theme.fonts.primaryText};
p {
  margin: 0;
  margin-top: 0.5rem;
}

img {
  border-radius: 30px;
  max-width: 100%;
}
`

const AboutSection = styled.div`
display: grid;
grid-template-columns: 1.5fr 1.75fr;
grid-gap: 30px;
min-height: 200px;
img {
  border-radius: 30px;
  scale: 2;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
`

const SplitSection = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 39em) {
  flex-direction: row;
  /* This tells all children to be the same size */
  > * {
    flex-basis: 100%;
  }
  /* This tells all children with a sibling BEFORE it to have a margin */
  > * + * {
    margin-left: 2em;
  }
}
`

const TextSection = styled.div`
h2 {
  margin-bottom: 0;
}
a {
  color: ${(props) => props.theme.colors.primaryAccent};
  font-weight: 700;
}
h1 {
  font-size: 1.5em;
  @media (min-width: 39em) {
    font-size: 2em;
  }
}
`

const ProfilePicDiv = styled.div`
img {
  border-radius: 30px;
}
`

const About = () => {
return (
  <Layout>
    <AboutContainer>
      <TextSection>
        <h1>Me In About 2 Minutes</h1>
      </TextSection>
      <SplitSection>
        <ProfilePicDiv>
          <Image src={profilePic} alt="I need better photos of myself..." />
        </ProfilePicDiv>
        <TextSection>
          <strong>Hello! I&apos;m Ryan! 👋</strong>
          <p>
            I&apos;m originally from the American Southwest, but I&apos;ve been based out of
            Brooklyn, NY for about 10 years now. I love to build things that make people&apos;s
            lives at least a tiny bit more enjoyable, which is what drew me to working in startup
            operations.
          </p>
        </TextSection>
      </SplitSection>
      {/* <TextSection>
      <h2>My Passions ❤️‍🔥</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae natus non? Assumenda animi dolore sit odit molestiae. Officiis ad reprehenderit numquam exercitationem incidunt dicta sequi necessitatibus eveniet, consequatur recusandae!
      </p>
    </TextSection> */}
      <TextSection>
        <h2>My Work 👨‍💻</h2>
        <p>
          You can see a more detailed history on my{" "}
          <Link href="/cv">
            <a>CV page</a>
          </Link>
          , but to sum it up: I&apos;ve helped build out Operations and AdOps departments for
          several companies. I specialize in process and automation because I like to hire smart
          people to do smart things and don&apos;t want mundane aspects of the job to keep them
          from it. I&apos;m always on the lookout for my next big project, so please feel free to{" "}
          <a href="mailto://ryan@ryro.io">reach out</a> if you have something I might be able to
          help you with.
        </p>
      </TextSection>
      <TextSection>
        <h2>My Hobbies 📸</h2>
        <p>
          A friend once said to me that &quot;having hobbies is your hobby&quot;, which fits
          pretty well. You could probably call me a dilettante. I like to just let myself follow
          whatever spark is interesting me at the moment. In the past few years I&apos;ve dabbled
          in painting, coffee roasting, candle making, making music, electrical engineering, and
          probably a lot more that I&apos;m not remembering.
        </p>

        <p>
          A few that have stuck, however, are{" "}
          <a href="https://www.instagram.com/realryanrogers" target="_blank" rel="noreferrer">
            photography
          </a>
          , game development, and cooking. And if you count watching TikTok as a hobby, then
          that&apos;s probably at the top of the list.
        </p>
      </TextSection>
    </AboutContainer>
  </Layout>
)
}

export default About